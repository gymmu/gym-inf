/**
 * Schritt-Generatoren für die AlgoViz-Komponente.
 *
 * Jede Funktion bekommt eine Liste und gibt eine Liste von Schritten zurück.
 * Die Zeilennummern (`line`) passen zu den Code-Konstanten in dieser Datei.
 */

const clone = (arr) => arr.map((v) => v);

/* ══════════════════════════════════════════════════════════
   Bubble Sort
   ══════════════════════════════════════════════════════════ */

export const bubbleSortCode = `function bubbleSort(liste) {
  for (let i = 0; i < liste.length - 1; i++) {
    for (let j = 0; j < liste.length - 1 - i; j++) {
      if (liste[j] > liste[j + 1]) {
        const temp = liste[j];
        liste[j] = liste[j + 1];
        liste[j + 1] = temp;
      }
    }
  }
  return liste;
}`;

export function bubbleSortSteps(input) {
  const arr = clone(input);
  const n = arr.length;
  const steps = [];
  const sorted = [];
  let comparisons = 0;
  let swaps = 0;

  steps.push({
    array: clone(arr),
    description: "Start: Die Liste ist noch unsortiert.",
    line: 1,
    vars: { länge: n },
  });

  for (let i = 0; i < n - 1; i++) {
    steps.push({
      array: clone(arr),
      sorted: clone(sorted),
      description: `Durchlauf ${i + 1}: Das grösste noch unsortierte Element wandert ganz nach rechts.`,
      line: 2,
      vars: { i, Vergleiche: comparisons, Tausche: swaps },
    });

    for (let j = 0; j < n - 1 - i; j++) {
      comparisons++;
      steps.push({
        array: clone(arr),
        compare: [j, j + 1],
        sorted: clone(sorted),
        description: `Vergleiche liste[${j}] = ${arr[j]} mit liste[${j + 1}] = ${arr[j + 1]}.`,
        line: 4,
        vars: { i, j, Vergleiche: comparisons, Tausche: swaps },
      });

      if (arr[j] > arr[j + 1]) {
        swaps++;
        steps.push({
          array: clone(arr),
          swap: [j, j + 1],
          sorted: clone(sorted),
          description: `${arr[j]} > ${arr[j + 1]} → die beiden werden getauscht.`,
          line: 6,
          vars: { i, j, Vergleiche: comparisons, Tausche: swaps },
        });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({
          array: clone(arr),
          swap: [j, j + 1],
          sorted: clone(sorted),
          description:
            "Getauscht. Der grössere Wert ist eine Position weiter rechts.",
          line: 7,
          vars: { i, j, Vergleiche: comparisons, Tausche: swaps },
        });
      } else {
        steps.push({
          array: clone(arr),
          compare: [j, j + 1],
          sorted: clone(sorted),
          description: `${arr[j]} ≤ ${arr[j + 1]} → kein Tausch nötig.`,
          line: 4,
          vars: { i, j, Vergleiche: comparisons, Tausche: swaps },
        });
      }
    }

    sorted.push(n - 1 - i);
    steps.push({
      array: clone(arr),
      sorted: clone(sorted),
      description: `Position ${n - 1 - i} ist endgültig richtig: ${arr[n - 1 - i]} ist an seinem Platz.`,
      line: 9,
      vars: { i, Vergleiche: comparisons, Tausche: swaps },
    });
  }

  sorted.push(0);
  steps.push({
    array: clone(arr),
    sorted: arr.map((_, index) => index),
    description: `Fertig! Die Liste ist sortiert. (${comparisons} Vergleiche, ${swaps} Tausche)`,
    line: 11,
    vars: { Vergleiche: comparisons, Tausche: swaps },
  });

  return steps;
}

/* ══════════════════════════════════════════════════════════
   Quick Sort (Lomuto-Partition)
   ══════════════════════════════════════════════════════════ */

export const quickSortCode = `function quickSort(liste, links = 0, rechts = liste.length - 1) {
  if (links >= rechts) return liste;

  const pivot = liste[rechts];
  let i = links;

  for (let j = links; j < rechts; j++) {
    if (liste[j] < pivot) {
      [liste[i], liste[j]] = [liste[j], liste[i]];
      i++;
    }
  }

  [liste[i], liste[rechts]] = [liste[rechts], liste[i]];

  quickSort(liste, links, i - 1);
  quickSort(liste, i + 1, rechts);
  return liste;
}`;

