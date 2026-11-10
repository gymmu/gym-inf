# SvgPathMaze

Zwischenboss **«Der Pfadmeister»**: ein Labyrinth, das Pfadi (die Schildkröte
aus dem Pfadgebirge) ablaufen muss.

```jsx
import SvgPathMaze from "@/components/gym/SvgPathMaze/SvgPathMaze";

<SvgPathMaze />
<SvgPathMaze bossHp={100} onVictory={() => console.log("geschafft")} />
```

## Spielprinzip

- Das Spielfeld ist 420 × 300 gross und in Zellen von 60 × 60 eingeteilt. Rund
  um das Feld ist ein **Rahmen** gezeichnet.
- In **zufällig gewählten Zellen** stehen Hindernisse (Felsblöcke = Kreise,
  Mauerstücke = Rechtecke). Dichte und Anzahl steigen mit der Levelnummer.
- Ein Labyrinth wird nur ausgegeben, wenn es eine **bequem breite Gasse** zum
  Ziel gibt: Die Lösbarkeitsprüfung rechnet mit einer zusätzlichen Reserve von
  rund 11 px rund um jedes Hindernis. So entstehen keine haarfeinen Durchgänge,
  die man von Hand gar nicht treffen kann.
- Start ist immer unten links (`30 / 270`), das Ziel (Stern) oben rechts
  (`390 / 30`).
- Die Spielerin schreibt eine **Weganweisung** (`d`). Sie muss mit
  `M 30 270` beginnen. Pfadi läuft den Weg danach ab.
- **Die Farbe des Pfades spielt keine Rolle** — gezählt wird nur, ob Pfadi das
  Ziel erreicht.
- Berührt Pfadi ein Hindernis oder den Rahmen, ist der Versuch vorbei. Auch
  Sprünge mit gehobenem Stift (`M`) zählen als Laufen — durch Hindernisse
  hindurch geht es also nicht.
- Jedes gelöste Labyrinth kostet den Pfadmeister 25 Kraft (einmal pro Level).

## Aufbau

- `mazeLevel.js` — Spielfeldmasse, zufälliges Labyrinth (`makeMaze`) inklusive
  BFS-Prüfung, dass es überhaupt einen Weg gibt, sowie die Treffertests
  (`hitsObstacle`, `hitsFrame`, `reachedGoal`).
- `SvgPathMaze.jsx` — Spielfeld, Animation und Panel mit der Weganweisung. Das
  Ablaufen des Pfades nutzt `toSegments`/`walkState` aus `TurtleWalk`, die
  Figur ist die `Turtle`-Komponente.

## Props

- `bossHp` – Lebenspunkte des Pfadmeisters (Standard `100`)
- `onVictory` – Rückruf, sobald der Boss besiegt ist
- `className` – zusätzliche CSS-Klasse
