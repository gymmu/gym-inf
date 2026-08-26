# Character

Generischer Charakter: ein Text mit aufgesetzten Comic-Augen.
Alle Figuren (Biit, Professor ASCII, DEC, HEX …) folgen dem gleichen Aufbau.

## Varianten

| Variante          | Verhalten                                                          |
| ----------------- | ------------------------------------------------------------------ |
| `variant="large"` | Augen folgen dem Cursor, Figur schläft ein, wenn der Cursor die Seite verlässt, plus unregelmässiges Blinzeln. |
| `variant="small"` | nur unregelmässiges Blinzeln (leichtgewichtig, z. B. inline im Text). |

## Verwendung

```jsx
import Biit from "@/components/gym/Biit/Biit";
import { Ascii, Dec, Hex } from "@/components/gym/Character/characters.jsx";

<Biit value="1" />                 // grosse Variante (Standard)
<Biit variant="small" size={48} /> // kleine Variante
<Ascii />
<Dec variant="small" size={40} />
<Hex />
```

## Eigener Charakter

```jsx
import Character from "@/components/gym/Character/Character";

<Character
  text="UTF"
  fill="#d79921"                                   // Vollfarbe (ohne Farbverlauf)
  // oder: gradient={[{ offset: "0%", color: "#83a598" }, { offset: "100%", color: "#458588" }]}
  geometry={{ fontSize: 56, charSpacing: 34, eyeSpacing: 32, paddingX: 50 }}
  variant="large"
  label="Onkel UTF"
/>;
```

Presets liegen in `characters.jsx` (`CHARACTER_PRESETS`), neue Figuren lassen
sich mit `createCharacter("name")` als Komponente erzeugen.

### Props

- `text` – Zeichenfolge der Figur
- `variant` – `"large"` | `"small"`
- `size` – Breite in px (Standard: 220 gross / 56 klein)
- `gradient` – Array von `{ offset, color }` oder `null`
- `fill` – Vollfarbe, wenn kein Farbverlauf gesetzt ist
- `geometry` – `fontSize`, `charSpacing`, `eyeSpacing`, `eyeRadiusX/Y`,
  `pupilRadius`, `paddingX`, `rectY`, `rectHeight`, `rectRadius`, `eyeOffsetY`,
  `paddingBottom`
- `glow` – Glow-Filter an/aus
- `label` – Barrierefreier Name
