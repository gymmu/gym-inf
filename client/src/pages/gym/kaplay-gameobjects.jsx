import CodeBlock from "@components/CodeBlock";
import Video from "@components/Video"

export default function KaplayGameObjects() {

  return (
    <>
      <section>
        <h2>Spielobjekte in Kaplay</h2>
        <p>
          Damit ein Spiel überhaupt funktionieren kann, braucht es Objekte die
          vom Spieler oder dem Spiel selbst manipuliert werden können. In
          Kaplay werden diese Spielobjekte immer auf die gleiche Art erstellt,
          und zwar mit der <pre>add()</pre>-Funktion.
        </p>
        <CodeBlock lang="javascript">
          {`
            k.add([
              k.rect(20, 20),
              k.pos(320, 240),
              k.anchor("center")
            ])
          `}
        </CodeBlock>
      </section>
      <section>
        <h2>Video</h2>
        <p>
          In dem Video erfahren Sie mehr über Spielobjekte und auch wie Sie
          Gravitation zum Spiel hinzufügen können.
        </p>
        <Video url="DbM5PQPgPcY" />
      </section>
    </>
  )
}
