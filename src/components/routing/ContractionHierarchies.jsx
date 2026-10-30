import { useCallback, useEffect, useMemo, useState } from "react";
import {
  CH_EDGES,
  CH_NODES,
  CH_VIEW,
  chAnfrageSchritte,
  chDijkstraVergleich,
  chKey,
  chName,
  chPfadKosten,
  chRang,
  chShortcutAusgepackt,
  chVorverarbeitung,
} from "./chNetwork.js";
import styles from "./routing.module.css";

const TEMPI = {
  langsam: { label: "langsam", ms: 1100 },
  normal: { label: "normal", ms: 550 },
  schnell: { label: "schnell", ms: 220 },
};

const MAX_RANG = Math.max(...CH_NODES.map((n) => chRang(n.id)));

/** Position eines Knotens — entweder Karte oder nach Wichtigkeit gestapelt. */
function position(n, hierarchie) {
  if (!hierarchie) return { x: n.x, y: n.y };
  const spalten = [...CH_NODES].sort((a, b) => a.x - b.x);
  const i = spalten.findIndex((m) => m.id === n.id);
  return {
    x: 55 + (i * (CH_VIEW.w - 110)) / (CH_NODES.length - 1),
    y: 40 + ((MAX_RANG - chRang(n.id)) * (CH_VIEW.h - 90)) / (MAX_RANG - 1),
  };
}

/**
 * Contraction Hierarchies zum Anschauen.
 *
 * Zwei Phasen:
 *   1. Vorverarbeitung — Orte werden nach Wichtigkeit herauskontrahiert,
 *      dabei entstehen Abkürzungen (Shortcuts).
 *   2. Anfrage — zwei Suchen, die nur «bergauf» laufen, treffen sich oben
 *      in der Hierarchie.
 */
