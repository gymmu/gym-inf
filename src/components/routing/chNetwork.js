/**
 * Ein kleines Netz für Contraction Hierarchies.
 *
 * Die Geschichte dahinter: zwei Dörfer mit lauter kleinen Strassen, dazwischen
 * eine Autobahn. Lange Fahrten benutzen fast immer die Autobahn — genau diese
 * «Hierarchie» nutzt das Verfahren aus.
 *
 * Wichtig für das Verständnis:
 *   1. Die Wichtigkeit (der Rang) ist *nicht* vorgegeben, sondern wird in der
 *      Vorverarbeitung ausgerechnet: Wer sich wegnehmen lässt, ohne dass viele
 *      Abkürzungen nötig werden, ist unwichtig.
 *   2. Die Abkürzungen werden in der Anfrage wirklich gebraucht. Aus dem
 *      Wohnquartier führt am Ende *nur noch* eine Abkürzung nach oben — alle
 *      echten Strassen dort gehen «bergab» und sind für die Suche gesperrt.
 */

export const CH_VIEW = { w: 820, h: 480 };

/* ── Orte ───────────────────────────────────────────────────────────
   `ebene` = Kategorie der Strassen am Ort (0 Quartier, 1 Haupt, 2 Autobahn).
   Sie dient nur als Tiebreak, wenn zwei Orte gleich leicht wegzunehmen sind.
   Der eigentliche Rang wird unten berechnet.                            */

export const CH_NODES = [
  { id: "S", label: "Wohnquartier", x: 62, y: 320, ebene: 0 },
  { id: "E", label: "Schule", x: 105, y: 440, ebene: 0 },
  { id: "A", label: "Dorfplatz", x: 155, y: 255, ebene: 0 },
  { id: "K", label: "Klinik", x: 180, y: 160, ebene: 0 },
  { id: "B", label: "Markt", x: 215, y: 395, ebene: 0 },
  { id: "F", label: "Bahnhof", x: 285, y: 290, ebene: 1 },
  { id: "P", label: "Auffahrt West", x: 330, y: 170, ebene: 2 },
  { id: "W", label: "Rastplatz", x: 400, y: 85, ebene: 1 },
  { id: "Q", label: "Autobahnkreuz", x: 480, y: 58, ebene: 2 },
  { id: "X", label: "Tunnel", x: 565, y: 95, ebene: 1 },
  { id: "R", label: "Ausfahrt Ost", x: 625, y: 185, ebene: 2 },
  { id: "G", label: "Industrie", x: 670, y: 295, ebene: 1 },
  { id: "D", label: "Gewerbe", x: 700, y: 400, ebene: 0 },
  { id: "T", label: "Hotel", x: 782, y: 325, ebene: 0 },
];

export const CH_NODE_BY_ID = Object.fromEntries(CH_NODES.map((n) => [n.id, n]));

export const chName = (id) => CH_NODE_BY_ID[id]?.label ?? id;

/** «1 Strasse fällt weg» / «3 Strassen fallen weg» */
const strassenWeg = (n) =>
  n === 1 ? "1 Strasse fällt weg" : `${n} Strassen fallen weg`;

/** «1 Abkürzung» / «2 Abkürzungen» */
const abkWort = (n) => (n === 1 ? "1 Abkürzung" : `${n} Abkürzungen`);

/* ── Strassen: Fahrzeit in Minuten ─────────────────────────────────── */

export const CH_EDGES = [
  { a: "S", b: "E", w: 3, typ: "neben" },
  { a: "E", b: "B", w: 5, typ: "neben" },
  { a: "S", b: "A", w: 4, typ: "neben" },
  { a: "A", b: "B", w: 3, typ: "neben" },
  { a: "A", b: "K", w: 2, typ: "neben" },
  { a: "K", b: "F", w: 4, typ: "neben" },
  { a: "B", b: "F", w: 4, typ: "neben" },
  { a: "F", b: "P", w: 3, typ: "haupt" },
  { a: "P", b: "W", w: 3, typ: "autobahn" },
  { a: "W", b: "Q", w: 4, typ: "autobahn" },
  { a: "Q", b: "X", w: 4, typ: "autobahn" },
  { a: "X", b: "R", w: 3, typ: "autobahn" },
  { a: "R", b: "G", w: 3, typ: "haupt" },
  { a: "G", b: "D", w: 4, typ: "neben" },
  { a: "D", b: "T", w: 5, typ: "neben" },
];