export function quickSortSteps(input) {
  const arr = clone(input);
  const steps = [];
  const fixed = [];
  let comparisons = 0;
  let swaps = 0;

  steps.push({
    array: clone(arr),
    description: "Start: Wir sortieren die ganze Liste.",
    line: 1,
    vars: { länge: arr.length },
  });

  const sort = (links, rechts, tiefe) => {
    if (links > rechts) return;
    if (links === rechts) {
      fixed.push(links);
      steps.push({
        array: clone(arr),
        sorted: clone(fixed),
        range: [links, rechts],
        description: `Nur ein Element übrig (Position ${links}) → schon sortiert.`,
        line: 2,
        vars: { links, rechts, Tiefe: tiefe },
      });
      return;
    }

    steps.push({
      array: clone(arr),
      sorted: clone(fixed),
      range: [links, rechts],
      pivot: rechts,
      description: `Neuer Bereich [${links} … ${rechts}]. Pivot ist das letzte Element: ${arr[rechts]}.`,
      line: 4,
      vars: { links, rechts, Pivot: arr[rechts], Tiefe: tiefe },
    });

    const pivot = arr[rechts];
    let i = links;

    for (let j = links; j < rechts; j++) {
      comparisons++;
      steps.push({
        array: clone(arr),
        sorted: clone(fixed),
        range: [links, rechts],
        pivot: rechts,
        compare: [j],
        description: `Ist liste[${j}] = ${arr[j]} kleiner als der Pivot ${pivot}?`,
        line: 8,
        vars: { links, rechts, i, j, Pivot: pivot, Vergleiche: comparisons },
      });

      if (arr[j] < pivot) {
        swaps++;
        steps.push({
          array: clone(arr),
          sorted: clone(fixed),
          range: [links, rechts],
          pivot: rechts,
          swap: [i, j],
          description: `Ja → ${arr[j]} kommt in den linken Teil: tausche Position ${i} und ${j}.`,
          line: 9,
          vars: { links, rechts, i, j, Pivot: pivot, Tausche: swaps },
        });
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        steps.push({
          array: clone(arr),
          sorted: clone(fixed),
          range: [links, rechts],
          pivot: rechts,
          compare: [i - 1],
          description: `Die Grenze des linken Teils rückt weiter: i = ${i}.`,
          line: 10,
          vars: { links, rechts, i, j, Pivot: pivot, Tausche: swaps },
        });
      } else {
        steps.push({
          array: clone(arr),
          sorted: clone(fixed),
          range: [links, rechts],
          pivot: rechts,
          compare: [j],
          description: `Nein → ${arr[j]} bleibt im rechten Teil.`,
          line: 8,
          vars: { links, rechts, i, j, Pivot: pivot, Vergleiche: comparisons },
        });
      }
    }

    swaps++;
    steps.push({
      array: clone(arr),
      sorted: clone(fixed),
      range: [links, rechts],
      swap: [i, rechts],
      description: `Der Pivot ${pivot} wird an seine endgültige Position ${i} getauscht.`,
      line: 14,
      vars: { links, rechts, i, Pivot: pivot, Tausche: swaps },
    });
    [arr[i], arr[rechts]] = [arr[rechts], arr[i]];
    fixed.push(i);

    steps.push({
      array: clone(arr),
      sorted: clone(fixed),
      range: [links, rechts],
      description: `Position ${i} ist fertig. Links davon sind alle kleiner, rechts alle grösser.`,
      line: 14,
      vars: { links, rechts, i, Pivot: pivot },
    });

    steps.push({
      array: clone(arr),
      sorted: clone(fixed),
      range: [links, Math.max(links, i - 1)],
      description: `Jetzt der linke Teil [${links} … ${i - 1}] (rekursiver Aufruf).`,
      line: 16,
      vars: { links, rechts: i - 1, Tiefe: tiefe + 1 },
    });
    sort(links, i - 1, tiefe + 1);

    steps.push({
      array: clone(arr),
      sorted: clone(fixed),
      range: [Math.min(i + 1, rechts), rechts],
      description: `Jetzt der rechte Teil [${i + 1} … ${rechts}] (rekursiver Aufruf).`,
      line: 17,
      vars: { links: i + 1, rechts, Tiefe: tiefe + 1 },
    });
    sort(i + 1, rechts, tiefe + 1);
  };

  sort(0, arr.length - 1, 0);

  steps.push({
    array: clone(arr),
    sorted: arr.map((_, index) => index),
    description: `Fertig! Die Liste ist sortiert. (${comparisons} Vergleiche, ${swaps} Tausche)`,
    line: 18,
    vars: { Vergleiche: comparisons, Tausche: swaps },
  });

  return steps;
}

