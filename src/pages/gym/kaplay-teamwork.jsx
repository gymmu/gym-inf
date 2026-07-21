import CodeBlock from "@components/CodeBlock"
import Video from "@components/Video" 

export default function KaplayTeamwork() {
  return (
    <>
      <section>
        <h2>Arbeiten im Team mit Git</h2>
        <p>
          Wenn Sie an einem grösseren Projekt arbeiten, ist es wichtig im Team
          zusammenzuarbeiten. Git und GitHub ermöglichen es mehreren Personen
          gleichzeitig am selben Projekt zu arbeiten, ohne sich gegenseitig zu
          stören. Hier lernen Sie die Grundlagen der Zusammenarbeit mit Git.
        </p>
      </section>
      <section>
        <h3>Branches erstellen</h3>
        <p>
          Jedes Teammitglied sollte an einem eigenen Branch arbeiten. So können
          alle unabhängig voneinander arbeiten und es gibt keine Konflikte.
        </p>
        <CodeBlock lang="bash">
          {`
            # Neuen Branch erstellen und wechseln
            git checkout -b mein-feature

            # Oder in neueren Git-Versionen:
            git switch -c mein-feature
          `}
        </CodeBlock>
        <p>Benennen Sie Ihre Branches sinnvoll, z.B.:</p>
        <ul>
          <li>
            <pre>feature/player-movement</pre> - für neue Features
          </li>
          <li>
            <pre>fix/collision-bug</pre> - für Bugfixes
          </li>
          <li>
            <pre>level/world-1</pre> - für neue Levels
          </li>
        </ul>
      </section>
      <section>
        <h3>Änderungen hochladen</h3>
        <p>
          Wenn Sie Änderungen gemacht haben, committen Sie diese und laden sie
          auf GitHub hoch:
        </p>
        <CodeBlock lang="bash">
          {`
            # Änderungen hinzufügen
            git add .

            # Commit mit aussagekräftiger Nachricht
            git commit -m "Add player jump functionality"

            # Auf GitHub hochladen
            git push origin mein-feature
          `}
        </CodeBlock>
      </section>
      <section>
        <h2>Video zu Git Branches</h2>
        <p>
          Das Video zeigt Ihnen wie Sie in VSCode mit einer grafischen 
          Oberfläche mit Git arbeiten können, und erklärt Ihnen auch nochmals
          alle wichtigen Konzepte.
        </p>
        <Video url="ReuQ_Rrf7Aw" />
      </section>
      <section>
        <h3>Änderungen von anderen holen</h3>
        <p>
          Bevor Sie mit der Arbeit beginnen, holen Sie immer die neuesten
          Änderungen vom Hauptbranch:
        </p>
        <CodeBlock lang="bash">
          {`
            # Zum Hauptbranch wechseln
            git checkout main

            # Neueste Änderungen holen
            git pull origin main

            # Zurück zu Ihrem Feature-Branch
            git checkout mein-feature

            # Hauptbranch in Ihren Branch mergen
            git merge main
          `}
        </CodeBlock>
      </section>
      <section>
        <h3>Tipps für gute Zusammenarbeit</h3>
        <ul>
          <li>Committen Sie oft und mit aussagekräftigen Nachrichten</li>
          <li>Holen Sie regelmässig die neuesten Änderungen vom Hauptbranch</li>
          <li>Kommunizieren Sie mit Ihrem Team über geplante Änderungen</li>
          <li>Testen Sie Ihren Code bevor Sie einen Pull Request erstellen</li>
          <li>Halten Sie Ihre Commits klein und fokussiert auf eine Aufgabe</li>
        </ul>
      </section>
      <section>
        <h2>Video zu Git Merges</h2>
        <p>
          Dieses Video zeigt Ihnen wie Sie die Änderungen von anderen erhalten
          können, und was Sie machen wenn es Konflikte gibt.
        </p>
        <Video url="tVWaWF6xW4U" />
      </section>
    </>
  )
}
