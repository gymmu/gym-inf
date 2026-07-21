import CodeBlock from "@components/CodeBlock";
import Video from "@components/Video" 


export default function KaplayEvents() {

  return (
    <>
      <section>
        <h2>Kaplay Ereignisse</h2>
        <p>
          Kaplay hat ein Eventsystem, das Sie bereits kennengelernt haben. 
          Immer wenn eine Taste gedrückt wird, wird ein Event ausgelöst. Ein
          solches Event wird dann im nächsten Frame des Spiels verarbeitet.
          Also wenn ich eine Taste gedrückt halte, dann wird in jedem Frame des
          Spiels dieses Event ausgelöst. So können wir auch auf Kollisionen
          testen, oder sogar eigene Events erstellen, mit denen Objekte
          miteinander kommunizieren können.
        </p>
        <CodeBlock lang="javascript">
          {`
            const player = /* Kaplay Code für Spieler */
            const npc = /* Kaplay Code für NPC */

            player.onKeyPress("l", () => {
              console.log("Player pressed L")
              k.trigger("lol", "*") // Feuert ein eigenes Event names "lol"
            })

            k.on("lol", "*", () => {
              // Code der bei dem event passieren soll.
            })
          `}
        </CodeBlock>
        <p>
          Der Code hier ist sehr allgemein un Wahrscheinlich noch schwer zu
          verstehen, aber so können alle Spielobjekte auf ein Event reagieren.
          Das möchten Sie aber meistens nicht, sondern nur auf bestimmte
          Klassen von Spielobjekten. Wie das geht, sehen Sie im nächsten
          Kapitel mit den <pre>Tags</pre>.
        </p>
      </section>
      <section>
        <h2>Video</h2>
        <p>
          Dieses Video erklärt Ihnen wie Sie eigene Komponenten erstellen und
          im Spiel verwenden können.
        </p>
        <Video url="d8PWsXCuJDw" />
      </section>
    </>
  )
}
