import CodeBlock from "@components/CodeBlock";
import Video from "@components/Video" 


export default function KaplayComponents() {

  return (
    <>
      <section>
        <h2>Kaplay Komponenten</h2>
        <p>
          In Kaplay wird fast alles über Komponenten gelöst. Komponenten 
          definieren das Aussehen und Verhalten von Spielobjekten. In dem
          Kapitel lernen Sie auch wie man eigene Komponenten erstellt und diese
          dann zum Spiel hinzufügen kann.
        </p>
        <CodeBlock lang="javascript">
          {`
            export default function controller() {
              return {
                id: "controller",  // jede Komponente braucht eine id
                
                add() {
                  // Das wird ausgeführt wenn das Spielobjekt hinzugefügt wird.
                },
                update() {
                  // Wird bei jedem neuen Frame ausgeführt.
                  this.moveBy(k.vec2(10, 0))
                }
              }
            }
          `}
        </CodeBlock>
      </section>
      <section>
        <h2>Video</h2>
        <p>
          Dieses Video erklärt Ihnen wie Sie eigene Komponenten erstellen und
          im Spiel verwenden können.
        </p>
        <Video url="QbVVgs-ncjw" />
      </section>
    </>
  )
}
