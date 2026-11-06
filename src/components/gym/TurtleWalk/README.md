# TurtleWalk

Einstieg ins Thema Pfade: Die Schildkröte (`Turtle`) läuft eine Pfadangabe ab
und zeichnet sie dabei Stück für Stück.

Sie bekommt **zwei Zettel** (als getrennte Panels A und B dargestellt):

- **A — Zeichenvorschrift** (gelb): _womit_ gezeichnet wird: `stroke`,
  `stroke-width`, `stroke-linecap`/`-linejoin`, `fill`.
- **B — Weganweisung** (blau): _wohin_ sie läuft: das Attribut `d`.

## Knotenpunkte

Jedes Wegstück ist durchnummeriert (Start = `0`). Die Nummer erscheint an drei
Stellen gleich: am **Knotenpunkt auf der Leinwand**, in der **Schrittliste** und
am **Wegstück im Code**. Hover oder Klick an einer Stelle markiert die beiden
anderen. Gefüllte Knoten = Stift unten, helle/gestrichelte Knoten = Stift oben
(`M`).

Die Weganweisung `d` erscheint nur noch zweimal als Text (Schrittliste und
Code-Block); das freie Eingabefeld ist hinter «✎ selber schreiben» versteckt.

Die Schildkröte startet immer im Koordinatenursprung (0 / 0). Bei `M` hebt sie
den Stift (gepunktete Hilfslinie), bei `L`, `H`, `V`, `Z` zeichnet sie. Sie ist
immer an der aktuellen Position sichtbar — auch wenn sie gerade nicht zeichnet.

```jsx
import TurtleWalk from "@/components/gym/TurtleWalk/TurtleWalk";

<TurtleWalk />
<TurtleWalk initialPath="M 40 160 L 100 50 L 160 160 Z" initialColor="#b8bb26" />
```

## Props

- `initialPath` – Start-Weganweisung (`d`)
- `initialColor` – Start-Strichfarbe
- `initialWidth` – Start-Strichdicke

## Bedienung

- **▶ Loslaufen / ⏸ Pause**, **⏭ Nächstes Wegstück**, **⟲ Zurück zu 0 / 0**
- Regler **Weg** (frei scrubben) und **Tempo**
- Klick auf ein Wegstück in der Liste **oder im Code** springt an dessen **Ende**
  — das Stück ist dann fertig gezeichnet
- «✎ selber schreiben» blendet das Eingabefeld für `d` ein
