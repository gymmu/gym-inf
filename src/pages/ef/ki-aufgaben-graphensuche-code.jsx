import DataTable from "@components/DataTable/DataTable";
import Section from "@components/Section";

export default function KIAufgabenGraphensucheCode() {
  return (
    <>
      <Section>
        <h2>Aufgaben: Graphensuche mit Code</h2>
        <p>
          Im Kapitel <strong>«Graphensuche von Hand»</strong> haben Sie drei
          Probleme auf Papier gelöst. Jetzt lassen Sie dieselben Probleme von
          der Maschine lösen, vergleichen ihre Lösungswege mit Ihren eigenen und
          bauen am Schluss zwei Suchalgorithmen selbst.
        </p>
        <p>
          <strong>Voraussetzung:</strong> Sie brauchen Ihre Blätter aus dem
          ersten Kapitel — besonders die Zugfolgen, die Suchbäume und die
          ausgefüllten Tabellen. Ohne sie ist der Vergleich wertlos.
        </p>
        <p>
          <strong>Werkzeuge:</strong> Node.js, Git und ein Editor. Eine
          Installation von Paketen ist nicht nötig.
        </p>
      </Section>

      {/* ══════════════════════════════════════════════════════
          REPO
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 1 — Das Repository</h2>

        {/* ── Aufgabe 1 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 1: Klonen und zum Laufen bringen</h4>
          <pre>
            <code>{`git clone https://github.com/gymmu/graph-search.git
cd graph-search
node index.js wzk bfs`}</code>
          </pre>
          <ol>
            <li>
              Klonen Sie das Repository und führen Sie den Befehl oben aus. Sie
              sollten eine Lösung und eine Statistik sehen.
            </li>
            <li>
              Führen Sie <code>node index.js</code> ohne weitere Angaben aus.
              Welche Probleme und welche Algorithmen kennt das Programm?
            </li>
            <li>
              Verschaffen Sie sich einen Überblick über die Dateien. Beantworten
              Sie schriftlich in je ein bis zwei Sätzen: Was steht in{" "}
              <code>index.js</code>, was in <code>src/problem.js</code>, was in{" "}
              <code>src/search.js</code>, was in <code>src/problems/</code>?
            </li>
            <li>
              Öffnen Sie <code>src/problems/wolf-goat-cabbage.js</code>. Wie
              wird dort ein Zustand dargestellt? Vergleichen Sie mit der
              Schreibweise, die Sie im ersten Kapitel selbst erfunden haben.
            </li>
            <li>
              Wozu dient die Methode <code>key(state)</code>? Erklären Sie es
              mit dem Durchstreichen doppelter Knoten aus Ihrem Papier-Suchbaum.
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 2 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 2: Die Suche lesen</h4>
          <p>
            Öffnen Sie <code>src/search.js</code>. Alle Algorithmen benutzen
            dieselbe Funktion <code>search()</code>. Sie unterscheiden sich nur
            darin, <strong>welche Grenze</strong> sie ihr mitgeben.
          </p>
          <ol>
            <li>
              Suchen Sie in <code>search()</code> die beiden Stellen, die der
              Menge <strong>Besucht</strong> und der Menge{" "}
              <strong>Grenze</strong> aus Ihrer Tabelle (Aufgabe 10, erstes
              Kapitel) entsprechen. Notieren Sie die Zeilennummern.
            </li>
            <li>
              Was bedeuten <code>expanded</code>, <code>generated</code> und{" "}
              <code>maxFrontier</code> in der Statistik? Erklären Sie jede Zahl
              mit einem Satz.
            </li>
            <li>
              Die Klasse <code>Queue</code> ist fertig implementiert. Erklären
              Sie, warum <code>push</code> und <code>pop</code> dort an{" "}
              <em>verschiedenen</em> Enden arbeiten.
            </li>
            <li>
              In der Datei stehen Rümpfe für <code>Stack</code> und{" "}
              <code>PriorityQueue</code>, die noch nichts tun. Diese bauen Sie
              in Teil 3 selbst.
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          VERGLEICH
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 2 — Mensch gegen Maschine</h2>

        {/* ── Aufgabe 3 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 3: Wolf, Ziege und Kohl</h4>
          <pre>
            <code>node index.js wzk bfs</code>
          </pre>
          <ol>
            <li>
              Schreiben Sie die Lösung des Programms Zug für Zug neben Ihre
              Papierlösung aus Aufgabe 7 des ersten Kapitels.
            </li>
            <li>
              Sind die beiden identisch? Wenn nein: Ist die Maschinenlösung
              besser, schlechter oder nur <em>anders</em>? Begründen Sie.
            </li>
            <li>
              Vergleichen Sie die Zahl <code>expandierte Knoten</code> mit der
              Anzahl Knoten in Ihrem Papier-Suchbaum. Wer hat mehr Zustände
              angeschaut?
            </li>
            <li>
              Suchen Sie den Weg, den BFS gefunden hat, in Ihrem Zustandsgraphen
              aus Aufgabe 9 und zeichnen Sie ihn in einer zweiten Farbe ein.
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 4 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 4: Schiebepuzzle</h4>
          <p>
            Das Programm startet standardmässig mit Stellung C aus dem ersten
            Kapitel. Die Startstellung steht im Konstruktor von{" "}
            <code>src/problems/sliding-puzzle.js</code> — ändern Sie sie dort,
            um auch Stellung A und B zu lösen. Das leere Feld ist die{" "}
            <code>0</code>.
          </p>
          <pre>
            <code>{`Stellung A  ->  [1, 3, 0, 4, 2, 5, 7, 8, 6]
Stellung B  ->  [1, 8, 2, 0, 4, 3, 7, 6, 5]
Stellung C  ->  [0, 8, 2, 5, 7, 3, 1, 4, 6]   (Standard)

node index.js puzzle bfs`}</code>
          </pre>
          <DataTable
            headers={[
              "Stellung",
              "Löser",
              "Anzahl Züge",
              "expandierte Knoten",
              "grösste Grenze",
              "Zeit",
            ]}
            rows={[
              ["A", "ich, auf Papier", "…", "—", "—", "…"],
              ["A", "bfs", "…", "…", "…", "…"],
              ["B", "ich, auf Papier", "…", "—", "—", "…"],
              ["B", "bfs", "…", "…", "…", "…"],
              ["C", "ich, auf Papier", "…", "—", "—", "…"],
              ["C", "bfs", "…", "…", "…", "…"],
            ]}
            caption="Die Werte für «ich» stehen in Ihrer Tabelle aus Aufgabe 1 des ersten Kapitels."
          />
          <ol>
            <li>Füllen Sie die Tabelle aus.</li>
            <li>
              Wer braucht weniger Züge — Sie oder BFS? Bei welcher Stellung ist
              der Unterschied am grössten?
            </li>
            <li>
              Sie haben beim Lösen von Stellung C vermutlich deutlich weniger
              Stellungen angeschaut als BFS. Was können Sie, was BFS nicht kann?
            </li>
            <li>
              Umgekehrt: Was kann die Maschine, was Sie nicht können? Nennen Sie
              mindestens zwei Punkte.
            </li>
            <li>
              Vergleichen Sie <code>expandierte Knoten</code> bei Stellung C mit
              Ihrer <code>b^d</code>-Schätzung aus Aufgabe 3 des ersten
              Kapitels. Um welchen Faktor lagen Sie daneben? Woher kommt der
              Unterschied?
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          PANCAKE
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 3 — Das Pancake-Problem implementieren</h2>

        {/* ── Aufgabe 5 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 5: pancake.js fertigstellen</h4>
          <p>
            Öffnen Sie <code>src/problems/pancake.js</code>. Die Datei enthält
            ein Gerüst mit zwei TODOs.
          </p>
          <ol>
            <li>
              Implementieren Sie <code>isGoal(state)</code>: wahr, wenn der
              Stapel aufsteigend sortiert ist.
            </li>
            <li>
              Implementieren Sie <code>successors(state)</code>: für jedes{" "}
              <code>k</code> von 2 bis <code>state.length</code> einen
              Nachfolger{" "}
              <code>{'{ action: "flip " + k, cost: 1, state: … }'}</code>.
            </li>
            <li>
              <strong>Achtung:</strong> <code>successors</code> darf den
              übergebenen Zustand <strong>nie</strong> verändern. Erstellen Sie
              immer eine Kopie (<code>[...state]</code>). Prüfen Sie Ihren Code
              darauf, bevor Sie weiterlesen.
            </li>
            <li>
              Testen Sie mit <code>node index.js pancake bfs</code>. Der
              Standard ist <code>[3, 1, 4, 2]</code> — genau Ihr
              Papier-Beispiel.
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 6 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 6: Mit dem Papier-Suchbaum vergleichen</h4>
          <ol>
            <li>
              Stimmt die Anzahl Flips mit Ihrer Handlösung aus Aufgabe 5 des
              ersten Kapitels überein? Ist es <em>dieselbe</em> Zugfolge?
            </li>
            <li>
              Vergleichen Sie <code>expandierte Knoten</code> mit der Anzahl
              Knoten, die Sie von Hand gezeichnet haben (ohne die
              durchgestrichenen). Wie nahe liegen die beiden Zahlen beieinander?
              Was sagt Ihnen das darüber, <em>was</em> Sie von Hand getan haben?
            </li>
            <li>
              Zeichnen Sie die Zugfolge des Programms in Ihrem Papier-Suchbaum
              farbig nach. Taucht sie dort auf?
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 7 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 7: Grössere Stapel</h4>
          <p>
            Den Startstapel ändern Sie im Konstruktor von <code>Pancake</code>.
            Nehmen Sie jeweils eine gut durchmischte Reihenfolge, nicht die
            sortierte.
          </p>
          <DataTable
            headers={[
              "Länge n",
              "Startstapel",
              "Anzahl Flips",
              "expandierte Knoten",
              "erzeugte Knoten",
              "Zeit",
            ]}
            rows={[
              ["4", "[3, 1, 4, 2]", "…", "…", "…", "…"],
              ["6", "…", "…", "…", "…", "…"],
              ["8", "…", "…", "…", "…", "…"],
              ["9", "…", "…", "…", "…", "…"],
            ]}
            caption="Messen Sie die Zeit z. B. mit «time node index.js pancake bfs»."
          />
          <ol>
            <li>
              Wie viele Nachfolger hat ein Zustand bei <code>n</code>{" "}
              Pfannkuchen? Wie viele Zustände gibt es insgesamt?
            </li>
            <li>
              Füllen Sie die Tabelle aus. Ab welcher Länge wird es unangenehm?
            </li>
            <li>
              Zeichnen Sie die expandierten Knoten gegen <code>n</code> auf. Wie
              wächst die Kurve — linear, quadratisch, schlimmer?
            </li>
            <li>
              Schätzen Sie ab, wie lange ein Stapel der Länge 12 dauern würde.
              Würden Sie es ausprobieren?
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          ALGORITHMEN BAUEN
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 4 — Zwei Algorithmen selbst bauen</h2>
        <p>
          Bisher konnten Sie nur <code>bfs</code> benutzen. Jetzt bauen Sie die
          beiden fehlenden Grenzen und damit zwei weitere Algorithmen. Sie
          müssen dafür <strong>nichts</strong> an <code>search()</code> ändern.
        </p>

        {/* ── Aufgabe 8 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 8: Tiefensuche implementieren</h4>
          <p>
            Die Tiefensuche nimmt immer den <strong>zuletzt</strong> gefundenen
            Knoten aus der Grenze. Die Grenze ist also ein{" "}
            <strong>Stapel</strong> (LIFO) statt einer Warteschlange (FIFO).
          </p>
          <ol>
            <li>
              Implementieren Sie in <code>src/search.js</code> die Klasse{" "}
              <code>Stack</code> mit <code>size</code>, <code>push(node)</code>{" "}
              und <code>pop()</code>. Ein JavaScript-Array kann bereits alles,
              was Sie brauchen.
            </li>
            <li>
              Vergleichen Sie Ihre Klasse mit <code>Queue</code>. Wie viele
              Zeilen sind wirklich anders? Notieren Sie es.
            </li>
            <li>
              Testen Sie mit <code>node index.js wzk dfs</code>. Vergleichen Sie
              die Reihenfolge der besuchten Zustände mit Ihrer
              DFS-Schritttabelle aus Aufgabe 10 des ersten Kapitels. Stimmt sie
              überein? Falls nein: Liegt es an der Reihenfolge, in der{" "}
              <code>successors</code> die Züge liefert?
            </li>
            <li>
              Lassen Sie <code>dfs</code> auf das Schiebepuzzle (Stellung C)
              los. Wie lang ist die Lösung? Die Lösung ist gültig — warum würde
              sie trotzdem niemand verwenden? Was bedeutet das für den Begriff
              «Lösung»?
            </li>
            <li>
              Kommentieren Sie testweise die Zeile aus, die Knoten aus{" "}
              <code>visited</code> überspringt, und starten Sie{" "}
              <code>wzk dfs</code> erneut. Was passiert? Erklären Sie es mit
              dem, was Sie in Aufgabe 10 auf Papier beobachtet haben. Machen Sie
              die Änderung danach wieder rückgängig.
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 9 ─────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 9: Kostensuche implementieren</h4>
          <p>
            Bis jetzt kostet jeder Zug gleich viel. Die uniforme Kostensuche
            (Uniform Cost Search, UCS) nimmt immer den Knoten mit den{" "}
            <strong>kleinsten Gesamtkosten</strong> <code>g</code> aus der
            Grenze. Die Grenze ist also eine{" "}
            <strong>Prioritätswarteschlange</strong>.
          </p>
          <ol>
            <li>
              Implementieren Sie die Klasse <code>PriorityQueue</code>. Sie
              bekommt im Konstruktor eine Funktion <code>priority(node)</code>{" "}
              und gibt bei <code>pop()</code> den Knoten mit dem{" "}
              <strong>kleinsten</strong> Wert zurück.
            </li>
            <li>
              <strong>Einfache Variante zuerst:</strong> <code>push</code> hängt
              einfach an, <code>pop</code> sucht das Minimum linear und entfernt
              es mit <code>splice</code>. Das ist langsam, aber korrekt — und
              darum geht es zuerst.
            </li>
            <li>
              Testen Sie mit <code>node index.js wzk ucs</code> und{" "}
              <code>node index.js puzzle ucs</code>. Vergleichen Sie Lösung und
              Statistik mit <code>bfs</code>. Erklären Sie, warum beide dasselbe
              Ergebnis liefern.
            </li>
            <li>
              <strong>Jetzt wird es interessant:</strong> Ändern Sie in{" "}
              <code>pancake.js</code> die Kosten eines Zuges von <code>1</code>{" "}
              auf <code>k</code> — je mehr Pfannkuchen Sie wenden, desto teurer.
              Lassen Sie <code>bfs</code> und <code>ucs</code> auf demselben
              Stapel laufen.
            </li>
            <li>
              Finden die beiden denselben Weg? Vergleichen Sie{" "}
              <code>Anzahl Züge</code> und <code>Kosten</code>. Welcher Weg ist
              «besser» — und wer entscheidet das?
            </li>
            <li>
              Begründen Sie in zwei, drei Sätzen: Warum findet BFS bei gleichen
              Kosten immer den billigsten Weg, bei unterschiedlichen Kosten aber
              nicht mehr?
            </li>
          </ol>
        </div>

        {/* ── Aufgabe 10 ────────────────────────────────── */}
        <div className="aufgabe">
          <h4>Aufgabe 10: Die drei Algorithmen gegeneinander</h4>
          <DataTable
            headers={[
              "Problem",
              "Algorithmus",
              "Anzahl Züge",
              "Kosten",
              "expandierte Knoten",
              "grösste Grenze",
            ]}
            rows={[
              ["WZK", "bfs", "…", "…", "…", "…"],
              ["WZK", "dfs", "…", "…", "…", "…"],
              ["WZK", "ucs", "…", "…", "…", "…"],
              ["Puzzle C", "bfs", "…", "…", "…", "…"],
              ["Puzzle C", "dfs", "…", "…", "…", "…"],
              ["Puzzle C", "ucs", "…", "…", "…", "…"],
              ["Pancake", "bfs", "…", "…", "…", "…"],
              ["Pancake", "dfs", "…", "…", "…", "…"],
              ["Pancake", "ucs", "…", "…", "…", "…"],
            ]}
            caption="Neun Läufe — alle Zahlen stehen in der Ausgabe des Programms."
          />
          <ol>
            <li>Füllen Sie die Tabelle vollständig aus.</li>
            <li>
              Welcher Algorithmus braucht am wenigsten Speicher (Spalte «grösste
              Grenze»)? Welcher findet die kürzesten Lösungen? Erklären Sie den
              Zusammenhang.
            </li>
            <li>
              Formulieren Sie für jeden Algorithmus einen Satz: «Nimm mich, wenn
              …».
            </li>
          </ol>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          KNACKNUSS
          ══════════════════════════════════════════════════════ */}
      <Section>
        <h2>Teil 5 — Knacknüsse</h2>
        <p>Für alle, die mit den Aufgaben 1–10 fertig sind.</p>

        <div className="aufgabe">
          <h4>Aufgabe 11: Wo die Suche aufgibt</h4>
          <ol>
            <li>
              Starten Sie das Schiebepuzzle mit einer Stellung, die mindestens
              20 Züge von der Lösung entfernt ist, z.&nbsp;B.{" "}
              <code>[8, 6, 7, 2, 5, 4, 3, 0, 1]</code>. Wie lange braucht BFS?
              Wie gross wird die Grenze?
            </li>
            <li>
              Genau die Hälfte aller 362'880 Anordnungen ist{" "}
              <strong>unlösbar</strong>. Probieren Sie{" "}
              <code>[2, 8, 3, 1, 6, 4, 7, 0, 5]</code>. Was macht die Suche? Wie
              lange dauert es, bis sie es merkt — und woran merkt sie es?
            </li>
            <li>
              Bauen Sie in <code>search.js</code> einen Zähler ein, der alle
              10'000 expandierten Knoten den Fortschritt ausgibt.
            </li>
            <li>
              Ersetzen Sie in Ihrer <code>PriorityQueue</code> die lineare Suche
              durch einen Min-Heap. Messen Sie vorher und nachher die Laufzeit
              von <code>puzzle ucs</code>. Wie gross ist der Unterschied?
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 12: Ein eigenes Problem</h4>
          <p>
            Modellieren Sie ein <strong>selbst gewähltes</strong> Problem als
            neue Datei in <code>src/problems/</code> und tragen Sie es in{" "}
            <code>index.js</code> bei <code>PROBLEME</code> ein. Vorschläge:
          </p>
          <ul>
            <li>
              <strong>Wasserkrüge:</strong> ein 5-Liter- und ein 3-Liter-Krug,
              genau 4 Liter abmessen.
            </li>
            <li>
              <strong>Springende Frösche:</strong> drei Frösche links, drei
              rechts, ein freier Stein in der Mitte — die Seiten tauschen.
            </li>
            <li>
              <strong>Zahlenspiel:</strong> von 1 zu 100, erlaubt sind{" "}
              <code>+1</code>, <code>·2</code> und <code>-3</code>.
            </li>
            <li>
              <strong>Türme von Hanoi</strong> mit drei oder vier Scheiben.
            </li>
            <li>
              <strong>Routenplaner:</strong> zehn Schweizer Städte mit echten
              Distanzen als Kantenkosten. Hier lohnt sich <code>ucs</code>!
            </li>
          </ul>
          <ol>
            <li>
              Schreiben Sie <em>vor</em> dem Programmieren in zwei Sätzen auf,
              was bei Ihnen ein Zustand ist und was eine Aktion.
            </li>
            <li>
              Implementieren Sie <code>startState</code>, <code>isGoal</code>,{" "}
              <code>successors</code>, <code>key</code> und <code>format</code>.
            </li>
            <li>
              Lösen Sie es mit <code>bfs</code> und prüfen Sie die Lösung von
              Hand nach: Ist jeder einzelne Zug erlaubt?
            </li>
            <li>
              Wenn Ihr Problem unterschiedliche Kantenkosten hat: Vergleichen
              Sie <code>bfs</code> und <code>ucs</code>. Finden sie denselben
              Weg? Warum (nicht)?
            </li>
          </ol>
        </div>

        <div className="aufgabe">
          <h4>Aufgabe 13: Zum Nachdenken für nächste Woche</h4>
          <p>
            Alle drei Algorithmen suchen blind — keiner weiss, ob ein Zustand
            dem Ziel näher ist als ein anderer. Sie selbst wussten das beim
            Lösen von Hand sehr wohl.
          </p>
          <ol>
            <li>
              Nehmen Sie Ihre Antwort aus Aufgabe 11 des ersten Kapitels hervor.
              Wie liesse sich Ihre Idee als Funktion <code>h(state)</code>{" "}
              schreiben?
            </li>
            <li>
              Schauen Sie sich <code>src/heuristics.js</code> an. Welche Ihrer
              Ideen kommt den Funktionen dort am nächsten?
            </li>
            <li>Bringen Sie Ihren Vorschlag in die nächste Lektion mit.</li>
          </ol>
        </div>
      </Section>

      <Section>
        <h2>Abgabe</h2>
        <ul>
          <li>
            Ihr Fork bzw. Ihre Kopie des Repos mit der fertigen{" "}
            <code>pancake.js</code> sowie <code>Stack</code> und{" "}
            <code>PriorityQueue</code> in <code>search.js</code>.
          </li>
          <li>
            Eine Datei <code>antworten.md</code> im Repo mit den schriftlichen
            Antworten und den ausgefüllten Tabellen der Aufgaben 1–10.
          </li>
          <li>
            Falls Sie Aufgabe 12 gemacht haben: Ihr eigenes Problem in{" "}
            <code>src/problems/</code>, eingetragen in <code>index.js</code>.
          </li>
        </ul>
        <p>
          Die Aufgaben 1–7 sollten Sie in der ersten Lektion schaffen, 8–10 in
          der zweiten. Teil 4 ist der Kern dieses Kapitels — nehmen Sie sich
          dafür Zeit.
        </p>
      </Section>
    </>
  );
}
