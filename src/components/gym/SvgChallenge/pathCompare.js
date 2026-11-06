/**
 * pathCompare — vergleicht zwei `d`-Attribute *geometrisch*.
 *
 * Ein Pfad kann auf viele Arten aufgeschrieben werden, die alle genau
 * dasselbe Bild ergeben:
 *
 *   M 40 40 L 160 40 L 160 160   (absolut)
 *   M 40 40 l 120 0 l 0 120      (relativ)
 *   M 40 40 H 160 V 160          (Kurzbefehle)
 *   M40,40 160,40 160,160        (Kommas, implizites L)
 *
 * Ein Textvergleich würde hier drei falsche Lösungen melden. Darum rechnen
 * wir jede Pfadangabe zuerst in **absolute Wegstücke** um und vergleichen
 * erst dann.
 *
 * Bewusst *nicht* gleichgesetzt wird ein mit `Z` geschlossener Weg und ein
 * Weg, der nur zufällig beim Startpunkt endet: Das ist ein echter
 * Unterschied (Ecke statt zwei Strichenden) und oft genau die Lernfrage.
 */

/** Wie viele Zahlen gehören zu welchem Befehl? */
const ARITY = { M: 2, L: 2, H: 1, V: 1, Z: 0, C: 6, S: 4, Q: 4, T: 2, A: 7 };

const TOKEN = /[MmLlHhVvZzCcSsQqTtAa]|-?\d*\.?\d+(?:e[-+]?\d+)?/g;

/**
 * Zerlegt eine Pfadangabe in einzelne Befehle.
 *
 * Kann auch die Kurzschreibweisen: `M 10 10 20 20` (weitere Zahlen nach
 * `M` sind ein `L`) und `L 10 10 20 20` (der Befehl wiederholt sich).
 *
 * @param {string} d Inhalt des Attributs `d`
 * @returns {{cmd: string, args: number[]}[]}
 */
export function parsePathData(d) {
  const tokens = String(d ?? "").match(TOKEN) ?? [];
  const commands = [];
  let cmd = null;
  let index = 0;

  while (index < tokens.length) {
    const token = tokens[index];

    if (/[a-z]/i.test(token)) {
      cmd = token;
      index += 1;
      if (ARITY[cmd.toUpperCase()] === 0) commands.push({ cmd, args: [] });
      continue;
    }

    if (!cmd || ARITY[cmd.toUpperCase()] === 0) {
      // Zahl ohne (sinnvollen) Befehl davor — überspringen.
      index += 1;
      continue;
    }

    const arity = ARITY[cmd.toUpperCase()];
    const args = tokens.slice(index, index + arity).map(Number);
    if (args.length < arity || args.some(Number.isNaN)) break;
    index += arity;
    commands.push({ cmd, args });

    // Nach einem `M` zählen weitere Zahlenpaare als Linien.
    if (cmd === "M") cmd = "L";
    else if (cmd === "m") cmd = "l";
  }

  return commands;
}

const reflect = (point, around) => [
  2 * around[0] - point[0],
  2 * around[1] - point[1],
];

/**
 * Rechnet eine Pfadangabe in absolute Teilwege um.
 *
 * Jeder Teilweg hat einen Startpunkt, eine Liste von Wegstücken (alle
 * absolut, `H`/`V` als `L`, `S`/`T` ausgeschrieben) und die Information,
 * ob er mit `Z` geschlossen wurde.
 *
 * @param {string} d
 * @returns {{start: number[], closed: boolean, segs: {type: string, pts: number[][], flags?: number[]}[]}[]}
 */
