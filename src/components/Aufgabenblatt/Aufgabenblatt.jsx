import style from "./Aufgabenblatt.module.css";

/**
 * Bausteine für Aufgabenblätter.
 *
 * Blattkopf, Teil-Überschriften, einzelne Aufgaben, Hinweisboxen,
 * Skizzen und der Abgabe-Block — damit alle Aufgabenblätter gleich
 * aussehen und sich auch auf Papier gut ausdrucken lassen.
 */

/**
 * Kopf eines Aufgabenblatts.
 *
 * kicker – kleine Zeile über dem Titel (z. B. "Woche 10 · Papier")
 * titel  – Titel des Blatts
 * meta   – { label, value }[] – Material, Dauer, Abgabe …
 */
export function Blattkopf({ kicker, titel, meta = [], children }) {
  return (
    <header className={style.header}>
      {kicker && <p className={style.kicker}>{kicker}</p>}
      <h2>{titel}</h2>
      {children}
      {meta.length > 0 && (
        <div className={style.meta}>
          {meta.map((m) => (
            <span className={style.metaItem} key={m.label}>
              <span className={style.metaLabel}>{m.label}</span>
              <span>{m.value}</span>
            </span>
          ))}
        </div>
      )}
    </header>
  );
}

/**
 * Überschrift für einen Teil des Blatts.
 *
 * nummer – z. B. "Teil 1"
 * titel  – Titel des Teils
 */
export function Teil({ nummer, titel, children }) {
  return (
    <>
      <div className={style.teil}>
        {nummer && <span className={style.teilNummer}>{nummer}</span>}
        <h2>{titel}</h2>
      </div>
      {children && <p className={style.teilText}>{children}</p>}
    </>
  );
}

/**
 * Eine einzelne Aufgabe.
 *
 * nummer – Aufgabennummer
 * titel  – Titel der Aufgabe
 * tag    – optionaler Zusatz rechts (z. B. "ca. 20 min", "freiwillig")
 * bonus  – hebt die Aufgabe als Zusatzaufgabe hervor
 */
export function Aufgabe({ nummer, titel, tag, bonus = false, children }) {
  return (
    <section className={`${style.aufgabe} ${bonus ? style.bonus : ""}`}>
      <div className={style.aufgabeHead}>
        {nummer != null && <span className={style.nummer}>{nummer}</span>}
        <h4 className={style.titel}>{titel}</h4>
        {tag && <span className={style.tag}>{tag}</span>}
      </div>
      {children}
    </section>
  );
}

const BOX_TITEL = {
  tipp: "Tipp",
  achtung: "Achtung",
  loesung: "Lösung",
  regel: "Regel",
};

/**
 * Hervorgehobene Box.
 *
 * art   – "tipp" | "achtung" | "loesung" | "regel"
 * titel – überschreibt den Standardtitel der Art
 */
export function Box({ art = "tipp", titel, children }) {
  return (
    <div className={`${style.box} ${style[art] ?? ""}`}>
      <span className={style.boxTitel}>{titel ?? BOX_TITEL[art] ?? ""}</span>
      {children}
    </div>
  );
}

/**
 * Zentrierte ASCII-Skizze mit optionaler Bildunterschrift.
 */
export function Figur({ caption, children }) {
  return (
    <figure className={style.figur}>
      <pre>
        <code>{children}</code>
      </pre>
      {caption && (
        <figcaption className={style.figurCaption}>{caption}</figcaption>
      )}
    </figure>
  );
}

/**
 * Abgabe-Block am Ende eines Blatts.
 */
export function Abgabe({ children }) {
  return (
    <section className={style.abgabe}>
      <h2>Abgabe</h2>
      {children}
    </section>
  );
}
