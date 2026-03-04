import CodeBlock from "@components/CodeBlock";
import Video from "@components/Video"

export default function KaplayIntro() {

  return (
    <>
      <section>
        <h2>Einführung in Kaplay</h2>
        <p>Kaplay ist eine Game-Engine für den Webbrowser. Das Projekt
          ermöglicht es, einfache Spiele direkt im Webbrwoser darzustellen.
          Kaplay verfügt über eine sehr gute Dokumentation und eine grosse
          Sammlung von Beispielen, an denen man sich inspirieren kann. Wir
          werden in den folgenden Kapiteln noch mehr über diese Game-Engine
          lernen, und lernen wie man ein Spiel Projekt von Grund auf aufbaut.
        </p>
      </section>
      <section>
        <h3>Dokumentation</h3>
        <p>
          Die Dokumentation von Kaplay ist hervorragend und man kann dort fast
          alles finden, besonders wenn man lange genug sucht, oder wenn man
          weiss wie man suchen muss. Es hilft natürlich wenn man das Framework
          verstanden hat, und bereits eine Übersicht hat, was es alles gibt.
          Falls Sie also beim ersten mal etwas nicht verstanden oder gefunden
          haben, schauen Sie einfach nochmals rein.
        </p>
        <p style={{textAlign: "center"}}><a href="https://v4000.kaplayjs.com/docs/guides/">Kaplay Docs</a></p>
      </section>
      <section>
        <h3>Sammlung von Beispielen</h3>
        <p>
          Kaplay hat neben der hervorragenden Dokumentation noch eine grosse
          Sammlung an guten Beispielen, wo alles mit sehr vielen Kommentaren
          erklärt wird. Hier ist es ebenfalls hilfreich wenn Sie sich in dem
          Projekt besser auskennen, denn oftmals kann man Beispiele nicht
          direkt übernehmen, sondern es müssen noch Anpassungen gemacht werden.
          Diese gelingen aber sehr einfach, je besser man sich in dem Projekt
          auskennt.
        </p>
        <p style={{textAlign: "center"}}><a href="https://play.kaplayjs.com/?example=basicEventsObject">Kaplay Sammlung</a></p>
      </section>
      <section>
        <h3>KI-Unterstützung</h3>
        <p>
          Oftmals ist es nicht leicht die richtigen Informationen direkt auf
          der Webseite zu finden, daher bekommen Sie hier ein wenig
          Unterstützung von einem ChatBot. Der ChatBot ist angewiesen die
          Dokumentation von Kaplay zu durchsuchen, und Ihnen kleine Codestücke
          zu geben, die Sie direkt einsetzen und anpassen können. Der ChatBot
          ist <strong>nicht</strong> dazu da um das ganze Projekt für Sie zu
          machen, verlangen Sie also keinen grossen Code-Stücke von dem Bot.
        </p>
        <p style={{textAlign: "center"}}><a href="https://app.fobizz.com/ai/chats/public_assistants/1864dbea-0869-4667-b88a-b4d0ba60f336?token=e1f2d087a4ed9ab17005be1a7cb5d13e">Kaplay Bot</a></p>
      </section>
      <section>
        <h2>Video Hilfe</h2>
        <p>
          Sie bekommen zu jedem Abschnitt auch ein kurzes Video, welches Ihnen
          die Grundlagen und den Code erklärt. Die Videos sind relativ kurz
          gehalten, damit man sie öfters anschauen kann, falls ein Teil noch
          nicht richtig verstanden wurde. Die Videos sind mehr als Erklärung
          und Hilfe gedacht, nicht unbedingt um direkt mitzuarbeiten.
        </p>
        
      </section>
      <section>
        <h2>Projekt Setup</h2>
        <p>
          Das Projekt können Sie hier unter diesem <a href="https://github.com"
          target="_blank">Github Classroom</a> finden, und sich direkt einer
          Gruppe anschliessen.
        </p>
        <p>
          Das folgende Video erklärt Ihnen wie das Projekt aufgebaut ist.
        </p>
        <Video url="fECohz732gc"/>

      </section>
      <section>
        <h2>Kaplay Spiel erstellen</h2>
        <p>
          Um ein Kaplay Spiel zu erstellen brauchen Sie ein Kaplay-Objekt,
          welches Sie auf Ihrer Webseite hinzufügen. Keine Angst, das ist
          deutlich einfacher wie es klingt. Sie finden hier den Basis Code
          dafür, und in dem Video wird Ihnen mehr dazu erklärt.
        </p>

        <CodeBlock lang="javascript">
          {`
            import kaplay from "kaplay"

            const k = kaplay({...})
          `}
        </CodeBlock>

      </section>
      <section>
        <h2>Video</h2>
        <p>
          In diesem Video wir Ihnen erklärt wie Sie das Kaplay-Objekt erstellen
          und zu Ihrer Webseite hinzufügen.
        </p>
        <Video url="mKyV3Ij7NOE"/>
      </section>
    </>
  )
}
