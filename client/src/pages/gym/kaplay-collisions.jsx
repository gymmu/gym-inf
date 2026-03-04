import CodeBlock from "@components/CodeBlock"
import Video from "@components/Video" 


export default function KaplayCollisions() {
  return (
    <>
      <section>
        <h2>Kollisionen in Kaplay</h2>
        <p>
          Kollisionen sind ein zentraler Bestandteil vieler Spiele. In Kaplay
          können wir mit dem <pre>area()</pre>-Komponent und Kollisions-Events
          einfach feststellen, wenn zwei Spielobjekte miteinander kollidieren.
          Dies ist besonders wichtig für die Interaktion zwischen Spieler und
          Gegnern, das Aufsammeln von Items oder das Erkennen von Hindernissen.
        </p>
        <CodeBlock lang="javascript">
          {`
            const player = k.add([
              k.rect(20, 20),
              k.pos(320, 240),
              k.area(),  // Macht das Objekt kollidierbar
              "player"
            ])

            const coin = k.add([
              k.circle(10),
              k.pos(400, 240),
              k.area(),
              "coin"
            ])

            // Reagiert auf Kollision zwischen player und coin
            player.onCollide("coin", (coin) => {
              k.destroy(coin)  // Entfernt die Münze
              console.log("Münze eingesammelt!")
            })
          `}
        </CodeBlock>
        <p>
          Mit <pre>onCollide()</pre> können wir auf Kollisionen reagieren. Der
          erste Parameter ist das Tag des Objekts, mit dem kollidiert werden
          soll, und der zweite Parameter ist eine Funktion, die ausgeführt wird,
          wenn die Kollision stattfindet.
        </p>
      </section>
      <section>
        <h2>Video</h2>
        <p>
          In dem Video erfahren Sie mehr über Kollisionen und wie Sie diese in
          Ihrem Spiel verwenden können.
        </p>
        <Video url="HBApXkM8aBY" />
      </section>
    </>
  )
}
