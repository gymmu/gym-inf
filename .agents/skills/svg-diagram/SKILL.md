# SVG-Diagramm Skill

## Ziel
Schnelle, konsistente Erstellung von technischen Diagrammen in React mit SVG.

## Prinzipien

### Layout
- **Grid-basiertes Positionieren**: Nutze ein 10px-Raster für alle Komponentenpositionen.
- **Symmetrie**: Berechne Positionen um den Mittelpunkt (Diagrammbreite/2).
- **Kollisionsfreiheit**: Mindestabstand 20px zwischen Komponenten.

### Komponenten
- **Standardbox**: `width=160, height=90` für Prozessoren/Speicher.
- **kleine Box**: `width=130, height=70` für Ein-/Ausgabegeräte.
- **BUS**: Breiter (140-200px), oft zentriert unten.

### Farben
```js
const colors = {
  cpu: "#4caf50",    // grün
  ram: "#2196f3",    // blau
  bus: "#ff9800",    // orange
  storage: "#9c27b0",// lila
  input: "#607d8b",  // grau-blau
  output: "#607d8b", // grau-blau
};
```

### Verbindungen (Lines)
- Start/Ende **exakt an Box-Kanten**, nicht über die Boxen hinaus.
- Berechne Endpunkte: `x + width/2` für horizontal, `y + height` für untere Kante.
- Nutze CSS `stroke-dasharray` für gestrichelte Linien.

## Vorlage
```jsx
const styles = {
  container: { width: "700px", margin: "0 auto" },
  componentBox: (x, y, w, h, color) => ({
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    width: `${w}px`,
    height: `${h}px`,
    backgroundColor: color,
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
};
```

## Checklist für neue Diagramme
- [ ] Grid-Raster für alle Positionen nutzen
- [ ] Symmetrie um Diagrammmitte berechnen
- [ ] Verbindungen zur Box-Kante (nicht Mitte der Box)
- [ ] Mindestabstände prüfen
- [ ] Farben konsistent verwenden