export const chKey = (a, b) => (a < b ? `${a}|${b}` : `${b}|${a}`);

/* ── Hilfsfunktionen auf einer Adjazenzliste ───────────────────────── */

/** Baut eine Adjazenzliste: id → Map(nachbar → gewicht). */
function baueAdjazenz(kanten) {
  const adj = {};
  for (const n of CH_NODES) adj[n.id] = new Map();
  for (const e of kanten) {
    const alt = adj[e.a].get(e.b);
    if (alt === undefined || e.w < alt) {
      adj[e.a].set(e.b, e.w);
      adj[e.b].set(e.a, e.w);
    }
  }
  return adj;
}

/**
 * Kürzester Weg von `von` nach `nach`, ohne den Knoten `ohne` zu benutzen.
 * Das ist die sogenannte «Witness Search»: Gibt es einen Zeugen dafür, dass
 * man die Abkürzung gar nicht braucht?
 */
function kuerzesteDistanzOhne(adj, aktiv, von, nach, ohne, limit) {
  const dist = { [von]: 0 };
  const fertig = new Set();
  const offen = new Set([von]);
  while (offen.size > 0) {
    let akt = null;
    for (const id of offen) if (akt === null || dist[id] < dist[akt]) akt = id;
    offen.delete(akt);
    fertig.add(akt);
    if (akt === nach) return dist[akt];
    if (dist[akt] > limit) return Infinity;
    for (const [to, w] of adj[akt]) {
      if (to === ohne || !aktiv.has(to) || fertig.has(to)) continue;
      const neu = dist[akt] + w;
      if (dist[to] === undefined || neu < dist[to]) {
        dist[to] = neu;
        offen.add(to);
      }
    }
  }
  return Infinity;
}

/**
 * Probiert aus, was beim Kontrahieren von `v` passieren würde, ohne etwas
 * zu verändern. Liefert die nötigen Abkürzungen und die Nachbarpaare.
 */
function probeKontraktion(adj, aktiv, v) {
  const nachbarn = [...adj[v].keys()].filter((x) => aktiv.has(x) && x !== v);
  const paare = [];
  for (let i = 0; i < nachbarn.length; i++) {
    for (let j = i + 1; j < nachbarn.length; j++) {
      const u = nachbarn[i];
      const w = nachbarn[j];
      const ueber = adj[v].get(u) + adj[v].get(w);
      const ohne = kuerzesteDistanzOhne(
        adj,
        new Set([...aktiv].filter((x) => x !== v)),
        u,
        w,
        v,
        ueber,
      );
      paare.push({ u, w, v, ueber, ohne, noetig: ohne > ueber });
    }
  }
  const noetig = paare.filter((p) => p.noetig).length;
  return {
    nachbarn,
    paare,
    noetig,
    weg: nachbarn.length,
    prio: noetig - nachbarn.length,
  };
}

/* ══════════════════════════════════════════════════════════════════
   Phase 1 — Vorverarbeitung: Wichtigkeit bestimmen und kontrahieren
   ══════════════════════════════════════════════════════════════════ */

/**
 * Kontrahiert alle Orte und erzeugt dabei eine Schrittliste zum Durchklicken.
 *
 * Vor jeder Runde wird für *jeden* noch vorhandenen Ort durchgerechnet, wie
 * teuer sein Wegnehmen wäre:
 *
 *     Priorität = (nötige Abkürzungen) − (Strassen, die wegfallen)
 *
 * Wer die kleinste Priorität hat, ist am unwichtigsten und kommt zuerst weg.
 * Genau so entsteht der Rang: Rang 1 = zuerst kontrahiert = unwichtigster Ort.
 * Bei Gleichstand gewinnt die kleinere Strassenkategorie — Quartierstrassen
 * vor Hauptstrassen vor Autobahn.
 */
