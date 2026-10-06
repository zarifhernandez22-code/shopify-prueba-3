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
Descanso `#7C8BA1` (azul niebla) · Digestión `#8E9A6E` (oliva) · Energía `#B8956A` (ámbar) · Defensas `#A87D6E` (arcilla).

Tipografía: **Newsreader** (titulares, serif ligera) + **Red Hat Text** (texto). Son las que el tema ya trae configuradas.

La paleta se guarda en *Configuración del tema → Colores*, y las secciones Sommalya la leen de ahí.

## Estructura

**Encabezado:** barra de avisos (envío gratis · garantía · ingredientes) arriba del menú.

**Página principal (`templates/index.json`)**
1. Portada: titular "Lo esencial, bien hecho.", dos botones y tres datos de confianza.
2. Barra de confianza: envío, garantía, origen natural y pago seguro.
3. Colección por necesidad: Descanso, Digestión, Energía y Defensas.
4. Principios: origen natural, dosis con sentido, calidad verificada y satisfacción.
5. Historia de la marca, con imagen y texto.
6. Proceso: seleccionamos, formulamos, analizamos y te acompañamos.
7. Compromiso de calidad, en una banda oscura con cifras.
8. Comparativa entre Sommalya y los suplementos genéricos.
9. Preguntas frecuentes.
10. Garantía de 30 días y aviso legal.

**Landing de producto (`templates/product.<necesidad>.json`)**
1. Ficha de compra nativa de Shopify: galería, título, precio, *resumen Sommalya* (frase, 3 beneficios e insignias), variantes, carrito y acordeones (Descripción, Ingredientes, Modo de uso, Advertencias, Envíos y garantía).
2. Barra de confianza.
3. Beneficios (3 pilares).
4. Para quién es.
5. La fórmula: ingredientes con dosis y origen botánico.
6. Modo de uso en 3 pasos.
7. Comparativa.
8. Preguntas frecuentes del producto.
9. Garantía, con un botón que regresa a la compra.
10. Productos recomendados.

## Puesta en marcha en Shopify

1. Sube el tema (`shopify theme push` o conecta este repositorio con GitHub en *Tienda online → Temas*).
2. Crea los productos con estos *handles* para que funcionen los enlaces de la portada: `descanso`, `digestion`, `energia`, `defensas`.
3. En cada producto, en *Plantilla del tema*, elige la que le corresponde: `product.descanso`, `product.digestion`, `product.energia` o `product.defensas`.
4. Opcional: en el editor, dentro de "Colección por necesidad", asigna cada producto a su bloque para mostrar el precio y la foto reales.
5. Sube fotografía real: portada, historia y productos. Mientras no haya fotos se muestra un frasco ilustrado.
6. Crea la página `/pages/nosotros`, a la que enlazan los botones de filosofía.

## Antes de publicar: validar

- **Fórmulas y dosis**: son una propuesta. Confírmalas con tu fabricante y con la normativa sanitaria de tu país (COFEPRIS, INVIMA, ANMAT, etc.).
- **Declaraciones de salud**: están redactadas con lenguaje prudente ("contribuye a", "uso tradicional"). Revísalas con tu asesor regulatorio.
- **Cifras de calidad** ("100% lotes analizados", "GMP"): publícalas solo si tu fabricante puede respaldarlas.
- **Envío gratis desde $799** y **garantía de 30 días**: ajústalos a tu política real.
- **Testimonios**: la sección `Sommalya · Testimonios` existe, pero no viene con reseñas de ejemplo. Usa solo reseñas reales (por ejemplo, con una app de reseñas).
- **Suscripción**: la maqueta muestra la opción "suscripción −15%". En Shopify requiere una app de suscripciones, como Shopify Subscriptions.
