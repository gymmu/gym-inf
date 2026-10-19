/** Hilfsfunktionen zum Zeichnen der Karten von Binaria. */

/**
 * Erzeugt einen "organischen" Insel-Umriss (deterministisch, ohne Zufall,
 * damit Server- und Client-Rendering identisch sind).
 */
export function blobPath(cx, cy, radius, seed = 1, points = 10) {
  const coords = [];
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2;
    const wobble =
      0.82 +
      0.1 * Math.sin(angle * 3 + seed) +
      0.08 * Math.sin(angle * 5 + seed * 2.3);
    coords.push([
      cx + Math.cos(angle) * radius * wobble * 1.25,
      cy + Math.sin(angle) * radius * wobble,
    ]);
  }
  return smoothPath(coords, true);
}

/**
 * Weicher Pfad (Catmull-Rom -> kubische Bézier) durch alle Punkte.
 * `closed` schliesst den Pfad zu einer Fläche.
 */
export function smoothPath(points, closed = false) {
  if (points.length < 2) return "";

  const get = (i) => {
    if (closed) return points[(i + points.length) % points.length];
    return points[Math.max(0, Math.min(points.length - 1, i))];
  };

  let d = `M ${get(0)[0].toFixed(2)} ${get(0)[1].toFixed(2)}`;
  const last = closed ? points.length : points.length - 1;

  for (let i = 0; i < last; i++) {
    const p0 = get(i - 1);
    const p1 = get(i);
    const p2 = get(i + 1);
    const p3 = get(i + 2);

    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;

    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }

  if (closed) d += " Z";
  return d;
}

/**
 * Serpentinen-Layout für die Levels einer Welt (wie in einem Jump'n'Run).
 * Gibt für jedes Level eine Position im Koordinatensystem 0..width / 0..height.
 */
export function serpentineLayout(
  count,
  width = 1000,
  height = 520,
  perRow = 4,
) {
  const rows = Math.max(1, Math.ceil(count / perRow));
  const marginX = 110;
  const marginY = 90;
  const usableW = width - marginX * 2;
  const usableH = height - marginY * 2;
  const rowGap = rows > 1 ? usableH / (rows - 1) : 0;

  return Array.from({ length: count }, (_, index) => {
    const row = Math.floor(index / perRow);
    const posInRow = index % perRow;
    const itemsInRow = Math.min(perRow, count - row * perRow);
    const colGap = itemsInRow > 1 ? usableW / (itemsInRow - 1) : 0;
    const leftToRight = row % 2 === 0;
    const col = leftToRight ? posInRow : itemsInRow - 1 - posInRow;

    return {
      x: marginX + (itemsInRow > 1 ? col * colGap : usableW / 2),
      // leichte Wellenbewegung innerhalb einer Reihe
      y:
        marginY +
        row * rowGap +
        Math.sin((index + 1) * 1.7) * Math.min(28, rowGap / 4 || 28),
    };
  });
}