export function toSubpaths(d) {
  const subpaths = [];
  let current = null;
  let [cx, cy] = [0, 0];
  let [sx, sy] = [0, 0];
  let lastCubic = null;
  let lastQuad = null;

  const open = (start) => {
    current = { start, closed: false, segs: [] };
    subpaths.push(current);
    return current;
  };

  const add = (type, pts, flags) => {
    if (!current || current.closed) open([cx, cy]);
    current.segs.push(flags ? { type, pts, flags } : { type, pts });
    const end = pts[pts.length - 1];
    cx = end[0];
    cy = end[1];
  };

  for (const { cmd, args } of parsePathData(d)) {
    const upper = cmd.toUpperCase();
    const rel = cmd !== upper && upper !== "Z";
    const ox = rel ? cx : 0;
    const oy = rel ? cy : 0;
    const px = (i) => ox + args[i];
    const py = (i) => oy + args[i];

    if (upper !== "C" && upper !== "S") lastCubic = null;
    if (upper !== "Q" && upper !== "T") lastQuad = null;

    switch (upper) {
      case "M": {
        cx = px(0);
        cy = py(1);
        sx = cx;
        sy = cy;
        open([cx, cy]);
        break;
      }
      case "L":
        add("L", [[px(0), py(1)]]);
        break;
      case "H":
        add("L", [[px(0), cy]]);
        break;
      case "V":
        add("L", [[cx, py(0)]]);
        break;
      case "C": {
        const c1 = [px(0), py(1)];
        const c2 = [px(2), py(3)];
        const to = [px(4), py(5)];
        add("C", [c1, c2, to]);
        lastCubic = c2;
        break;
      }
      case "S": {
        const c1 = lastCubic ? reflect(lastCubic, [cx, cy]) : [cx, cy];
        const c2 = [px(0), py(1)];
        const to = [px(2), py(3)];
        add("C", [c1, c2, to]);
        lastCubic = c2;
        break;
      }
      case "Q": {
        const c = [px(0), py(1)];
        const to = [px(2), py(3)];
        add("Q", [c, to]);
        lastQuad = c;
        break;
      }
      case "T": {
        const c = lastQuad ? reflect(lastQuad, [cx, cy]) : [cx, cy];
        const to = [px(0), py(1)];
        add("Q", [c, to]);
        lastQuad = c;
        break;
      }
      case "A": {
        const to = [px(5), py(6)];
        add("A", [[args[0], args[1]], to], [args[2], args[3], args[4]]);
        break;
      }
      case "Z": {
        if (current) {
          current.segs.push({ type: "Z", pts: [[sx, sy]] });
          current.closed = true;
        }
        cx = sx;
        cy = sy;
        break;
      }
      default:
        break;
    }
  }

  return subpaths;
}

const near = (a, b, tol) =>
  Math.abs(a[0] - b[0]) <= tol && Math.abs(a[1] - b[1]) <= tol;

/** Besteht ein Teilweg nur aus geraden Linien? */
function straightOnly(sub) {
  return sub.segs.every((seg) => seg.type === "L" || seg.type === "Z");
}

/** Punktfolge eines Teilwegs (ohne das `Z`-Stück). */
function pointsOf(sub) {
  const points = [sub.start];
  for (const seg of sub.segs) {
    if (seg.type === "Z") continue;
    points.push(seg.pts[seg.pts.length - 1]);
  }
  return points;
}

function sameSegments(a, b, tol) {
  if (a.segs.length !== b.segs.length) return false;
  if (!near(a.start, b.start, tol)) return false;
  return a.segs.every((seg, index) => {
    const other = b.segs[index];
    if (seg.type !== other.type) return false;
    if (seg.pts.length !== other.pts.length) return false;
    if ((seg.flags ?? []).join() !== (other.flags ?? []).join()) return false;
    return seg.pts.every((point, i) => near(point, other.pts[i], tol));
  });
}

function samePointSequence(a, b, tol) {
  return a.length === b.length && a.every((p, i) => near(p, b[i], tol));
}

/**
 * Vergleicht zwei Teilwege.
 *
 * @returns {"equal"|"closed"|"count"|"order"|"different"}
 */
