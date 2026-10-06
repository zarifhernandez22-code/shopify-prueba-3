# Sommalya: concepto de tienda

Maqueta navegable: `docs/sommalya-maqueta.html` (ábrela en el navegador).

## Identidad

| Rol | Color | Uso |
| --- | --- | --- |
| Fondo (marfil) | `#F8F6F1` | Fondo general, limpio y cálido sin ser blanco clínico |
| Texto (verde carbón) | `#1F2A24` | Texto, botones y bandas oscuras |
| Acento (salvia) | `#6B7B67` | Palabras en cursiva, iconos y detalles |
| Lino | `#E9E4DA` | Fondos secundarios y divisores |

Cada producto tiene un acento propio, apagado y sobrio, que solo tiñe los detalles de su landing:
Cortisol Calm `#5F7A99` (azul pizarra) · Myo-Inositol `#B07A8A` (rosa empolvado) · Kit `#8A7FA0` (malva) · Graviola `#7F9A6E` (verde hoja).

Tipografía: **Newsreader** (titulares, serif ligera) + **Red Hat Text** (texto). Son las que el tema ya trae configuradas.

La paleta se guarda en *Configuración del tema → Colores*, y las secciones Sommalya la leen de ahí.

## Estructura

**Encabezado:** barra de avisos y logotipo de la hoja (`assets/sommalya-logo.png`). El logotipo se muestra mientras no subas uno propio en *Configuración del tema → Logotipo*, y también se usa como favicon.

**Página principal (`templates/index.json`)**

Sigue la estructura de una landing que convierte:
1. **Portada de estudio**. Tiene:
   - Un título de valor: "Calma y enfoque, todos los días".
   - Un subtítulo que explica cómo funciona y para quién es.
   - La foto del producto.
   - Una línea de confianza. La calificación aparece sola si instalas una app de reseñas.
   - El botón de compra y contadores animados.
2. **Cinta de ingredientes** en movimiento.
3. **Barra de confianza**: envío, garantía, hecho en EE. UU. y pago seguro.
4. **Características y beneficios**: "lo que contiene" frente a "lo que sientes", como el ejemplo de Tesla.
5. **Manifiesto**: una frase que se ilumina palabra por palabra al hacer scroll.
6. **La fórmula** y el **modo de uso**, con una línea de progreso.
7. **Testimonios**: se muestran solos en cuanto agregues reseñas reales.
8. **Completa tu rutina**: el Kit y las Gotas de Guanábana.
9. **Preguntas frecuentes** que responden objeciones.
10. **Llamada a la acción final** con garantía.
11. **Pie de página** con boletín.

Al bajar aparece una barra de compra fija con Cortisol Calm.

**Movimiento**: `assets/sommalya.js` controla la aparición escalonada, los contadores, el parallax y la inclinación del frasco, la frase que se ilumina y la barra fija. Si el visitante activó "reducir movimiento", todo se muestra estático.

**Catálogo (`templates/collection.json`)**
1. **Encabezado animado** («Sommalya · Catálogo»). El título se revela palabra por palabra. Incluye el número de productos con contador y enlaces rápidos a cada producto.
2. **Cinta** con los ingredientes de Cortisol Calm.
3. **Cuadrícula de productos** de Shopify, con filtros.
4. **Manifiesto** de Cortisol Calm.
5. **Barra de confianza** y **garantía**.

**Animaciones de texto**: los títulos de sección se revelan palabra por palabra de forma automática. En la portada y en el catálogo puedes elegir entre cinco opciones en *Animación del título*: revelado por palabras, aparición suave, escritura, iluminación al hacer scroll o sin animación.

**Estudio de movimiento**: es un artifact con vista previa para probar títulos y cintas. Te da los valores exactos que debes copiar en el editor de Shopify. Su código está en `docs/estudio/`.

**Landings de producto**

| Producto | Plantilla | Handle que usan los enlaces |
| --- | --- | --- |
| Cortisol Calm | `product.cortisol-calm` | `suplemento-cortisol-calm-megneta-60cp` |
| Kit Inositol & Cortisol | `product.kit-inositol-cortisol` | `kit-inositol-cortisol-paquete-2-pcs` (ya existe) |
| Gotas de Guanábana | `product.graviola` | `gotas-de-guanabana-organico-digestion` |

Cada landing tiene:
1. Ficha de compra con resumen, insignias y acordeones.
2. Cinta de ingredientes.
3. Barra de confianza.
4. Características y beneficios.
5. Para quién es.
6. La fórmula.
7. Modo de uso.
8. Testimonios.
9. Preguntas frecuentes con objeciones.
10. Garantía.
11. Productos recomendados.

No hay opción de suscripción.

Las fotos de producto están en `assets/` y las secciones las usan mediante el campo *Imagen incluida en el tema*. Si eliges otra imagen en el editor, esa tiene prioridad.

## Puesta en marcha en Shopify

1. En cada producto, en *Plantilla del tema*, elige la que le corresponde. Al Kit asígnale `product.kit-inositol-cortisol`.
2. Limpia la descripción de los 3 productos: hoy incluyen el enlace al grupo de WhatsApp del proveedor, y la landing la muestra en la pestaña *Descripción*.

## Antes de publicar: validar

- **Dosis**: las landings remiten a "la dosis indicada en la etiqueta". Si quieres mostrar la dosis exacta, cópiala de cada etiqueta.
- **Declaraciones de salud**: están redactadas con lenguaje prudente. Revísalas con tu asesor regulatorio (COFEPRIS).
- **Envío gratis desde $799** y **garantía de 30 días**: ajústalos a tu política real.
- **Fotos**: los frascos muestran las marcas de los fabricantes (Megneta, Corti-Soothe, etc.), y la foto de Graviola lleva la marca de agua de "Hyper Moda". Para una imagen de marca coherente, conviene usar fotos propias o confirmar que tienes permiso de uso.
