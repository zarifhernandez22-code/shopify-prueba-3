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
3. **Barra de confianza**: envío gratis, atención personalizada, hecho en EE. UU. y pago seguro.
4. **Características y beneficios**: "lo que contiene" frente a "lo que sientes", como el ejemplo de Tesla.
5. **Manifiesto**: una frase que se ilumina palabra por palabra al hacer scroll.
6. **La fórmula** y el **modo de uso**, con una línea de progreso.
7. **Testimonios**: se muestran solos en cuanto agregues reseñas reales.
8. **Completa tu rutina**: el Kit y las Gotas de Guanábana.
9. **Preguntas frecuentes** que responden objeciones.
10. **Llamada a la acción final**.
11. **Pie de página** con boletín.

Al bajar aparece una barra de compra fija con Cortisol Calm.

**Movimiento**: `assets/sommalya.js` controla la aparición escalonada, los contadores, el parallax y la inclinación del frasco, la frase que se ilumina y la barra fija. Si el visitante activó "reducir movimiento", todo se muestra estático.

**Catálogo (`templates/collection.json`)**
1. **Encabezado animado** («Sommalya · Catálogo»). El título se revela palabra por palabra. Incluye el número de productos con contador y enlaces rápidos a cada producto.
2. **Cinta** con los ingredientes de Cortisol Calm.
3. **Cuadrícula de productos** de Shopify, con filtros.
4. **Manifiesto** de Cortisol Calm.
5. **Barra de confianza** y **llamada a la acción final**.

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
10. Llamada a la acción final.
11. Productos recomendados.

No hay opción de suscripción.

Las fotos de producto están en `assets/` y las secciones las usan mediante el campo *Imagen incluida en el tema*. Si eliges otra imagen en el editor, esa tiene prioridad.

## Fotos de producto

Las fotos editadas están en `docs/fotos-producto/` y también en `assets/sommalya-foto-*`. Tienen fondo de estudio Sommalya, no llevan la marca de agua del proveedor y sus textos están en español.

| Producto | Fotos |
| --- | --- |
| Cortisol Calm | Frasco; datos (759 mg, 1 cápsula al día, 60 días); ingredientes |
| Kit Inositol & Cortisol | Los dos frascos; estilo de vida; cada frasco por separado; ficha nutrimental de cada uno |
| Gotas de Guanábana | Frasco y caja; estilo de vida; datos (1800 mg, 60 ml, hoja y fruto) |

Las fotos ya están cargadas en cada producto de Shopify, antes de la foto original del proveedor. Para regenerarlas, usa el script de imágenes con las fotos originales.

## Estado en Shopify

- Cada producto tiene asignada su plantilla: `cortisol-calm`, `kit-inositol-cortisol` y `graviola`.
- Las descripciones están reescritas en español con los datos de las etiquetas, sin el enlace al grupo de WhatsApp del proveedor.
- `templates/product.json` es la plantilla general y la editas tú desde Shopify. No se sobrescribe desde el repositorio.
- Productos renombrados: Cortisol Calm, Kit Inositol & Cortisol y Gotas de Guanábana. Proveedor: Sommalya. Tipo: Suplementos. Los handles no cambiaron.
- Se eliminó la foto original del proveedor de cada producto.
- Las 7 páginas de ejemplo están en español: Contacto, Nosotros, Preguntas frecuentes, Política de devoluciones (sin devoluciones), Envíos, Términos y condiciones, y Rastrea tu pedido. Sus textos están en `docs/paginas/` y `docs/politicas/`.
- Las políticas de *Configuración → Políticas* hay que pegarlas a mano: la conexión con Shopify no tiene permiso para editarlas.

## Antes de publicar: validar

- **Dosis**: según las etiquetas, Cortisol Calm se toma 1 cápsula al día (60 días), Myo-Inositol 3 cápsulas al día y Corti-Soothe 2 cápsulas al día (30 días). De las Gotas de Guanábana no hay dosis en las fotos, así que la landing remite al empaque.
- **Declaraciones de salud**: están redactadas con lenguaje prudente. Revísalas con tu asesor regulatorio (COFEPRIS).
- **Envío gratis en tu primer pedido**: ajústalo a tu política real.
- **Sin garantía de devolución**: la tienda no promete devoluciones ni reembolsos. Los mensajes de confianza hablan de pago seguro, atención personalizada, fabricación en EE. UU. y envío. Revisa que tu política de reembolso en Configuración → Políticas diga lo mismo.
- **Fotos**: se quitó la marca de agua de "Hyper Moda". Confirma con tu proveedor que puedes usar sus fotos sin ella. Los frascos siguen mostrando las marcas de los fabricantes (Megneta y Zoyava).
