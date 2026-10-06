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

**Página principal (`templates/index.json`): Cortisol Calm como producto estrella, con estética de estudio**
1. Portada de estudio: fondo gris claro continuo, foto de Cortisol Calm, precio y tres datos (759 mg, 10 ingredientes, 60 cápsulas).
2. Barra de confianza.
3. Por qué Cortisol Calm: calma, enfoque y descanso.
4. La fórmula: sus 10 ingredientes.
5. Modo de uso.
6. Completa tu rutina: Myo-Inositol, el kit y Graviola.
7. Principios de Sommalya.
8. Preguntas frecuentes.
9. Garantía y aviso legal.

**Landings de producto**

| Producto | Plantilla | Handle que usan los enlaces |
| --- | --- | --- |
| Cortisol Calm | `product.cortisol-calm` | `cortisol-calm` |
| Myo-Inositol 16 en 1 | `product.myo-inositol` | `myo-inositol` |
| Kit Inositol & Cortisol | `product.kit-inositol-cortisol` | `kit-inositol-cortisol-paquete-2-pcs` (ya existe) |
| Graviola en gotas | `product.graviola` | `graviola` |

Cada landing tiene:
1. Ficha de compra con resumen, insignias y acordeones.
2. Barra de confianza.
3. Beneficios.
4. Para quién es.
5. La fórmula.
6. Modo de uso.
7. Preguntas frecuentes.
8. Garantía.
9. Productos recomendados.

No hay opción de suscripción.

Las fotos de producto están en `assets/` y las secciones las usan mediante el campo *Imagen incluida en el tema*. Si eliges otra imagen en el editor, esa tiene prioridad.

## Puesta en marcha en Shopify

1. Crea los productos que faltan con estos handles: `cortisol-calm`, `myo-inositol` y `graviola`. Sube sus fotos a cada producto.
2. En cada producto, en *Plantilla del tema*, elige la que le corresponde. Al Kit asígnale `product.kit-inositol-cortisol`.
3. Limpia la descripción del Kit: hoy incluye el enlace al grupo de WhatsApp del proveedor, y la landing la muestra en la pestaña *Descripción*.

## Antes de publicar: validar

- **Dosis**: las landings remiten a "la dosis indicada en la etiqueta". Si quieres mostrar la dosis exacta, cópiala de cada etiqueta.
- **Declaraciones de salud**: están redactadas con lenguaje prudente. Revísalas con tu asesor regulatorio (COFEPRIS).
- **Envío gratis desde $799** y **garantía de 30 días**: ajústalos a tu política real.
- **Fotos**: los frascos muestran las marcas de los fabricantes (Megneta, Corti-Soothe, etc.), y la foto de Graviola lleva la marca de agua de "Hyper Moda". Para una imagen de marca coherente, conviene usar fotos propias o confirmar que tienes permiso de uso.
