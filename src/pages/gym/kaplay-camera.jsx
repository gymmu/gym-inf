import CodeBlock from "@components/CodeBlock"
import Video from "@components/Video" 


export default function KaplayCamera() {
  return (
    <>
      <section>
        <h2>Kamera zentrieren in Kaplay</h2>
        <p>
          In vielen Spielen ist die Spielwelt grösser als der sichtbare
          Bildschirm. Damit der Spieler immer im Zentrum bleibt und die Kamera
          ihm folgt, verwenden wir die Kamera-Funktionen von Kaplay. So bleibt
          der Spieler immer im Fokus, während sich die Welt um ihn herum bewegt.
        </p>
        <CodeBlock lang="javascript">
          {`
            const player = k.add([
              k.rect(20, 20),
              k.pos(320, 240),
              k.anchor("center"),
              "player"
            ])

            // Kamera folgt dem Spieler
            player.onUpdate(() => {
              k.camPos(player.pos)
            })
          `}
        </CodeBlock>
        <p>
          Mit <pre>camPos()</pre> können wir die Kameraposition setzen. Wenn wir
          dies im <pre>onUpdate()</pre>-Event des Spielers machen, folgt die
          Kamera dem Spieler automatisch.
        </p>
        <p>
          Für eine sanftere Kamerabewegung können wir auch Interpolation
          verwenden:
        </p>
        <CodeBlock lang="javascript">
          {`
            player.onUpdate(() => {
              const currentCamPos = k.camPos()
              const targetCamPos = player.pos
              
              // Sanfte Kamerabewegung (Lerp)
              k.camPos(currentCamPos.lerp(targetCamPos, 0.1))
            })
          `}
        </CodeBlock>
      </section>
      <section>
        <h2>Video</h2>
        <p>
          In diesem Video wird erklärt wie die Kamera funktioniert und wie Sie
          diese so einstellen können, dass sie dem Spieler folgt.
        </p>
        <Video url="lQbuCrrBNk8" />
      </section>
    </>
  )
}