export default function ContractionHierarchies({
  title = "Contraction Hierarchies: Abkürzungen vorberechnen",
}) {
  const [phase, setPhase] = useState("pre");
  const [i, setI] = useState(0);
  const [spielt, setSpielt] = useState(false);
  const [tempo, setTempo] = useState("normal");
  const [hierarchie, setHierarchie] = useState(false);
  const [pfeile, setPfeile] = useState(false);

  const vor = useMemo(() => chVorverarbeitung(), []);
  const anfrage = useMemo(() => chAnfrageSchritte("S", "T"), []);
  const vergleich = useMemo(() => chDijkstraVergleich("S", "T"), []);

  const schritte = phase === "pre" ? vor.schritte : anfrage.schritte;
  const letzter = schritte.length - 1;
  const s = schritte[Math.min(i, letzter)];

  const wechslePhase = useCallback((p) => {
    setPhase(p);
    setI(0);
    setSpielt(false);
  }, []);

  useEffect(() => {
    if (!spielt) return undefined;
    const id = setInterval(() => {
      setI((n) => {
        if (n >= letzter) {
          setSpielt(false);
          return n;
        }
        return n + 1;
      });
    }, TEMPI[tempo].ms);
    return () => clearInterval(id);
  }, [spielt, tempo, letzter]);

  /* ── Was wird gerade wie gezeichnet? ──────────────────────────── */

  const sichtbareShortcuts =
    phase === "pre" ? s.shortcuts : anfrage.shortcuts.map((x) => ({ ...x }));

  const knotenStatus = {};
  const knotenText = {};
  const kantenStatus = {};

  if (phase === "pre") {
    for (const id of s.kontrahiert) knotenStatus[id] = "weg";
    if (s.probe) {
      for (const nb of s.probe.nachbarn) {
        knotenStatus[nb] = "paar";
        kantenStatus[chKey(s.probe.id, nb)] = "paar";
      }
    }
    if (s.aktuell) knotenStatus[s.aktuell] = "aktuell";
    if (s.pruefung) {
      knotenStatus[s.pruefung.u] = "paar";
      knotenStatus[s.pruefung.w] = "paar";
      kantenStatus[chKey(s.pruefung.u, s.pruefung.v)] = "paar";
      kantenStatus[chKey(s.pruefung.v, s.pruefung.w)] = "paar";
    }
  } else {
    for (const id of s.besuchtV) knotenStatus[id] = "besuchtV";
    for (const id of s.besuchtR) knotenStatus[id] = "besuchtR";
    if (s.aktuell) knotenStatus[s.aktuell] = "aktuell";
    if (s.bestes?.knoten) knotenStatus[s.bestes.knoten] = "treff";
    knotenStatus.S = "start";
    knotenStatus.T = "ziel";
    for (const n of CH_NODES) {
      const a = s.distV[n.id];
      const b = s.distR[n.id];
      if (a === Infinity && b === Infinity) continue;
      knotenText[n.id] =
        `${a === Infinity ? "∞" : a}|${b === Infinity ? "∞" : b}`;
    }
    if (s.kante) kantenStatus[s.kante.key] = s.kante.besser ? "gut" : "pruef";
    if (s.pfad) {
      for (let k = 0; k + 1 < s.pfad.length; k++)
        kantenStatus[chKey(s.pfad[k], s.pfad[k + 1])] = "pfad";
    }
  }

  const fertigPfad = phase === "anfrage" && s.pfad ? s.pfad : null;
  const fertigKanten =
    phase === "anfrage" && s.pfadKanten ? s.pfadKanten : null;

  // Abkürzungen, die im gefundenen Weg tatsächlich benutzt werden.
  const benutzteKeys = new Set(
    (anfrage.pfadKanten ?? [])
      .filter((k) => k.shortcut)
      .map((k) => chKey(k.von, k.nach)),
  );

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.hinweis}>
        Ein Strassennetz ist <strong>hierarchisch</strong>: Quartierstrassen
        unten, Hauptstrassen in der Mitte, Autobahnen oben. Das Verfahren
        arbeitet in zwei Schritten. <strong>1. Vorverarbeitung:</strong> Die
        Wichtigkeit (★ Rang) jedes Ortes wird <em>ausgerechnet</em>, mit der
        Formel{" "}
        <code>Priorität = nötige Abkürzungen − wegfallende Strassen</code>. Der
        Ort mit der kleinsten Priorität kommt als Nächster weg und bekommt den
        nächsten Rang. <strong>2. Anfrage:</strong> Beide Suchen laufen nur noch
        bergauf. Aus dem Quartier führt dann keine echte Strasse mehr nach oben
        — die Suche <em>muss</em> die vorberechneten Abkürzungen benutzen. Genau
        das macht sie so schnell.
      </p>

      {/* ── Phase wählen ───────────────────────────────────────── */}
      <div className={styles.controls}>
        <button
          type="button"
          className={`${styles.button} ${phase === "pre" ? styles.buttonPrimary : ""}`}
          onClick={() => wechslePhase("pre")}
        >
          1. Vorverarbeitung
        </button>
        <button
          type="button"
          className={`${styles.button} ${phase === "anfrage" ? styles.buttonPrimary : ""}`}
          onClick={() => wechslePhase("anfrage")}
        >
          2. Anfrage
        </button>
        <span className={styles.spacer} />
        <button
          type="button"
          className={styles.button}
          onClick={() => setHierarchie((h) => !h)}
        >
          {hierarchie ? "Als Karte zeigen" : "Nach Wichtigkeit stapeln"}
        </button>
        {phase === "anfrage" && (
          <button
            type="button"
            className={styles.button}
            onClick={() => setPfeile((p) => !p)}
          >
            {pfeile ? "Richtungspfeile aus" : "Richtungspfeile an"}
          </button>
        )}
      </div>

      {/* ── Beschreibung der Rangberechnung ────────────────────── */}
      <details className={styles.erklaerBox} open={phase === "pre"}>
        <summary className={styles.erklaerTitel}>
          So wird die Wichtigkeit (★ Rang) berechnet
        </summary>
        <ol className={styles.erklaerListe}>
          <li>
            <strong>Nur probieren, noch nichts ändern.</strong> Für einen Ort{" "}
            <code>v</code> wird gedanklich durchgespielt: Was wäre, wenn es ihn
            nicht mehr gäbe?
          </li>
          <li>
            <strong>Jedes Nachbarpaar prüfen.</strong> Für zwei Nachbarn{" "}
            <code>u</code> und <code>w</code> von <code>v</code> wird die
            Fahrzeit <code>u→v→w</code> (Summe der beiden Strassen) mit dem
            kürzesten Weg <em>ohne</em> <code>v</code> verglichen («Witness
            Search»: Gibt es einen Zeugen, dass es auch anders geht?). Nur wenn
            der Weg über <code>v</code> echt kürzer ist, wäre eine{" "}
            <strong>Abkürzung</strong> <code>u–w</code> nötig — sonst nicht.
          </li>
          <li>
            <strong>Priorität ausrechnen:</strong>{" "}
            <code>
              Priorität = nötige Abkürzungen − Anzahl Strassen, die wegfallen
            </code>
            . Beispiel «Markt»: Nachbarn Schule, Dorfplatz, Bahnhof → 3 Paare,
            davon braucht nur Schule–Bahnhof eine Abkürzung (9 min über den
            Markt, 13 min ohne ihn) → <code>1 − 3 = −2</code>.
          </li>
          <li>
            <strong>Kleinste Priorität gewinnt.</strong> Dieser Ort ist am
            «billigsten» wegzunehmen, wird wirklich kontrahiert, bekommt den
            nächsten Rang (★1 = zuerst weg = unwichtigster Ort) und seine
            Abkürzungen kommen fest ins Netz. Bei Gleichstand kommt die kleinere
            Strassenkategorie zuerst (Quartier → Haupt → Autobahn).
          </li>
          <li>
            <strong>Neu rechnen.</strong> Durch das Wegnehmen ändert sich die
            Nachbarschaft, deshalb werden die Prioritäten vor jeder Runde neu
            bestimmt — bis alle Orte einen Rang haben.
          </li>
        </ol>
        <p className={styles.erklaerSchluss}>
          Warum das sinnvoll ist: Wer kaum Abkürzungen kostet, liegt auf wenigen
          kürzesten Wegen — eine Sackgasse, ein Quartier, eine Schule. Echte
          Durchgangsorte (Auffahrt, Autobahnkreuz) würden viele Abkürzungen
          erzwingen und bleiben deshalb bis zuletzt übrig. So entsteht von
          selbst die Hierarchie: kleine Strassen unten, Autobahn oben.
        </p>
      </details>

      {/* ── Bedienung ──────────────────────────────────────────── */}
      <div className={styles.controls}>
        <button
          type="button"
          className={`${styles.button} ${styles.buttonPrimary}`}
          onClick={() => setSpielt((p) => !p)}
          disabled={i >= letzter}
        >
          {spielt ? "Pause" : "Abspielen"}
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => setI((n) => Math.max(0, n - 1))}
          disabled={i === 0}
        >
          ◀ Schritt
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => setI((n) => Math.min(letzter, n + 1))}
          disabled={i >= letzter}
        >
          Schritt ▶
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            setI(0);
            setSpielt(false);
          }}
        >
          Zurücksetzen
        </button>
        <span className={styles.label}>Tempo</span>
        <select
          className={styles.select}
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
        >
          {Object.entries(TEMPI).map(([k, t]) => (
            <option key={k} value={k}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* ── Zeichnung ──────────────────────────────────────────── */}
      <div className={styles.canvas}>
        <CHCanvas
          hierarchie={hierarchie}
          shortcuts={sichtbareShortcuts}
          knotenStatus={knotenStatus}
          knotenText={knotenText}
          kantenStatus={kantenStatus}
          richtungen={phase === "anfrage" && pfeile}
          raenge={
            phase === "pre"
              ? s.rang
              : Object.fromEntries(CH_NODES.map((n) => [n.id, chRang(n.id)]))
          }
        />
      </div>

      <p className={styles.erklaerung}>
        <span className={styles.schrittZaehler}>
          Schritt {Math.min(i, letzter) + 1} / {schritte.length} ·{" "}
        </span>
        {s.text}
      </p>

      {/* ── Wichtigkeit & Abkürzungen ──────────────────────────── */}
      <div className={styles.panels}>
        {phase === "pre" && (
          <div className={styles.panel}>
            <p className={styles.panelTitel}>
              Wichtigkeit: Priorität = Abkürzungen − Strassen
            </p>
            <p className={styles.chipLeer}>
              Pro Ort wird probiert: Wie viele Abkürzungen bräuchte es, wenn er
              weg wäre? Wie viele Strassen fallen weg? Kleinste Priorität =
              unwichtigster Ort → wird als Nächster kontrahiert (bei Gleichstand
              Quartier vor Haupt vor Autobahn).
            </p>
            {s.probe && (
              <div className={styles.queue}>
                {s.probe.paare.length === 0 ? (
                  <span className={styles.chipLeer}>
                    {s.probe.id}: {s.probe.nachbarn.length} Nachbar
                    {s.probe.nachbarn.length === 1 ? "" : "n"} → kein Paar zu
                    prüfen
                  </span>
                ) : (
                  s.probe.paare.map((pr) => (
                    <span
                      key={`${pr.u}-${pr.w}`}
                      className={pr.noetig ? styles.chipR : styles.chip}
                    >
                      {pr.u}–{pr.w}: über {s.probe.id} {pr.ueber} / ohne{" "}
                      {pr.ohne === Infinity ? "∞" : pr.ohne}{" "}
                      {pr.noetig ? "→ Abkürzung" : "→ unnötig"}
                    </span>
                  ))
                )}
                <span className={styles.chip}>
                  = {s.probe.noetig} − {s.probe.weg} = Priorität {s.probe.prio}
                </span>
              </div>
            )}
            {s.prioritaeten ? (
              <table className={styles.tabelle}>
                <thead>
                  <tr>
                    <th>Ort</th>
                    <th>Abk. nötig</th>
                    <th>Strassen weg</th>
                    <th>Rechnung</th>
                    <th>Priorität</th>
                  </tr>
                </thead>
                <tbody>
                  {s.prioritaeten.map((p) => (
                    <tr
                      key={p.id}
                      className={p.gewaehlt ? styles.zeileAktuell : ""}
                    >
                      <td>
                        {p.id} · {chName(p.id)}
                      </td>
                      <td>{p.noetig}</td>
                      <td>{p.weg}</td>
                      <td>
                        {p.noetig} − {p.weg}
                      </td>
                      <td>{p.prio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className={styles.chipLeer}>
                Vergebene Ränge:{" "}
                {Object.keys(s.rang ?? {}).length === 0
                  ? "noch keine"
                  : Object.entries(s.rang)
                      .sort((a, b) => a[1] - b[1])
                      .map(([id, r]) => `${id}=★${r}`)
                      .join(", ")}
              </p>
            )}
          </div>
        )}

        <div className={styles.panel}>
          <p className={styles.panelTitel}>Abkürzungen (Shortcuts)</p>
          <div className={styles.queue}>
            {sichtbareShortcuts.length === 0 ? (
              <span className={styles.chipLeer}>noch keine</span>
            ) : (
              sichtbareShortcuts.map((sc) => {
                const echt = chShortcutAusgepackt(sc.a, sc.b);
                const benutzt = phase === "anfrage" && benutzteKeys.has(sc.key);
                return (
                  <span
                    key={sc.key}
                    className={benutzt ? styles.chipR : styles.chip}
                  >
                    {sc.a}–{sc.b} : {sc.w} min = {echt.join("–")}
                    {benutzt ? " ✓ im Weg benutzt" : ""}
                  </span>
                );
              })
            )}
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <span className={styles.stat}>
          echte Strassen: <strong>{CH_EDGES.length}</strong>
        </span>
        <span className={styles.stat}>
          Abkürzungen: <strong>{sichtbareShortcuts.length}</strong>
        </span>
        {phase === "anfrage" && (
          <>
            <span className={styles.stat}>
              angeschaut vorwärts: <strong>{s.besuchtV.length}</strong>
            </span>
            <span className={styles.stat}>
              angeschaut rückwärts: <strong>{s.besuchtR.length}</strong>
            </span>
            <span className={styles.stat}>
              Abkürzungen im Weg: <strong>{benutzteKeys.size}</strong>
            </span>
            <span className={styles.stat}>
              bester Treffer:{" "}
              <strong>
                {s.bestes.knoten
                  ? `${chName(s.bestes.knoten)} (${s.bestes.summe} min)`
                  : "—"}
              </strong>
            </span>
          </>
        )}
      </div>

      {fertigPfad && (
        <div className={styles.ergebnis}>
          <strong>Gefunden in der Hierarchie:</strong>{" "}
          {fertigKanten
            ?.map(
              (k) =>
                `${k.von}${k.shortcut ? ` ⇢(Abk. ${k.w}) ` : ` →(${k.w}) `}${k.nach}`,
            )
            .join("  ")}
          <br />
          <strong>Ausgepackte Route:</strong>{" "}
          {fertigPfad.map((id) => chName(id)).join(" → ")} ·{" "}
          <strong>{chPfadKosten(fertigPfad)} min</strong>
          <br />
          Genau dasselbe Ergebnis wie der normale Dijkstra ({vergleich.dauer}{" "}
          min) — nur hat Dijkstra dafür <strong>{vergleich.besucht}</strong>{" "}
          Orte angeschaut, die Anfrage mit Abkürzungen nur{" "}
          <strong>{s.besuchtV.length + s.besuchtR.length}</strong>. Im echten
          Strassennetz Europas wird aus diesem kleinen Unterschied ein Faktor
          von rund <strong>einer Million</strong>.
        </div>
      )}

      <div className={styles.legende}>
        <Legende farbe="#d3869b" text="Abkürzung (Shortcut)" />
        <Legende farbe="#fe8019" text="aktueller Ort" />
        <Legende farbe="#504945" text="schon kontrahiert" />
        {phase === "anfrage" && pfeile && (
          <span className={styles.legendeItem}>
            ▸ erlaubte Richtung (bergauf)
          </span>
        )}
        {phase === "anfrage" && (
          <>
            <Legende farbe="#83a598" text="vorwärts angeschaut" />
            <Legende farbe="#d3869b" text="rückwärts angeschaut" />
          </>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   Zeichnung
   ══════════════════════════════════════════════════════════════════ */

function CHCanvas({
  hierarchie,
  shortcuts,
  knotenStatus,
  knotenText,
  kantenStatus,
  richtungen = false,
  raenge = {},
}) {
  const pos = Object.fromEntries(
    CH_NODES.map((n) => [n.id, position(n, hierarchie)]),
  );

  const linie = (a, b, bogen = 0) => {
    const p = pos[a];
    const q = pos[b];
    const mx = (p.x + q.x) / 2;
    const my = (p.y + q.y) / 2;
    if (bogen === 0) return `M ${p.x} ${p.y} L ${q.x} ${q.y}`;
    const dx = q.x - p.x;
    const dy = q.y - p.y;
    const len = Math.hypot(dx, dy) || 1;
    const cx = mx - (dy / len) * bogen;
    const cy = my + (dx / len) * bogen;
    return `M ${p.x} ${p.y} Q ${cx} ${cy} ${q.x} ${q.y}`;
  };

  return (
    <svg
      className={styles.svg}
      viewBox={`0 0 ${CH_VIEW.w} ${CH_VIEW.h}`}
      style={{ maxHeight: 460 }}
      role="img"
      aria-label="Contraction Hierarchies im kleinen Strassennetz"
    >
      <title>Contraction Hierarchies</title>

      {/* ── echte Strassen ─────────────────────────────────────── */}
      {CH_EDGES.map((e) => {
        const key = chKey(e.a, e.b);
        const st = kantenStatus[key];
        return (
          <g key={`e-${key}`}>
            <path
              d={linie(e.a, e.b)}
              fill="none"
              stroke={KANTE[st] ?? "#665c54"}
              strokeWidth={st ? 5 : 2.5}
              strokeLinecap="round"
              opacity={st ? 1 : 0.7}
            />
            {richtungen && (
              <Pfeil
                von={pos[chRang(e.a) < chRang(e.b) ? e.a : e.b]}
                nach={pos[chRang(e.a) < chRang(e.b) ? e.b : e.a]}
                farbe={KANTE[st] ?? "#665c54"}
              />
            )}
            <GewichtsSchild
              a={pos[e.a]}
              b={pos[e.b]}
              wert={e.w}
              farbe={KANTE[st] ?? "#a89984"}
            />
          </g>
        );
      })}

      {/* ── Abkürzungen ────────────────────────────────────────── */}
      {shortcuts.map((sc) => {
        const st = kantenStatus[sc.key];
        return (
          <g key={`sc-${sc.key}`}>
            <path
              d={linie(sc.a, sc.b, 46)}
              fill="none"
              stroke={st ? (KANTE[st] ?? "#d3869b") : "#d3869b"}
              strokeWidth={st ? 5 : 3}
              strokeDasharray="8 6"
              strokeLinecap="round"
            />
            {richtungen && (
              <Pfeil
                von={pos[chRang(sc.a) < chRang(sc.b) ? sc.a : sc.b]}
                nach={pos[chRang(sc.a) < chRang(sc.b) ? sc.b : sc.a]}
                farbe={st ? (KANTE[st] ?? "#d3869b") : "#d3869b"}
                bogen={46}
              />
            )}
            <SchildAufBogen
              a={pos[sc.a]}
              b={pos[sc.b]}
              bogen={46}
              text={`${sc.w}`}
            />
          </g>
        );
      })}

      {/* ── Orte ───────────────────────────────────────────────── */}
      {CH_NODES.map((n) => {
        const st = knotenStatus[n.id] ?? "offen";
        const f = KNOTEN[st] ?? KNOTEN.offen;
        const p = pos[n.id];
        return (
          <g key={n.id} opacity={st === "weg" ? 0.4 : 1}>
            <circle
              cx={p.x}
              cy={p.y}
              r={st === "aktuell" || st === "treff" ? 17 : 14}
              fill={f.fill}
              stroke={f.stroke}
              strokeWidth={f.breite ?? 2.5}
            />
            <text
              x={p.x}
              y={p.y + 4}
              className={styles.knotenId}
              textAnchor="middle"
              fill={f.text}
            >
              {n.id}
            </text>
            {!hierarchie && (
              <text
                x={p.x}
                y={p.y - 21}
                className={styles.knotenName}
                textAnchor="middle"
              >
                {n.label}
              </text>
            )}
            <text
              x={p.x + 20}
              y={p.y + 20}
              className={styles.gewicht}
              textAnchor="middle"
              fill="#b8bb26"
            >
              ★{raenge[n.id] ?? "?"}
            </text>
            {knotenText[n.id] !== undefined && (
              <text
                x={p.x}
                y={p.y + 32}
                className={styles.knotenWert}
                textAnchor="middle"
              >
                {knotenText[n.id]}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/** Kleine Pfeilspitze, die zeigt, in welche Richtung die Suche laufen darf. */
function Pfeil({ von, nach, farbe, bogen = 0 }) {
  const dx = nach.x - von.x;
  const dy = nach.y - von.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  // Punkt bei 72 % der Strecke, bei Abkürzungen leicht nach aussen versetzt.
  const x = von.x + ux * len * 0.72 - (uy * bogen) / 2.6;
  const y = von.y + uy * len * 0.72 + (ux * bogen) / 2.6;
  const s = 7;
  const p = [
    [x + ux * s, y + uy * s],
    [x - ux * s - uy * s * 0.7, y - uy * s + ux * s * 0.7],
    [x - ux * s + uy * s * 0.7, y - uy * s - ux * s * 0.7],
  ];
  return (
    <polygon
      points={p.map(([px, py]) => `${px},${py}`).join(" ")}
      fill={farbe}
      opacity={0.9}
    />
  );
}

function GewichtsSchild({ a, b, wert, farbe }) {
  const x = (a.x + b.x) / 2;
  const y = (a.y + b.y) / 2;
  return (
    <>
      <rect
        x={x - 12}
        y={y - 10}
        width="24"
        height="18"
        rx="4"
        fill="#1d2021"
        stroke="#504945"
      />
      <text
        x={x}
        y={y + 3}
        className={styles.gewicht}
        textAnchor="middle"
        fill={farbe}
      >
        {wert}
      </text>
    </>
  );
}

function SchildAufBogen({ a, b, bogen, text }) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const x = mx - (dy / len) * (bogen / 2);
  const y = my + (dx / len) * (bogen / 2);
  return (
    <>
      <rect
        x={x - 13}
        y={y - 10}
        width="26"
        height="18"
        rx="4"
        fill="#1d2021"
        stroke="#d3869b"
      />
      <text
        x={x}
        y={y + 3}
        className={styles.gewicht}
        textAnchor="middle"
        fill="#d3869b"
      >
        {text}
      </text>
    </>
  );
}

function Legende({ farbe, text }) {
  return (
    <span className={styles.legendeItem}>
      <span className={styles.swatch} style={{ backgroundColor: farbe }} />
      {text}
    </span>
  );
}

const KANTE = {
  paar: "#fabd2f",
  gut: "#b8bb26",
  pruef: "#fabd2f",
  pfad: "#fe8019",
};

const KNOTEN = {
  offen: { fill: "#1d2021", stroke: "#665c54", text: "#ebdbb2" },
  weg: { fill: "#1d2021", stroke: "#504945", text: "#665c54" },
  paar: { fill: "#4a4327", stroke: "#fabd2f", text: "#fabd2f" },
  aktuell: { fill: "#5a3410", stroke: "#fe8019", text: "#fe8019", breite: 3.5 },
  besuchtV: { fill: "#2f4a4f", stroke: "#83a598", text: "#83a598" },
  besuchtR: { fill: "#4a3340", stroke: "#d3869b", text: "#d3869b" },
  treff: { fill: "#5a3410", stroke: "#fe8019", text: "#fe8019", breite: 4 },
  start: { fill: "#2f4a2a", stroke: "#8ec07c", text: "#8ec07c", breite: 3.5 },
  ziel: { fill: "#4a2a2a", stroke: "#fb4934", text: "#fb4934", breite: 3.5 },
};
