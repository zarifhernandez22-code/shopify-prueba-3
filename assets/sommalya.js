/*
 * Sommalya: movimiento de la página.
 * Todo es progresivo: sin JavaScript (o con "reducir movimiento") el contenido
 * se ve completo y estático.
 */
(() => {
  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  root.classList.add('sm-js');

  const ready = (fn) => (document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn());

  ready(() => {
    /* 1. Aparición escalonada al hacer scroll */
    const groups = [
      '.sm .sm-head',
      '.sm .sm-pillar',
      '.sm .sm-ingredient',
      '.sm .sm-step',
      '.sm .sm-need',
      '.sm .sm-quote',
      '.sm .sm-faq details',
      '.sm .sm-trustbar__item',
      '.sm .sm-stat',
      '.sm .sm-split > *',
      '.sm .sm-compare',
      '.sm .sm-fb__row',
      '.sm.sm-cta .sm__wrap > *',
    ];
    const targets = document.querySelectorAll(groups.join(','));
    targets.forEach((el) => {
      const siblings = Array.from(el.parentElement.children);
      el.style.setProperty('--sm-i', Math.min(siblings.indexOf(el), 8));
      el.classList.add('sm-anim');
    });

    const show = (el) => el.classList.add('is-in');
    if (!('IntersectionObserver' in window)) {
      targets.forEach(show);
    } else {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
        }),
        { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
      );
      targets.forEach((el) => io.observe(el));
    }

    /* 1b. Animaciones de texto: data-sm-text="words | fade | type | light".
           Los títulos .sm-h2 sin atributo usan "words" (revelado por palabras). */
    document.querySelectorAll('.sm .sm-h2:not([data-sm-text])').forEach((el) => el.setAttribute('data-sm-text', 'words'));
    const textEls = document.querySelectorAll('[data-sm-text]');
    const splitText = (el, mode) => {
      let w = 0;
      let c = 0;
      const walk = (node) => {
        Array.from(node.childNodes).forEach((child) => {
          if (child.nodeType === Node.TEXT_NODE) {
            const frag = document.createDocumentFragment();
            child.textContent.split(/(\s+)/).forEach((part) => {
              if (!part) return;
              if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
              const outer = document.createElement('span');
              outer.className = 'sm-word';
              outer.style.setProperty('--w', w++);
              const inner = document.createElement('span');
              if (mode === 'type') {
                Array.from(part).forEach((ch) => {
                  const s = document.createElement('span');
                  s.className = 'sm-ch';
                  s.style.setProperty('--c', c++);
                  s.textContent = ch;
                  inner.appendChild(s);
                });
                c++;
              } else {
                inner.textContent = part;
              }
              outer.appendChild(inner);
              frag.appendChild(outer);
            });
            child.replaceWith(frag);
          } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
            walk(child);
          }
        });
      };
      walk(el);
      el.style.setProperty('--sm-words', w);
      el.style.setProperty('--sm-chars', c);
    };
    textEls.forEach((el) => {
      const mode = el.getAttribute('data-sm-text') || 'words';
      if (!el.textContent.trim()) return;
      el.setAttribute('aria-label', el.textContent.trim().replace(/\s+/g, ' '));
      splitText(el, mode);
      el.classList.add('sm-text', `sm-text--${mode}`);
    });
    if ('IntersectionObserver' in window) {
      const tio = new IntersectionObserver((entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-text-in'); tio.unobserve(e.target); }
      }), { threshold: 0.2 });
      textEls.forEach((el) => { if (!el.classList.contains('sm-text--light')) tio.observe(el); });
    } else {
      textEls.forEach((el) => el.classList.add('is-text-in'));
    }

    /* 2. Contadores: "759 mg" cuenta desde 0 al entrar en pantalla */
    const counters = document.querySelectorAll('[data-sm-count]');
    const runCounter = (el) => {
      const match = el.textContent.trim().match(/^([^\d]*)([\d.,]+)(.*)$/);
      if (!match) return;
      const [, pre, num, post] = match;
      const target = parseFloat(num.replace(/,/g, ''));
      if (!isFinite(target) || target === 0) return;
      const start = performance.now();
      const dur = 1400;
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = pre + Math.round(target * eased).toLocaleString('es-MX') + post;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if ('IntersectionObserver' in window) {
      const cio = new IntersectionObserver((entries) => entries.forEach((e) => {
        if (e.isIntersecting) { runCounter(e.target); cio.unobserve(e.target); }
      }), { threshold: 0.6 });
      counters.forEach((el) => cio.observe(el));
    }

    /* 3. Scroll: frase que se ilumina palabra por palabra, parallax del
          frasco, línea de progreso de los pasos y barra de compra fija */
    const statements = document.querySelectorAll('.sm-statement__text, .sm-text--light');
    const heroImgs = document.querySelectorAll('.sm-hero--studio .sm-hero__media img');
    const steps = document.querySelectorAll('.sm-steps');
    const bars = document.querySelectorAll('.sm-stickybar');
    const hero = document.querySelector('.sm-hero');

    let ticking = false;
    const onScroll = () => {
      ticking = false;
      const vh = window.innerHeight;

      statements.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
        const words = el.querySelectorAll('.w, .sm-word');
        const lit = Math.round(p * words.length);
        words.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
      });

      heroImgs.forEach((img) => {
        const r = img.getBoundingClientRect();
        if (r.bottom < 0) return;
        img.style.setProperty('--sm-par', `${Math.min(80, window.scrollY * 0.12)}px`);
      });

      steps.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (r.height + vh * 0.2)));
        el.style.setProperty('--sm-progress', p.toFixed(3));
      });

      if (hero && bars.length) {
        const past = hero.getBoundingClientRect().bottom < 0;
        const footer = document.querySelector('footer, .footer');
        const nearEnd = footer ? footer.getBoundingClientRect().top < vh : false;
        bars.forEach((b) => b.classList.toggle('is-visible', past && !nearEnd));
      }
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();

    /* 4. Inclinación sutil del frasco con el cursor (solo escritorio) */
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      document.querySelectorAll('.sm-hero--studio .sm-hero__media').forEach((media) => {
        media.addEventListener('pointermove', (e) => {
          const r = media.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          media.style.setProperty('--sm-rx', `${(-y * 5).toFixed(2)}deg`);
          media.style.setProperty('--sm-ry', `${(x * 7).toFixed(2)}deg`);
        });
        media.addEventListener('pointerleave', () => {
          media.style.setProperty('--sm-rx', '0deg');
          media.style.setProperty('--sm-ry', '0deg');
        });
      });
    }
  });
})();