function berechneVorverarbeitung() {
  const adj = baueAdjazenz(CH_EDGES);
  const aktiv = new Set(CH_NODES.map((n) => n.id));
  const shortcuts = []; // { a, b, w, ueber, key }
  const schritte = [];
  const rang = {};
  const schonWeg = [];

  const snap = (extra) =>
    schritte.push({
      kontrahiert: [],
      aktuell: null,
      pruefung: null,
      prioritaeten: null,
      probe: null,
      shortcuts: shortcuts.map((s) => ({ ...s })),
      rang: { ...rang },
      ...extra,
    });

  snap({
    phase: "start",
    text:
      "Die Wichtigkeit der Orte ist nicht vorgegeben — sie wird ausgerechnet. Dazu wird bei jedem Ort nur *probiert*, ihn wegzunehmen: " +
      "Priorität = (Abkürzungen, die man danach bräuchte) − (Strassen, die dabei wegfallen). " +
      "Kleinste Priorität = unwichtigster Ort → kommt zuerst weg und bekommt Rang 1.",
  });

  let runde = 0;
  while (aktiv.size > 0) {
    runde += 1;

    /* ── Wichtigkeit aller übrigen Orte ausrechnen ──────────────── */
    const roh = [...aktiv].map((id) => ({
      id,
      ...probeKontraktion(adj, aktiv, id),
    }));

    // In der ersten Runde wird jede einzelne Probe gezeigt — damit klar wird,
    // wie die Zahlen in der Tabelle überhaupt zustande kommen.
    if (runde === 1) {
      const bisher = [];
      for (const k of roh) {
        bisher.push({
          id: k.id,
          noetig: k.noetig,
          weg: k.weg,
          prio: k.prio,
          gewaehlt: false,
        });
        const paartexte = k.paare.map(
          (p) =>
            `${p.u}–${p.w}: über ${k.id} ${p.ueber} min, ohne ${k.id} ${p.ohne === Infinity ? "gar nicht" : `${p.ohne} min`} → ${p.noetig ? "Abkürzung nötig" : "keine nötig"}`,
        );
        snap({
          phase: "probe",
          aktuell: k.id,
          kontrahiert: [...schonWeg],
          probe: {
            id: k.id,
            nachbarn: k.nachbarn,
            paare: k.paare,
            noetig: k.noetig,
            weg: k.weg,
            prio: k.prio,
          },
          prioritaeten: bisher.map((b) => ({ ...b })),
          text:
            `Probe: Was würde es kosten, ${chName(k.id)} wegzunehmen? Nachbarn: ${k.nachbarn.map(chName).join(", ") || "keine"} → ${k.paare.length} Nachbarpaar${k.paare.length === 1 ? "" : "e"} prüfen. ` +
            (paartexte.length > 0 ? `${paartexte.join("; ")}. ` : "") +
            `Also: ${abkWort(k.noetig)} nötig, ${strassenWeg(k.weg)} → Priorität ${k.noetig} − ${k.weg} = ${k.prio}.`,
        });
      }
    }

    const kandidaten = roh.sort(
      (x, y) =>
        x.prio - y.prio ||
        CH_NODE_BY_ID[x.id].ebene - CH_NODE_BY_ID[y.id].ebene ||
        x.id.localeCompare(y.id),
    );

    const gewinner = kandidaten[0];
    const v = gewinner.id;
    const gleichstand = kandidaten.filter(
      (k) => k.prio === gewinner.prio,
    ).length;

    snap({
      phase: "wichtigkeit",
      aktuell: v,
      kontrahiert: [...schonWeg],
      prioritaeten: kandidaten.map((k) => ({
        id: k.id,
        noetig: k.noetig,
        weg: k.weg,
        prio: k.prio,
        gewaehlt: k.id === v,
      })),
      text:
        `Runde ${runde}: alle Proben nebeneinander, sortiert nach Priorität (= nötige Abkürzungen − wegfallende Strassen). ` +
        `${chName(v)} ist am günstigsten: ${abkWort(gewinner.noetig)} nötig, ${strassenWeg(gewinner.weg)} → Priorität ${gewinner.prio}. ` +
        (gleichstand > 1
          ? `${gleichstand} Orte liegen gleichauf — bei Gleichstand kommt die kleinere Strassenkategorie zuerst weg (Quartier vor Haupt vor Autobahn). `
          : "") +
        `${chName(v)} bekommt Rang ${runde}.`,
    });

    rang[v] = runde;

    /* ── Nachbarpaare prüfen und Abkürzungen setzen ─────────────── */
    const { nachbarn } = gewinner;

    if (nachbarn.length < 2) {
      snap({
        phase: "pruef",
        aktuell: v,
        kontrahiert: [...schonWeg],
        text:
          nachbarn.length === 1
            ? `${chName(v)} hat nur noch einen Nachbarn. Durch den Ort führt kein Weg mehr hindurch — es braucht keine Abkürzung.`
            : `${chName(v)} hat gar keine Nachbarn mehr — der letzte Ort. Nichts mehr zu tun.`,
      });
    }

    for (let i = 0; i < nachbarn.length; i++) {
      for (let j = i + 1; j < nachbarn.length; j++) {
        const u = nachbarn[i];
        const w = nachbarn[j];
        const ueber = adj[v].get(u) + adj[v].get(w);
        const ohne = kuerzesteDistanzOhne(
          adj,
          new Set([...aktiv].filter((x) => x !== v)),
          u,
          w,
          v,
          ueber,
        );
        const noetig = ohne > ueber;

        if (noetig) {
          adj[u].set(w, ueber);
          adj[w].set(u, ueber);
          shortcuts.push({ a: u, b: w, w: ueber, ueber: v, key: chKey(u, w) });
        }

        snap({
          phase: "pruef",
          aktuell: v,
          kontrahiert: [...schonWeg],
          pruefung: { u, w, v, ueber, ohne, noetig },
          text: noetig
            ? `${chName(u)} → ${chName(w)} dauert über ${chName(v)} ${ueber} min. Ohne ${chName(v)} wäre es ${ohne === Infinity ? "gar nicht möglich" : `${ohne} min`} — also kommt eine Abkürzung ${u}–${w} mit ${ueber} min ins Netz.`
            : `${chName(u)} → ${chName(w)} dauert über ${chName(v)} ${ueber} min, es geht aber auch ohne ${chName(v)} in ${ohne} min. Keine Abkürzung nötig.`,
        });
      }
    }

    aktiv.delete(v);
    schonWeg.push(v);

    snap({
      phase: "entfernt",
      aktuell: null,
      kontrahiert: [...schonWeg],
      text: `${chName(v)} ist kontrahiert und hat Rang ${runde}. Insgesamt ${abkWort(shortcuts.length)} bisher. Die Abkürzungen bleiben im Netz — sie ersetzen die Wege durch die weggenommenen Orte.`,
    });
  }

  snap({
    phase: "fertig",
    kontrahiert: [...schonWeg],
    text:
      `Fertig. Jeder Ort hat jetzt einen Rang (★), und das Netz hat ${CH_EDGES.length} echte Strassen plus ${shortcuts.length} Abkürzungen. ` +
      "Die Reihenfolge der Kontraktion *ist* die Hierarchie: kleine Quartierstrassen unten, Autobahn oben.",
  });

  return { schritte, shortcuts, rang };
}

