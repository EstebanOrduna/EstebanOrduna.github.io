# Design System — Personal Portfolio

Referencia para mantener consistencia al agregar nuevas secciones o componentes.

---

## Filosofía

**Bold, oscuro, funcional.** Un acento fuerte sobre negro profundo.  
Sin decoración innecesaria. Lo que aparece tiene un propósito.  
Alto contraste porque la información debe leerse de inmediato.  
Energía contenida — no caótica, sino estructurada.

**Regla de oro:** Un solo color de acento (naranja). Si algo necesita destacar, usa naranja. Si no necesita destacar, usa la escala de grises oscuros.

---

## Paleta de colores

### Backgrounds (capas oscuras — de más oscuro a más claro)
| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#0f172a` | Fondo base de la página |
| `--bg-alt` | `#111827` | Secciones alternadas (`.section-alt`) |
| `--surface` | `#1e293b` | Cards, formularios, elementos elevados |
| Footer | `#080e1a` | Más oscuro que el fondo base |

### Acento — naranja
| Token | Hex | Uso |
|---|---|---|
| `--accent` | `#f97316` | Botones primarios, íconos, bordes activos, subrayados de títulos |
| `--accent-hover` | `#ea580c` | Estado hover de botones naranja |
| `--accent-glow` | `rgba(249,115,22,.18)` | Sombra de glow en hover de cards/botones |

**Derivados del acento en uso:**
- Tags/pills: `background rgba(249,115,22,.12)`, `border rgba(249,115,22,.3)`, `color #fdba74`
- Stack tags: `background rgba(249,115,22,.08)`, `border rgba(249,115,22,.2)`, `color #fdba74`
- Card hover border: `rgba(249,115,22,.35)`
- Focus ring inputs: `box-shadow 0 0 0 3px var(--accent-glow)`

### Texto
| Token | Hex | Uso |
|---|---|---|
| `--text` | `#f1f5f9` | Texto principal |
| `--text-muted` | `#94a3b8` | Texto secundario, labels, descripciones |
| Placeholder | `#475569` | Placeholder de inputs |

### Bordes y separadores
| Token | Hex | Uso |
|---|---|---|
| `--border` | `#334155` | Bordes de cards, inputs, navbar |

### Semánticos
| Color | Hex | Uso |
|---|---|---|
| Success | `#34d399` | Mensajes de éxito (formulario) |
| Error | `#f87171` | Mensajes de error (formulario) |

---

## Tipografía

**Fuente:** Inter — Google Fonts (`wght@400;500;600;700`)

| Elemento | Tamaño | Peso | Notas |
|---|---|---|---|
| H1 hero | `2.4rem` | 700 | `letter-spacing: -.025em` |
| Títulos de sección | `1.5rem` | 700 | Con subrayado naranja 3px |
| Subtítulo hero | `1.05rem` | 400 | `color: --text-muted` |
| Cuerpo / intro | `1.05rem` | 400 | `line-height: 1.8` |
| Cards / items | `0.95rem` | 400–600 | |
| Labels de form | `0.82rem` | 600 | Uppercase, `letter-spacing: .04em` |
| Tags / pills | `0.78rem` | 500 | `letter-spacing: .01em` |
| Stack tags | `0.75rem` | 500 | Monospace: `SFMono-Regular, Consolas` |
| Texto pequeño | `0.82rem` | 400 | Footer, notas |

---

## Espaciado y layout

- **Ancho máximo de contenido:** `960px` (`.container`)
- **Padding de secciones:** `4.5rem 1.5rem` (desktop), `3rem 1.25rem` (móvil <640px)
- **Gap entre cards:** `1.25rem`
- **Breakpoint móvil:** `640px` (columna única, hero centrado)
- **Breakpoint contacto:** `700px` (contact-layout pasa a columna única)

---

## Border radius

| Contexto | Valor |
|---|---|
| Cards, inputs, modales | `12px` (`--radius`) |
| Botones, inputs pequeños | `8px` |
| Stack tags | `6px` |
| Pills / tags redondeadas | `999px` |

---

## Sombras

| Token | Valor | Uso |
|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,.4), 0 4px 16px rgba(0,0,0,.25)` | Cards en reposo |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,.5), 0 8px 32px rgba(0,0,0,.35)` | Cards elevadas |
| Orange glow | `0 8px 32px var(--accent-glow)` | Cards en hover |
| Button glow | `0 0 20px var(--accent-glow)` | Botones en hover |

---

## Componentes

### Card genérica
```css
background: var(--surface);
border-radius: var(--radius);
border: 1px solid var(--border);
box-shadow: var(--shadow-sm);
transition: transform .2s, box-shadow .2s, border-color .2s;

/* Hover */
transform: translateY(-3px);
box-shadow: 0 8px 32px var(--accent-glow);
border-color: rgba(249,115,22,.35);
```

### Timeline item
```css
border-left: 4px solid var(--accent);
/* Hover: translateX(5px) + orange glow shadow */
```

### Botón primario (CTA)
```css
background: var(--accent);
color: #fff;
border-radius: 8px;
/* Hover: accent-hover + orange glow */
```

### Botón secundario
```css
background: transparent;
border: 1px solid var(--border);
color: var(--text);
/* Hover: border-color accent, color accent */
```

### Tag / pill
```css
background: rgba(249,115,22,.12);
border: 1px solid rgba(249,115,22,.3);
color: #fdba74;
border-radius: 999px;
```

### Stack tag (monospace)
```css
background: rgba(249,115,22,.08);
border: 1px solid rgba(249,115,22,.2);
color: #fdba74;
font-family: 'SFMono-Regular', Consolas, monospace;
border-radius: 6px;
```

---

## Hero — elementos especiales

### Gradiente de fondo
```css
background: linear-gradient(135deg, #0f172a 0%, #1c1208 55%, #0f172a 100%);
```
Centro cálido (naranja oscuro) que se desvanece hacia negro puro.

### Textura de puntos
```css
background-image: radial-gradient(circle, rgba(249,115,22,.07) 1px, transparent 1px);
background-size: 28px 28px;
```
Solo en el hero. No repetir en otras secciones.

### Foto de perfil
```css
border: 3px solid rgba(249,115,22,.4);
box-shadow: 0 0 0 6px rgba(249,115,22,.08), 0 8px 32px rgba(0,0,0,.5);
```
Doble anillo: borde naranja sólido + halo externo difuso.

---

## Animación

| Efecto | Duración | Propiedad |
|---|---|---|
| Hover (cards, botones) | `.2s ease` | transform, box-shadow, border-color, color |
| Fade-in al scroll | `.5s ease` | opacity (0→1), translateY (18px→0) |
| Timeline hover | `.2s` | translateX(5px) |

**Fade-in:** Activado por `IntersectionObserver` al llegar al viewport (`threshold: 0.15`). Clase `.fade-in` → `.fade-in.visible`.

---

## Navbar

- Sticky, `backdrop-filter: blur(16px)`
- Fondo: `rgba(15,23,42,.9)` — semitransparente sobre el contenido al hacer scroll
- Borde inferior: `1px solid var(--border)`
- Brand "EO": naranja, `font-weight: 700`
- Links: `--text-muted` en reposo → `--accent` en hover

---

## Qué NO hacer

- No agregar un segundo color de acento. Si algo necesita destacar, usa naranja. Si no, usa la escala de grises.
- No usar fondos blancos ni grises claros. Todo vive en la escala oscura.
- No agregar la textura de puntos fuera del hero.
- No usar `opacity` para suavizar el naranja en íconos — úsalo al 100%.
- No usar gradientes de colores llamativos fuera del hero.
