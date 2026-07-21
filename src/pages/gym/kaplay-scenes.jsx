import CodeBlock from "@components/CodeBlock";
import Video from "@components/Video" 


export default function KaplayScenes() {

  return (
    <>
      <section>
        <h2>Verschiedene Levels in Kaplay</h2>
        <p>
          In einem Spiel haben Sie oft unterschiedliche Levels. Würde man das 
          alles in eine Datei schreiben, wird das sehr unübersichtlich, und man
          könnte unterschiedliche Welten nicht gut voneinander trennen. In
          Kaplay wird das ganze mit <pre>Szenen</pre> geregelt.
        </p>
        <CodeBlock lang="javascript">
          {`
            k.scene("loading", () => { /* Code für diese Scene */})
            k.scene("level-01", () => { /* Code für das Level 1 */})


            k.go("loading") // Damit gehen wir zur Szene mit dem Namen "loading"
          `}
        </CodeBlock>
        <p>
          Wenn wir das ganze so organisieren, bleibt natürlich auch alles in
          einer Datei, das möchten wir nicht, also erstellen wir pro Szene eine
          eigene Datei mit folgendem Aufbau:
        </p>
        <CodeBlock lang="javascript">
          {`
            export default function loadingScene() {
              // Code der nur in der Szene gebraucht wird.
            }
          `}
        </CodeBlock>
        <p>
          Dann können wir in unsere Hauptdatei diese Szene importieren und
          hinzufügen.
        </p>
        <CodeBlock lang="javascript">
          {`

            import loadingScene from "./scenes/loading-scene.js"

            /* Kaplay Code */

            k.scene("loading", loadingScene)

            k.go("loading")
          `}
        </CodeBlock>
      </section>
      <section>
        <h2>Video</h2>
        <p>
          Hier in dem Video werden erklärt wie Szenen generell funktionieren.
        </p>
        <Video url="4ALgXCSkJkc" />
        <p>
          In diesem Video wird eine Vereinfachung der Syntax gezeigt. Sollten
          Sie anschauen, denn im Projekt werden beide Arten des Codes
          verwendet. Und der Beispiel-Code auf der Webseite hier, verwendet die
          einfachere Syntax vom zweiten Video.
        </p>
        <Video url="NCFFn_A4Gd0" />
      </section>
    </>
  )
}