/* ══════════════════════════════════════════════════════════
   Lineare Suche
   ══════════════════════════════════════════════════════════ */

export const linearSearchCode = `function lineareSuche(liste, gesucht) {
  for (let i = 0; i < liste.length; i++) {
    if (liste[i] === gesucht) {
      return i;
    }
  }
  return -1;
}`;

export function makeLinearSearchSteps(target) {
  return (input) => {
    const arr = clone(input);
    const steps = [
      {
        array: clone(arr),
        description: `Wir suchen die Zahl ${target} und starten ganz links.`,
        line: 1,
        vars: { gesucht: target },
      },
    ];

    for (let i = 0; i < arr.length; i++) {
      const hit = arr[i] === target;
      steps.push({
        array: clone(arr),
        compare: hit ? [] : [i],
        found: hit ? i : undefined,
        description: hit
          ? `Treffer! liste[${i}] = ${arr[i]} ist die gesuchte Zahl. Rückgabe: ${i}.`
          : `liste[${i}] = ${arr[i]} ist nicht ${target} → weiter nach rechts.`,
        line: hit ? 4 : 3,
        vars: { i, gesucht: target, Vergleiche: i + 1 },
      });
      if (hit) return steps;
    }

    steps.push({
      array: clone(arr),
      description: `${target} kommt in der Liste nicht vor. Rückgabe: -1.`,
      line: 7,
      vars: { gesucht: target, Vergleiche: arr.length },
    });
    return steps;
  };
}

/* ══════════════════════════════════════════════════════════
   Binäre Suche (Liste muss sortiert sein)
   ══════════════════════════════════════════════════════════ */

export const binarySearchCode = `function binaereSuche(liste, gesucht) {
  let links = 0;
  let rechts = liste.length - 1;

  while (links <= rechts) {
    const mitte = Math.floor((links + rechts) / 2);

    if (liste[mitte] === gesucht) return mitte;
    if (liste[mitte] < gesucht) {
      links = mitte + 1;
    } else {
      rechts = mitte - 1;
    }
  }
  return -1;
}`;

export function makeBinarySearchSteps(target) {
  return (input) => {
    const arr = clone(input).sort((a, b) => a - b);
    const steps = [
      {
        array: clone(arr),
        description: `Die Liste ist sortiert. Wir suchen ${target} und halbieren den Bereich immer wieder.`,
        line: 1,
        vars: { gesucht: target },
      },
    ];

    let links = 0;
    let rechts = arr.length - 1;
    let schritte = 0;

    while (links <= rechts) {
      schritte++;
      const mitte = Math.floor((links + rechts) / 2);
      steps.push({
        array: clone(arr),
        range: [links, rechts],
        pivot: mitte,
        description: `Bereich [${links} … ${rechts}] → Mitte ist Position ${mitte} mit dem Wert ${arr[mitte]}.`,
        line: 6,
        vars: { links, rechts, mitte, Schritte: schritte },
      });

      if (arr[mitte] === target) {
        steps.push({
          array: clone(arr),
          range: [links, rechts],
          found: mitte,
          description: `Treffer! ${target} steht an Position ${mitte}. Gefunden in ${schritte} Schritten.`,
          line: 8,
          vars: { mitte, Schritte: schritte },
        });
        return steps;
      }

      if (arr[mitte] < target) {
        links = mitte + 1;
        steps.push({
          array: clone(arr),
          range: [links, rechts],
          description: `${arr[mitte]} < ${target} → die linke Hälfte fällt weg.`,
          line: 10,
          vars: { links, rechts, Schritte: schritte },
        });
      } else {
        rechts = mitte - 1;
        steps.push({
          array: clone(arr),
          range: [links, Math.max(links, rechts)],
          description: `${arr[mitte]} > ${target} → die rechte Hälfte fällt weg.`,
          line: 12,
          vars: { links, rechts, Schritte: schritte },
        });
      }
    }

    steps.push({
      array: clone(arr),
      description: `${target} kommt nicht vor. Rückgabe: -1 (nach ${schritte} Schritten).`,
      line: 15,
      vars: { Schritte: schritte },
    });
    return steps;
  };
}

