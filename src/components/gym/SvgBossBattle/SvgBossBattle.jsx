import { useCallback, useEffect, useState } from "react";
import SvgChallenge from "@/components/gym/SvgChallenge/SvgChallenge";
import { makeRound } from "./randomScene";
import style from "./SvgBossBattle.module.css";

/**
 * SvgBossBattle — der Zwischenboss von Vektoria.
 *
 * Der Boss zeigt ein zufälliges Bild aus Kreisen und Rechtecken. Wer es
 * nachbaut, trifft ihn. Nach jeder Runde wird ein neues Bild gewürfelt,
 * die Aufgaben werden Schritt für Schritt schwieriger:
 *
 *   Runde 1–2: nur die Zahlen stimmen nicht → Regler
 *   Runde 3–4: Zahlen und Farben anpassen → Code schreiben
 *   Runde 5:   eine Form fehlt ganz → Code ergänzen
 *
 * @param {number} [rounds] Anzahl Runden bis der Boss besiegt ist
 * @param {() => void} [onVictory] wird am Ende aufgerufen
 */
export default function SvgBossBattle({
  rounds = 5,
  onVictory,
  className = "",
}) {
  const [round, setRound] = useState(1);
  const [task, setTask] = useState(null);
  const [solved, setSolved] = useState(false);
  const [done, setDone] = useState(false);

  // Erst im Browser würfeln (sonst wäre das Bild beim Vorab-Rendern fix).
  useEffect(() => {
    setTask(makeRound(round));
    setSolved(false);
  }, [round]);

  const handleSolved = useCallback(() => setSolved(true), []);

  function next() {
    if (round >= rounds) {
      setDone(true);
      onVictory?.();
      return;
    }
    setRound((value) => value + 1);
  }

  function restart() {
    setDone(false);
    setSolved(false);
    setRound(1);
    setTask(makeRound(1));
  }

  const hits = solved ? round : round - 1;
  const life = Math.max(0, 100 - (hits / rounds) * 100);

  if (done) {
    return (
      <section className={`${style.battle} ${style.victory} ${className}`}>
        <h3 className={style.title}>🏆 Der Formenwächter ist besiegt!</h3>
        <p>
          Du hast {rounds} Bilder aus Kreisen und Rechtecken exakt nachgebaut.
          Damit beherrschst du <code>&lt;circle&gt;</code> und{" "}
          <code>&lt;rect&gt;</code> mit allen wichtigen Attributen.
        </p>
        <button type="button" className={style.button} onClick={restart}>
          Nochmals kämpfen
        </button>
      </section>
    );
  }

  return (
    <section className={`${style.battle} ${className}`}>
      <header className={style.header}>
        <div>
          <h3 className={style.title}>🛡️ Der Formenwächter</h3>
          <p className={style.subtitle}>
            Runde {round} von {rounds} ·{" "}
            {task?.mode === "sliders"
              ? "nur Zahlen (Regler)"
              : task?.mode === "edit"
                ? "Code anpassen"
                : "Form ergänzen"}
          </p>
        </div>

        <div
          className={style.life}
          role="img"
          aria-label={`Leben des Bosses: ${Math.round(life)} Prozent`}
        >
          <div className={style.lifeBar} style={{ width: `${life}%` }} />
        </div>
      </header>

      {task ? (
        <SvgChallenge
          // Neue Runde = neue Aufgabe: Code im Editor zurücksetzen.
          key={`${round}-${task.target}`}
          title={`Angriff ${round}: Bild nachbauen`}
          target={task.target}
          start={task.start}
          editable={task.mode !== "sliders"}
          sliders={task.mode === "sliders"}
          height={task.shapes > 1 ? 340 : 240}
          onSolved={handleSolved}
          footer={
            solved ? (
              <>
                <span className={style.hit}>Treffer! 🎯</span>
                <button type="button" className={style.button} onClick={next}>
                  {round >= rounds ? "Letzten Schlag setzen" : "Nächste Runde"}
                </button>
              </>
            ) : (
              <button
                type="button"
                className={style.buttonGhost}
                onClick={() => setTask(makeRound(round))}
              >
                Anderes Bild würfeln
              </button>
            )
          }
        >
          {task.mode === "sliders" &&
            "Der Code stimmt bereits — nur die Zahlen sind verdreht. Stelle sie mit den Reglern richtig ein."}
          {task.mode === "edit" &&
            "Position, Grösse und Farbe stimmen noch nicht. Passe den Code an, bis dein Bild dem Ziel entspricht."}
          {task.mode === "add" &&
            "Eine Form fehlt vollständig. Ergänze sie im Code — achte auf Reihenfolge, Position, Grösse und Farbe."}
        </SvgChallenge>
      ) : (
        <p className={style.subtitle}>Der Boss sucht ein Bild aus …</p>
      )}
    </section>
  );
}
