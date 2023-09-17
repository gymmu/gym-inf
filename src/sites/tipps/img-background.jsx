import { Link } from "react-router-dom"
import Chapter from "../../components/Chapter"
import Code from "../../components/Code"
import Example from "../../components/Example"
import ICode from "../../components/ICode"
import LCode from "../../components/LCode"
import Tag from "../../components/Tag"
import Tipp from "../../components/Tipp"
import Video from "../../components/Video"

export default function TippsImgBackground() {
  return (
    <Tipp>
      <h2>Bild als Hintergrund</h2>
      <section>
        Ein Element mit einem Bild als Hintergrund kann mit dem folgenden HTML
        Code erstellt werden:
        <LCode
          content={`<h2 class="container-with-bg">
  <div class="content">
    Content
  </div>
  <div class="bg-img">
    <img
      src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="">
  </div>
</h2>`}></LCode>
        <p>
          Der Code sieht kompliziert aus, erlaubt es aber sehr flexibel zu sein.
        </p>
      </section>
      <section>
        <h3>CSS</h3>
        <p>
          Damit der Code funktioniert, braucht es noch den folgenden CSS Code.
        </p>
        <LCode
          content={`/* Zentriere alle Elemente in dem Container, setze die Höhe und die Breite fest. */
.container-with-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100px;
}

/* Setze den Container mit dem Inhalt vor den Hintergrund, damit können sich
   Elemente überlappen. */
.container-with-bg > div.content {
  color: white;
  z-index: 1;
}

/* Nimm den Bild-Container aus dem normalen Dokumentenfluss raus, und verstecke
   alles was über das enthaltende Element heraus läuft. */
.container-with-bg > div.bg-img {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

/* Skaliere das Bild auf die volle Breite und zentriere es vertikal. */
.container-with-bg > div.bg-img > img {
  width: 100%;
  transform: translateY(-50%);
}`}></LCode>
        <p>
          Es sind einige Elemente und komplexe Selektoren, dafür kann es sehr
          gut angepasst werden. Zum Beispiel können ganz einfach Transitionen
          hinzufügen.
        </p>
      </section>
      <section>
        <h3>Einfacher aber weniger flexibel</h3>
        <p>
          Wenn nur ein Bild als Hintergrund in einem Element eingefügt werden
          soll, aber darüber hinaus nichts angepasst werden muss, kann auch der
          folgende Code verwendet werden.
        </p>
        <Example title="Beispiel: Nur als Hintergrund">
          <LCode
            content={`.element-with-background {
  height: 160px;
  background-image: url("https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}`}></LCode>
        </Example>
      </section>
    </Tipp>
  )
}