/* ══════════════════════════════════════════════════════════
   Maximum suchen
   ══════════════════════════════════════════════════════════ */

export const maximumCode = `function maximum(liste) {
  let groesstes = liste[0];

  for (let i = 1; i < liste.length; i++) {
    if (liste[i] > groesstes) {
      groesstes = liste[i];
    }
  }
  return groesstes;
}`;

export function maximumSteps(input) {
  const arr = clone(input);
  const steps = [
    {
      array: clone(arr),
      found: 0,
      description: `Wir merken uns das erste Element als bisher grösstes: ${arr[0]}.`,
      line: 2,
      vars: { grösstes: arr[0], "bester Index": 0 },
    },
  ];

  let bestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    steps.push({
      array: clone(arr),
      compare: [i],
      found: bestIndex,
      description: `Ist liste[${i}] = ${arr[i]} grösser als ${arr[bestIndex]}?`,
      line: 5,
      vars: { i, grösstes: arr[bestIndex] },
    });

    if (arr[i] > arr[bestIndex]) {
      bestIndex = i;
      steps.push({
        array: clone(arr),
        found: bestIndex,
        description: `Ja → neues Maximum: ${arr[bestIndex]}.`,
        line: 6,
        vars: { i, grösstes: arr[bestIndex], "bester Index": bestIndex },
      });
    } else {
      steps.push({
        array: clone(arr),
        found: bestIndex,
        description: `Nein → ${arr[bestIndex]} bleibt das Maximum.`,
        line: 5,
        vars: { i, grösstes: arr[bestIndex] },
      });
    }
  }

  steps.push({
    array: clone(arr),
    found: bestIndex,
    description: `Das Maximum ist ${arr[bestIndex]} (Position ${bestIndex}).`,
    line: 9,
    vars: { grösstes: arr[bestIndex] },
  });

  return steps;
}

/* ══════════════════════════════════════════════════════════
   Umkehren (reverse) mit zwei Zeigern
   ══════════════════════════════════════════════════════════ */

export const reverseCode = `function umkehren(liste) {
  let links = 0;
  let rechts = liste.length - 1;

  while (links < rechts) {
    [liste[links], liste[rechts]] = [liste[rechts], liste[links]];
    links++;
    rechts--;
  }
  return liste;
}`;

export function reverseSteps(input) {
  const arr = clone(input);
  const steps = [
    {
      array: clone(arr),
      description: "Zwei Zeiger: einer ganz links, einer ganz rechts.",
      line: 2,
      vars: { links: 0, rechts: arr.length - 1 },
    },
  ];

  let links = 0;
  let rechts = arr.length - 1;

  while (links < rechts) {
    steps.push({
      array: clone(arr),
      swap: [links, rechts],
      description: `Tausche Position ${links} (${arr[links]}) mit Position ${rechts} (${arr[rechts]}).`,
      line: 6,
      vars: { links, rechts },
    });
    [arr[links], arr[rechts]] = [arr[rechts], arr[links]];
    steps.push({
      array: clone(arr),
      swap: [links, rechts],
      description: "Getauscht. Beide Zeiger rücken einen Schritt nach innen.",
      line: 7,
      vars: { links: links + 1, rechts: rechts - 1 },
    });
    links++;
    rechts--;
  }

  steps.push({
    array: clone(arr),
    sorted: arr.map((_, index) => index),
    description: "Die Zeiger haben sich getroffen — die Liste ist umgekehrt.",
    line: 10,
    vars: { links, rechts },
  });

  return steps;
}