let cache = null;
/** Vorverarbeitung (gecacht — sie ist überall dieselbe). */
export function chVorverarbeitung() {
  if (!cache) cache = berechneVorverarbeitung();
  return cache;
}

/** Rang eines Ortes: 1 = zuerst kontrahiert = unwichtigster Ort. */
export const chRang = (id) => chVorverarbeitung().rang[id] ?? 0;

/** Das um die Abkürzungen erweiterte Netz. */
export function chErweitertesNetz() {
  const { shortcuts } = chVorverarbeitung();
  const kanten = [
    ...CH_EDGES.map((e) => ({
      ...e,
      key: chKey(e.a, e.b),
      shortcut: false,
    })),
    ...shortcuts.map((s) => ({ ...s, shortcut: true })),
  ];
  return { kanten, shortcuts };
}

/* ══════════════════════════════════════════════════════════════════
   Phase 2 — Anfrage: zwei Suchen, beide nur bergauf
   ══════════════════════════════════════════════════════════════════ */

/** Nachbarn mit höherem Rang — nur dorthin darf die Suche gehen. */
function bergaufNachbarn(kanten) {
  const map = {};
  for (const n of CH_NODES) map[n.id] = [];
  for (const e of kanten) {
    if (chRang(e.a) < chRang(e.b)) map[e.a].push({ to: e.b, w: e.w, e });
    else map[e.b].push({ to: e.a, w: e.w, e });
  }
  for (const id of Object.keys(map))
    map[id].sort((x, y) => chRang(x.to) - chRang(y.to));
  return map;
}

/**
 * Anfrage mit Contraction Hierarchies.
 *
 * Beide Suchen laufen nur «bergauf», also immer zu wichtigeren Orten. Aus dem
 * Wohnquartier führt deshalb keine echte Strasse mehr weiter — nur noch die
 * Abkürzung. Ohne die Abkürzungen würde die Suche gar nichts finden.
 */
