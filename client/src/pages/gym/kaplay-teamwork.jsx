import CodeBlock from "@components/CodeBlock"

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
            git checkout -b feature/mein-feature

            # Oder in neueren Git-Versionen:
            git switch -c feature/mein-feature
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
            git push origin feature/mein-feature
          `}
        </CodeBlock>
      </section>
      <section>
        <h3>Pull Requests</h3>
        <p>
          Wenn Ihr Feature fertig ist, erstellen Sie einen Pull Request auf
          GitHub. So können Ihre Teammitglieder Ihren Code überprüfen, bevor er
          in den Hauptbranch (main) übernommen wird.
        </p>
        <ol>
          <li>Gehen Sie zu Ihrem Repository auf GitHub</li>
          <li>Klicken Sie auf "Pull requests" und dann "New pull request"</li>
          <li>Wählen Sie Ihren Branch aus</li>
          <li>Beschreiben Sie Ihre Änderungen</li>
          <li>Bitten Sie Teammitglieder um Review</li>
        </ol>
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
            git checkout feature/mein-feature

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
        <h2>Video</h2>
        <p>
          Dieses Video zeigt Ihnen wie Sie mit Git im Team arbeiten und welche
          Workflows sich bewährt haben.
        </p>
        {/* TODO: Add Video */}
      </section>
    </>
  )
}
