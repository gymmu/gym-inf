import CodeBlock from "@components/CodeBlock";
import Video from "@components/Video" 


export default function KaplayTags() {

  return (
    <>
      <section>
        <h2>Kaplay Tags</h2>
        <p>
          Kaplay verwendet ein <pre>Tags</pre> System um die verschiedenen 
          Spielobjekte einer Klasse zuzuweisen. Das ist sehr praktisch, denn so
          kann alles was freundlich ist, eine eigene Klasse haben, und alles
          was feindlich ist eine andere. So können Kollisionen unterschiedlich
          behandelt werden.
        </p>
        <CodeBlock lang="javascript">
          {`
            k.add([
              k.rect(20, 20),
              k.pos(320, 240),
              "friend"
            ])
          `}
        </CodeBlock>
        <p>
          Das <pre>"friend"</pre> ist das Tag das verwendet wird. Damit können
          wir dann diese Klasse von Objekten direkt ansprechen. Im Video unten
          werden wir das letzte Beispiel zu den Event erweitern und diese
          <pre>Tags</pre> verwenden.
        </p>
      </section>
      <section>
        <h2>Video</h2>
        <p>
          Das Video erweitert das letzte um Tags.
        </p>
        <Video url="ypahTzOiuhc" />
      </section>
    </>
  )
}