export function chAnfrageSchritte(start = "S", ziel = "T") {
  const { kanten, shortcuts } = chErweitertesNetz();
  const bergauf = bergaufNachbarn(kanten);

  const leer = (id) => {
    const dist = {};
    for (const n of CH_NODES) dist[n.id] = Infinity;
    dist[id] = 0;
    return { dist, prev: {}, besucht: new Set(), offen: new Set([id]) };
  };

  const V = leer(start);
  const R = leer(ziel);
  const schritte = [];
  let bestes = { knoten: null, summe: Infinity };

  const snap = (extra) =>
    schritte.push({
      distV: { ...V.dist },
      distR: { ...R.dist },
      besuchtV: [...V.besucht],
      besuchtR: [...R.besucht],
      aktuell: null,
      seite: null,
      kante: null,
      bestes: { ...bestes },
      pfad: null,
      pfadKanten: null,
      ...extra,
    });

  const hochAb = (id) => {
    const alle = kanten.filter((e) => e.a === id || e.b === id);
    const hoch = bergauf[id].length;
    return { hoch, ab: alle.length - hoch };
  };

  const hs = hochAb(start);
  const hz = hochAb(ziel);

  snap({
    phase: "start",
    text:
      `Zwei Suchen starten: eine bei ${chName(start)}, eine bei ${chName(ziel)}. ` +
      "Beide dürfen nur zu *wichtigeren* Orten weiterlaufen (höherer Rang ★), nie bergab. " +
      `${chName(start)} hat ${hs.ab} Strasse${hs.ab === 1 ? "" : "n"} bergab (gesperrt) und nur ${hs.hoch} Verbindung${hs.hoch === 1 ? "" : "en"} bergauf, ${chName(ziel)} ebenso ${hz.hoch}. ` +
      "Genau dafür gibt es die Abkürzungen.",
  });

  const einSchritt = (S, O, seite) => {
    let akt = null;
    for (const id of S.offen)
      if (akt === null || S.dist[id] < S.dist[akt]) akt = id;
    if (akt === null) return false;
    S.offen.delete(akt);
    S.besucht.add(akt);

    if (O.dist[akt] < Infinity && S.dist[akt] + O.dist[akt] < bestes.summe) {
      bestes = { knoten: akt, summe: S.dist[akt] + O.dist[akt] };
    }

    // Abschneiden: Was schon jetzt teurer ist als der beste bekannte Weg,
    // muss gar nicht mehr weiterverfolgt werden.
    const abschneiden = S.dist[akt] > bestes.summe;

    snap({
      phase: "waehle",
      aktuell: akt,
      seite,
      text: `${seite === "V" ? "Vorwärts" : "Rückwärts"}: ${chName(akt)} ist dran (${S.dist[akt]} min).${
        bestes.knoten === akt
          ? ` Beide Suchen kennen diesen Ort — zusammen ${bestes.summe} min, das ist der beste Treffer bisher.`
          : ""
      }${abschneiden ? ` Das ist bereits mehr als der beste bekannte Weg (${bestes.summe} min) — hier wird abgeschnitten.` : ""}`,
    });
    if (abschneiden) return true;

    if (bergauf[akt].length === 0) {
      snap({
        phase: "pruef",
        aktuell: akt,
        seite,
        text: `${chName(akt)} ist der wichtigste Ort auf diesem Ast — von hier geht es nicht weiter bergauf.`,
      });
      return true;
    }

    for (const { to, w, e } of bergauf[akt]) {
      const neu = S.dist[akt] + w;
      const besser = neu < S.dist[to];
      if (besser) {
        S.dist[to] = neu;
        S.prev[to] = { von: akt, e };
        S.offen.add(to);
      }
      const via = e.shortcut
        ? ` — das ist die Abkürzung über ${chName(e.ueber)}, eine echte Strasse gibt es hier nicht`
        : "";
      snap({
        phase: "pruef",
        aktuell: akt,
        seite,
        kante: { key: e.key ?? chKey(e.a, e.b), besser, shortcut: e.shortcut },
        text: `${chName(akt)} → ${chName(to)}: ${S.dist[akt]} + ${w} = ${neu}${besser ? " → eintragen" : " → nicht besser"}${via}.`,
      });
    }
    return true;
  };

  let weiter = true;
  while (weiter) {
    const a = V.offen.size > 0 ? einSchritt(V, R, "V") : false;
    const b = R.offen.size > 0 ? einSchritt(R, V, "R") : false;
    weiter = a || b;
  }

  // Pfad zusammensetzen — einmal in der Hierarchie, einmal ausgepackt.
  const pfadKanten = bestes.knoten ? baueKantenPfad(V, R, bestes.knoten) : null;
  const pfad = pfadKanten ? packeKantenPfadAus(pfadKanten) : null;
  const benutzteShortcuts = (pfadKanten ?? []).filter((k) => k.shortcut);

  snap({
    phase: "fertig",
    pfad,
    pfadKanten,
    text: bestes.knoten
      ? `Treffpunkt ist ${chName(bestes.knoten)} mit insgesamt ${bestes.summe} min. ` +
        (benutzteShortcuts.length > 0
          ? `Der gefundene Weg benutzt ${benutzteShortcuts.length} Abkürzung${benutzteShortcuts.length === 1 ? "" : "en"} (${benutzteShortcuts.map((k) => `${k.von}–${k.nach}`).join(", ")}). Zum Schluss werden sie wieder «ausgepackt» — dann sieht man die echte Route.`
          : "Hier wurde keine Abkürzung gebraucht.")
      : "Es gibt keinen Weg.",
  });

  return { schritte, shortcuts, kanten, pfad, pfadKanten, bestes };
}

