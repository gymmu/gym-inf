import CodeBlock from "@components/CodeBlock";
import Video from "@components/Video" 


export default function KaplayInteractions() {

  return (
    <>
      <section>
        <h2>Interaktionen mit den Spielobjekten</h2>
        <p>
          Wie im letzten Kapitel bereits angesprochen, ist ein Spiel erst 
          spannend wenn es auch vom Benutzer manipuliert werden kann. Dazu
          werden meist das drücken von Tasten oder das klicken der Maus
          verwendet. In Kaplay geht das ganz einfach.
        </p>
        <CodeBlock lang="javascript">
          {`
            const player = k.add([
              k.rect(20, 20),
              k.pos(320, 240),
              k.anchor("center")
            ])

            // Damit fügen wir dem Spieler einen Listener hinzu,
            // der auf die Taste "d" reagiert.
            player.onKeyDown("d", ()=> {
              // Bewegt den Spieler 320 Pixel/sek in x Richtung
              player.move(320, 0)
            })
          `}
        </CodeBlock>
      </section>
      <section>
        <h2>Video</h2>
        <p>
          In dem Video erfahren Sie mehr über Inputhandler und auch wie Sie
          mehrere zu einem Spielobjekt hinzufügen können.
        </p>
        <Video url="J5nRtP1MAss" />
      </section>
    </>
  )
}
