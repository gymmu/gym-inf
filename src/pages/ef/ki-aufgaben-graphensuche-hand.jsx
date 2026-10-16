import DataTable from "@components/DataTable/DataTable";
import Section from "@components/Section";

export default function KIAufgabenGraphensucheHand() {
  return (
    <>
      <Section>
        <h2>Aufgaben: Graphensuche von Hand</h2>
        <p>
          In diesem Kapitel arbeiten Sie <strong>ohne Computer</strong> — nur
          mit Stift, Papier und Ihrem Kopf. Sie lösen drei klassische Probleme
          von Hand und zeichnen dabei auf, was Sie dabei tun: den{" "}
          <strong>Suchbaum</strong>.
        </p>
        <p>
          Das Ziel ist nicht, möglichst schnell eine Lösung zu haben. Das Ziel
          ist, dass Sie <strong>spüren</strong>, wo die Probleme liegen: wie
          schnell die Anzahl Möglichkeiten wächst, wie leicht man im Kreis
          läuft, und wie unterschiedlich zwei Lösungen für dasselbe Problem
          aussehen können.
        </p>
        <p>
          <strong>Material:</strong> mehrere Blätter Papier (A4 quer eignet sich
          gut für Suchbäume), ein Bleistift, ein Radiergummi und zwei Farbstifte
          für Start und Ziel. Für das Schiebepuzzle helfen acht beschriftete
          Zettel.
        </p>
      </Section>

      {/* ══════════════════════════════════════════════════════
          SCHIEBEPUZZLE
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 1 — Schiebepuzzle</h2>
        <p>
          Ein 3×3-Raster mit acht nummerierten Steinen und einem leeren Feld (
          <code>·</code>). Ein Zug schiebt einen Stein, der neben dem leeren
          Feld liegt, in das leere Feld. Ziel ist immer dieselbe Stellung:
        </p>
        <pre>
          <code>{`1  2  3
4  5  6
7  8  ·`}</code>
        </pre>

        {/* ── Aufgabe 1 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 1: Drei Stellungen lösen</h4>
          <p>
            Zeichnen Sie ein 3×3-Raster auf Papier und schneiden Sie acht kleine
            Zettel mit den Zahlen 1–8 aus. Lösen Sie die drei Stellungen{" "}
            <strong>der Reihe nach</strong>.
          </p>
          <pre>
            <code>{`Stellung A        Stellung B        Stellung C
1  3  ·           1  8  2           ·  8  2
4  2  5           ·  4  3           5  7  3
7  8  6           7  6  5           1  4  6`}</code>
          </pre>
          <ol>
            <li>
              Lösen Sie jede Stellung. Schreiben Sie jeden Zug auf, z.&nbsp;B.{" "}
              <code>3 rechts</code>, <code>2 hoch</code>, … Benennen Sie den Zug
              immer nach dem <strong>Stein</strong>, der sich bewegt.
            </li>
            <li>
              Stoppen Sie für jede Stellung die Zeit und zählen Sie Ihre Züge.
              Tragen Sie beides in die Tabelle unten ein.
            </li>
            <li>
              Lassen Sie eine Mitschülerin oder einen Mitschüler Ihre Zugfolge
              nachspielen. Kommt sie oder er am Ziel an? Wenn nicht: Wo liegt
              der Fehler?
            </li>
          </ol>
          <DataTable
            headers={[
              "Stellung",
              "Anzahl Züge",
              "benötigte Zeit",
              "Fehlversuche / Rückzüge",
            ]}
            rows={[
              ["A", "…", "…", "…"],
              ["B", "…", "…", "…"],
              ["C", "…", "…", "…"],
            ]}
            caption="Ihre eigenen Werte — diese Zahlen brauchen Sie im nächsten Kapitel wieder."
          />
          <p>
            <strong>Zur Kontrolle:</strong> Die kürzesten Lösungen brauchen 4
            (A), 9 (B) und 14 (C) Züge. Wenn Sie deutlich mehr gebraucht haben,
            ist das völlig normal — notieren Sie es ehrlich.
          </p>
        </div>

        {/* ── Aufgabe 2 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 2: Ihre Strategie beschreiben</h4>
          <ol>
            <li>
              Beschreiben Sie in drei bis vier Sätzen, wie Sie vorgegangen sind.
              Haben Sie zuerst die obere Zeile fertiggestellt? Zuerst die 1
              platziert?
            </li>
            <li>
              Wenn zwei Züge möglich waren: Woran haben Sie entschieden, welchen
              Sie nehmen? Versuchen Sie, Ihre Entscheidung als{" "}
              <strong>Regel</strong> zu formulieren, die man ausrechnen könnte
              («nimm den Zug, bei dem …»).
            </li>
            <li>
              Haben Sie je einen Zug wieder zurückgenommen? Warum? Was hat Ihnen
              gesagt, dass Sie in eine Sackgasse laufen?
            </li>
            <li>
              Stellung C hat Sie vermutlich am meisten Zeit gekostet. Woran lag
              das — am Suchen oder am Ausprobieren?
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 3 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 3: Wie gross ist das Problem?</h4>
          <ol>
            <li>
              Legen Sie eine Schreibweise fest, mit der Sie eine Stellung in{" "}
              <strong>einer Zeile</strong> eindeutig aufschreiben können. Geben
              Sie Stellung A in Ihrer Schreibweise an.
            </li>
            <li>
              Wie viele Züge sind möglich, wenn das leere Feld in einer{" "}
              <strong>Ecke</strong>, am <strong>Rand</strong> oder in der{" "}
              <strong>Mitte</strong> liegt? Was ist der durchschnittliche
              Verzweigungsgrad <code>b</code>?
            </li>
            <li>
              Zeichnen Sie den <strong>Suchbaum</strong> ab Stellung A bis Tiefe
              2. Wie viele Knoten sind das? Markieren Sie alle Knoten, deren
              Stellung schon weiter oben im Baum vorkommt.
            </li>
            <li>
              Schätzen Sie mit <code>b^d</code> ab, wie viele Knoten eine
              Breitensuche bis Tiefe 14 (Stellung C!) erzeugen würde.
            </li>
            <li>
              Es gibt insgesamt nur 181'440 erreichbare Stellungen. Vergleichen
              Sie das mit Ihrer Schätzung. Warum ist die Schätzung so viel
              grösser? Was heisst das für einen Algorithmus, der sich merkt, wo
              er schon war?
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          PANCAKE
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 2 — Das Pancake-Problem</h2>
        <p>
          Ein Stapel Pfannkuchen unterschiedlicher Grösse. Wir schreiben ihn von
          oben nach unten: <code>[3, 1, 4, 2]</code> heisst, dass der
          Pfannkuchen der Grösse 3 zuoberst liegt und der Grösse 2 zuunterst.
        </p>
        <p>
          Erlaubter Zug: den Wendeheber an einer Stelle einschieben und{" "}
          <strong>alles darüber umdrehen</strong>. <code>flip k</code> dreht die
          obersten <code>k</code> Pfannkuchen um.
        </p>
        <pre>
          <code>{`[3, 1, 4, 2]  --flip 3-->  [4, 1, 3, 2]
[4, 1, 3, 2]  --flip 4-->  [2, 3, 1, 4]`}</code>
        </pre>
        <p>
          Ziel: der Stapel ist sortiert, der grösste zuunterst —{" "}
          <code>[1, 2, 3, 4]</code>. Ein <code>flip 1</code> ändert nichts, es
          gibt also nur die Züge <code>flip 2</code> bis <code>flip n</code>.
        </p>

        {/* ── Aufgabe 4 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 4: Aufwärmen mit drei Pfannkuchen</h4>
          <ol>
            <li>
              Sortieren Sie <code>[3, 1, 2]</code>. Wie viele Flips brauchen
              Sie?
            </li>
            <li>
              Wie viele Züge hat ein Zustand bei drei Pfannkuchen? Wie viele
              verschiedene Stapel gibt es insgesamt?
            </li>
            <li>
              Zeichnen Sie den <strong>vollständigen Suchbaum</strong> ab{" "}
              <code>[3, 1, 2]</code> bis Tiefe 3. Schreiben Sie in jeden Knoten
              den Stapel, an jede Kante den Zug (<code>flip 2</code> oder{" "}
              <code>flip 3</code>).
            </li>
            <li>
              Streichen Sie jeden Knoten durch, dessen Stapel im Baum schon
              einmal vorkommt. Wie viele Knoten bleiben übrig? Vergleichen Sie
              mit Ihrer Antwort aus Punkt 2.
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 5 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 5: Vier Pfannkuchen — lösen und Suchbaum zeichnen</h4>
          <p>
            Sortieren Sie <code>[3, 1, 4, 2]</code>. Arbeiten Sie{" "}
            <strong>systematisch wie eine Breitensuche</strong>: Sie zeichnen
            den Suchbaum Ebene für Ebene auf und hören erst auf, wenn das Ziel
            auftaucht.
          </p>
          <ol>
            <li>
              Schreiben Sie <code>[3, 1, 4, 2]</code> als Wurzel oben auf ein
              Blatt im Querformat.
            </li>
            <li>
              <strong>Ebene 1:</strong> Zeichnen Sie alle Nachfolger (
              <code>flip 2</code>, <code>flip 3</code>, <code>flip 4</code>).
              Beschriften Sie die Kanten.
            </li>
            <li>
              <strong>Ebene 2:</strong> Zeichnen Sie für jeden Knoten der Ebene
              1 wieder alle Nachfolger.{" "}
              <strong>
                Streichen Sie dabei jeden Stapel durch, der im Baum schon
                vorkommt
              </strong>{" "}
              — an durchgestrichenen Knoten wird nicht weitergebaut.
            </li>
            <li>
              Fahren Sie so fort, bis <code>[1, 2, 3, 4]</code> auftaucht.
              Zeichnen Sie den Weg von der Wurzel dorthin farbig nach.
            </li>
            <li>
              Wie viele Flips braucht die kürzeste Lösung? Wie viele Knoten
              haben Sie insgesamt gezeichnet, wie viele davon durchgestrichen?
            </li>
            <li>
              Es gibt nur <code>4! = 24</code> verschiedene Stapel. Wie viele
              Knoten hätte Ihr Baum ohne das Durchstreichen auf Ihrer letzten
              Ebene gehabt? Rechnen Sie es mit <code>b^d</code> nach.
            </li>
          </ol>
          <p>
            <strong>Zur Kontrolle:</strong> Die kürzeste Lösung braucht 4 Flips.
            Wenn Sie eine mit 5 gefunden haben, haben Sie eine Ebene zu früh
            aufgehört zu prüfen — suchen Sie den Fehler.
          </p>
        </div>

        {/* ── Aufgabe 6 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 6: Eine Regel für Pfannkuchen</h4>
          <ol>
            <li>
              Gibt es eine Strategie, die <strong>immer</strong> funktioniert?
              Tipp: Wie bringen Sie den grössten Pfannkuchen ganz nach unten —
              mit wie vielen Flips?
            </li>
            <li>
              Wie viele Flips braucht Ihre Strategie bei <code>n</code>{" "}
              Pfannkuchen im schlimmsten Fall? Begründen Sie.
            </li>
            <li>
              Ist Ihre Strategie für <code>[3, 1, 4, 2]</code> gleich kurz wie
              Ihre Lösung aus Aufgabe 5? Was ist der Unterschied zwischen «eine
              Lösung finden» und «die kürzeste Lösung finden»?
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          WOLF, ZIEGE, KOHL
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 3 — Wolf, Ziege und Kohl</h2>
        <p>
          Ein Bauer steht mit einem Wolf, einer Ziege und einem Kohlkopf am
          linken Flussufer. Das Boot trägt den Bauer und höchstens{" "}
          <strong>eines</strong> der drei. Lässt er Wolf und Ziege ohne Aufsicht
          zurück, ist die Ziege weg; lässt er Ziege und Kohl zurück, ist der
          Kohl weg. Alle vier sollen ans rechte Ufer.
        </p>

        {/* ── Aufgabe 7 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 7: Rätsel lösen</h4>
          <ol>
            <li>
              Lösen Sie das Rätsel. Schreiben Sie die Lösung als nummerierte
              Liste von Fahrten auf.
            </li>
            <li>
              Wie viele Fahrten brauchen Sie? Wie lange haben Sie gebraucht, wie
              viele Fehlversuche gab es?
            </li>
            <li>
              Welcher Zug war der «unlogische», auf den man zuerst nicht kommt?
              Warum fällt er so schwer?
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 8 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 8: Zustände aufschreiben und zählen</h4>
          <ol>
            <li>
              <strong>Zustand:</strong> Legen Sie eine Schreibweise fest, mit
              der Sie jede Situation eindeutig aufschreiben können, z.&nbsp;B.{" "}
              <code>BWZK | ---</code> oder <code>{"{B,W,K} ~ {Z}"}</code>. Jedes
              Objekt ist entweder links oder rechts — und der Bauer auch.
            </li>
            <li>
              Wie viele Zustände wären theoretisch möglich, wenn es keine Regeln
              gäbe? Rechnen Sie es vor.
            </li>
            <li>
              Listen Sie alle Zustände auf und streichen Sie die verbotenen. Wie
              viele erlaubte bleiben übrig?
            </li>
            <li>
              Wie viele Nachfolger hat ein Zustand höchstens? Was ist der
              Verzweigungsgrad <code>b</code> — und wie unterscheidet er sich
              vom Schiebepuzzle?
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 9 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 9: Suchbaum zeichnen</h4>
          <ol>
            <li>
              Zeichnen Sie den <strong>Suchbaum</strong> ab dem Startzustand,
              Ebene für Ebene, genau wie beim Pancake-Problem. Knoten = Zustand,
              Kante = eine Fahrt (beschriften!).
            </li>
            <li>
              Streichen Sie verbotene Zustände sofort weg — sie werden gar nicht
              erst zu Knoten.
            </li>
            <li>
              Streichen Sie Zustände durch, die im Baum schon vorkommen. Bauen
              Sie bis zur Ebene, in der das Ziel auftaucht.
            </li>
            <li>
              Markieren Sie Start und Ziel farbig und zeichnen Sie Ihre Lösung
              aus Aufgabe 7 als Weg ein.
            </li>
            <li>
              Gibt es eine zweite, gleich kurze Lösung? Suchen Sie sie in Ihrem
              Baum und begründen Sie Ihre Antwort.
            </li>
            <li>
              Zeichnen Sie zusätzlich den <strong>Zustandsgraphen</strong>: alle
              erlaubten Zustände als Knoten, jede mögliche Fahrt als Kante —
              jeder Zustand kommt dabei nur <strong>einmal</strong> vor.
              Vergleichen Sie: Wie viele Knoten hat der Graph, wie viele Ihr
              Baum?
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 10 ────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 10: Der Algorithmus sind Sie</h4>
          <p>
            Führen Sie auf Ihrem Zustandsgraphen aus Aufgabe 9 die beiden
            Algorithmen <strong>von Hand</strong> aus. Führen Sie dabei eine
            Tabelle mit zwei Spalten: <strong>Grenze</strong> und{" "}
            <strong>Besucht</strong>. Nach jedem Schritt eine neue Zeile.
          </p>
          <ol>
            <li>
              <strong>Breitensuche:</strong> Die Grenze ist eine Warteschlange —
              hinten anfügen, vorne herausnehmen.
            </li>
            <li>
              <strong>Tiefensuche:</strong> Die Grenze ist ein Stapel — hinten
              anfügen, hinten herausnehmen.
            </li>
            <li>
              Notieren Sie für beide: die Reihenfolge der besuchten Zustände,
              die Anzahl untersuchter Zustände und die Länge des gefundenen
              Weges.
            </li>
            <li>
              Kontrollieren Sie Ihre Tabellen mit der Visualisierung auf der
              Theorieseite: Stimmen Grenze und Besucht-Menge Schritt für Schritt
              mit Ihren überein?
            </li>
            <li>
              Was passiert bei der Tiefensuche, wenn Sie die{" "}
              <strong>Besucht</strong>-Menge weglassen? Probieren Sie es für
              drei, vier Schritte aus und beschreiben Sie, was schiefgeht.
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          REFLEXION
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 4 — Zurückschauen</h2>

        <div className="aufgabe">
          <h4>Aufgabe 11: Die drei Probleme vergleichen</h4>
          <DataTable
            headers={[
              "Problem",
              "Zustände insgesamt",
              "Verzweigungsgrad b",
              "Länge Ihrer Lösung",
              "schwierig war …",
            ]}
            rows={[
              ["Schiebepuzzle C", "181'440", "…", "…", "…"],
              ["Pancake [3,1,4,2]", "…", "…", "…", "…"],
              ["Wolf, Ziege, Kohl", "…", "…", "…", "…"],
            ]}
            caption="Füllen Sie die Tabelle aus Ihren Notizen der Aufgaben 1–10."
          />
          <ol>
            <li>
              Bei welchem Problem konnten Sie den ganzen Suchbaum zeichnen, bei
              welchem nicht? Woran liegt das?
            </li>
            <li>
              Wo haben Sie beim Lösen <em>nachgedacht</em> und wo haben Sie
              einfach <em>ausprobiert</em>? Schreiben Sie pro Problem einen
              Satz.
            </li>
            <li>
              Das Durchstreichen doppelter Zustände hat Ihnen viel Arbeit
              gespart. Beschreiben Sie in eigenen Worten, was ein Computer dafür
              können muss.
            </li>
            <li>
              <strong>Zum Nachdenken:</strong> Könnten Sie eine Zahl ausrechnen,
              die sagt «dieser Zustand ist vermutlich näher am Ziel»? Machen Sie
              für jedes der drei Probleme einen Vorschlag.
            </li>
          </ol>
        </div>
      </Section>

      <Section>
        <h2>Abgabe</h2>
        <ul>
          <li>
            Ihre Papierlösungen, fotografiert oder eingescannt. Lesbar sein
            müssen: die Zugfolgen aus Aufgabe 1, der Suchbaum aus Aufgabe 5, der
            Suchbaum und der Zustandsgraph aus Aufgabe 9 sowie die
            Schritttabellen aus Aufgabe 10.
          </li>
          <li>
            Ihre ausgefüllten Tabellen aus Aufgabe 1 und Aufgabe 11 — die Zahlen
            brauchen Sie im nächsten Kapitel für den Vergleich mit der Maschine.
          </li>
        </ul>
        <p>
          <strong>Heben Sie alle Blätter auf.</strong> Im Kapitel «Graphensuche
          mit Code» lassen Sie dieselben Probleme vom Computer lösen und
          vergleichen seine Lösungswege mit Ihren.
        </p>
      </Section>
    </>
  );
}