/** Kantenfolge des gefundenen Weges (noch mit Abkürzungen). */
function baueKantenPfad(V, R, treff) {
  const vorne = [];
  let akt = treff;
  while (V.prev[akt]) {
    const { von, e } = V.prev[akt];
    vorne.unshift({
      von,
      nach: akt,
      w: e.w,
      shortcut: !!e.shortcut,
      ueber: e.ueber,
    });
    akt = von;
  }
  const hinten = [];
  akt = treff;
  while (R.prev[akt]) {
    const { von, e } = R.prev[akt];
    hinten.push({
      von: akt,
      nach: von,
      w: e.w,
      shortcut: !!e.shortcut,
      ueber: e.ueber,
    });
    akt = von;
  }
  return [...vorne, ...hinten];
}

/** Packt eine Abkürzung rekursiv wieder in echte Strassen aus. */
function packeAus(von, nach) {
  const basis = CH_EDGES.some((e) => chKey(e.a, e.b) === chKey(von, nach));
  if (basis) return [von, nach];
  const { shortcuts } = chVorverarbeitung();
  const sc = shortcuts.find((s) => s.key === chKey(von, nach));
  if (!sc) return [von, nach];
  return [...packeAus(von, sc.ueber), ...packeAus(sc.ueber, nach).slice(1)];
}

/** Macht aus der Kantenfolge die vollständige Ortsliste im Originalnetz. */
function packeKantenPfadAus(kantenPfad) {
  if (kantenPfad.length === 0) return [];
  let pfad = [kantenPfad[0].von];
  for (const k of kantenPfad)
    pfad = [...pfad, ...packeAus(k.von, k.nach).slice(1)];
  return pfad;
}

/** Zeigt für eine Abkürzung die echte Strassenfolge. */
export function chShortcutAusgepackt(a, b) {
  return packeAus(a, b);
}

/** Kosten eines ausgepackten Pfades im Originalnetz. */
export function chPfadKosten(pfad) {
  const basis = Object.fromEntries(CH_EDGES.map((e) => [chKey(e.a, e.b), e.w]));
  let summe = 0;
  for (let i = 0; i + 1 < pfad.length; i++)
    summe += basis[chKey(pfad[i], pfad[i + 1])] ?? 0;
  return summe;
}

/** Normaler Dijkstra im Originalnetz — zum Vergleichen. */
export function chDijkstraVergleich(start, ziel) {
  const adj = baueAdjazenz(CH_EDGES);
  const dist = {};
  for (const n of CH_NODES) dist[n.id] = Infinity;
  dist[start] = 0;
  const fertig = new Set();
  const offen = new Set([start]);
  while (offen.size > 0) {
    let akt = null;
    for (const id of offen) if (akt === null || dist[id] < dist[akt]) akt = id;
    offen.delete(akt);
    fertig.add(akt);
    if (akt === ziel) break;
    for (const [to, w] of adj[akt]) {
      if (fertig.has(to)) continue;
      const neu = dist[akt] + w;
      if (neu < dist[to]) {
        dist[to] = neu;
        offen.add(to);
      }
    }
  }
  return { dauer: dist[ziel], besucht: fertig.size };
}