function compareSubpath(wanted, got, tol) {
  if (wanted.closed !== got.closed) {
    // Trotzdem schauen, ob der Weg sonst stimmt — dann ist nur `Z` das Thema.
    // Ein offener Weg, der beim Startpunkt endet, darf dabei einen Punkt
    // mehr haben als der geschlossene.
    const trim = (points) =>
      points.length > 1 && near(points[0], points[points.length - 1], tol)
        ? points.slice(0, -1)
        : points;
    const a = trim(pointsOf(wanted));
    const b = trim(pointsOf(got));
    const sameShape =
      samePointSequence(a, b, tol) ||
      samePointSequence(a, [...b].reverse(), tol);
    return sameShape ? "closed" : "different";
  }

  if (sameSegments(wanted, got, tol)) return "equal";

  if (straightOnly(wanted) && straightOnly(got)) {
    const a = pointsOf(wanted);
    const b = pointsOf(got);
    if (a.length !== b.length) return "count";

    // Dasselbe Bild entsteht auch rückwärts — und bei geschlossenen Wegen
    // zusätzlich, wenn man an einer anderen Ecke beginnt.
    const variants = [b, [...b].reverse()];
    if (wanted.closed) {
      for (const base of [b, [...b].reverse()]) {
        for (let shift = 1; shift < base.length; shift += 1) {
          variants.push([...base.slice(shift), ...base.slice(0, shift)]);
        }
      }
    }
    if (variants.some((variant) => samePointSequence(a, variant, tol))) {
      return "equal";
    }

    // Gleiche Punkte, andere Reihenfolge → anderes Bild.
    const rest = [...b];
    const allFound = a.every((point) => {
      const index = rest.findIndex((other) => near(point, other, tol));
      if (index < 0) return false;
      rest.splice(index, 1);
      return true;
    });
    return allFound ? "order" : "different";
  }

  if (wanted.segs.length !== got.segs.length) return "count";
  return "different";
}

/**
 * Vergleicht zwei `d`-Attribute inhaltlich.
 *
 * Absolut/relativ, `H`/`V` statt `L`, Kommas oder Zeilenumbrüche spielen
 * keine Rolle — entscheidend ist der Weg, der dabei entsteht.
 *
 * @param {string} wantedD Ziel
 * @param {string} gotD Lösung
 * @param {number} [tolerance]
 * @returns {{ok: boolean, note: string|null, wantedParts: number, gotParts: number}}
 */
export function comparePathData(wantedD, gotD, tolerance = 2) {
  const wanted = toSubpaths(wantedD);
  const got = toSubpaths(gotD);
  const result = (ok, note) => ({
    ok,
    note,
    wantedParts: wanted.length,
    gotParts: got.length,
  });

  if (wanted.length === 0) {
    return result(got.length === 0, got.length === 0 ? null : "parts");
  }
  if (wanted.length !== got.length) return result(false, "parts");

  const open = [...got];
  let note = null;

  for (const sub of wanted) {
    let bestIndex = -1;
    let best = "different";
    const rank = { equal: 0, closed: 1, order: 2, count: 3, different: 4 };

    open.forEach((candidate, index) => {
      const verdict = compareSubpath(sub, candidate, tolerance);
      if (rank[verdict] < rank[best] || bestIndex < 0) {
        best = verdict;
        bestIndex = index;
      }
    });

    if (bestIndex >= 0) open.splice(bestIndex, 1);
    if (best !== "equal" && note === null) note = best;
  }

  return result(note === null, note);
}

/** Enthält die Pfadangabe mindestens einen relativen Zeichenbefehl? */
export function usesRelative(d) {
  return parsePathData(d).some(
    ({ cmd }) => cmd !== cmd.toUpperCase() && cmd.toUpperCase() !== "Z",
  );
}

/** Enthält die Pfadangabe (ausser dem ersten `M`) absolute Zeichenbefehle? */
export function usesAbsolute(d) {
  return parsePathData(d)
    .slice(1)
    .some(({ cmd }) => cmd === cmd.toUpperCase() && cmd.toUpperCase() !== "Z");
}
