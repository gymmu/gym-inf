# Turtle

Comic-Schildkröte als Einstieg in Pfade: Sie hält in der einen Hand den Zettel
mit der **Bewegungsvorschrift** (`d="…"`) und in der anderen den Stift, mit dem
sie die Spur zeichnet.

```jsx
import Turtle from "@/components/gym/Turtle/Turtle";

<Turtle note={["M 20 20", "L 90 20", "L 90 70", "Z"]} />
<Turtle variant="small" size={110} trail={false} />
<Turtle mood="surprised" noteTitle="Befehle" note={["vorwärts 100", "links 90"]} />
```

## Props

- `note` – Array von Zeilen (oder String mit `\n`), max. 4 Zeilen auf dem Zettel
- `noteTitle` – Überschrift auf dem Zettel (Standard `d =`)
- `variant` – `"large"` (Augen folgen dem Cursor) | `"small"` (nur Blinzeln)
- `size` – Breite in px (Standard 320 gross / 120 klein)
- `mood` – `"happy"` | `"neutral"` | `"surprised"`
- `trail` – gezeichnete Spur hinter der Schildkröte anzeigen
- `animate` – Wippen, Kritzeln, Zettelflattern an/aus
- `label` – barrierefreier Name
