import NavLink from "./NavLink"
import ICode from "./ICode"
import { useContext } from "react"
import { NavContext } from "../context/NavContext"

function ChapterIndex() {

  const {fms, setFms} = useContext(NavContext)

  const activateGym = () => {
        setFms(false)
    }
  const activateFMS = () => {
        setFms(true)
    }

  return (
    <>
      <div className="hint">
        ACHTUNG: Diese Webseite ist unter aktiver Entwicklung. Informationen
        können von einem Tag auf den nächsten ändern. Wenn Sie eine Information
        von der Webseite brauchen, dann machen Sie ein Screenshot davon, und
        speichern diesen für sich ab.
      </div>
        <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
            <h2 style={{cursor: "pointer"}} className={!fms ? "active-school" : "" } onClick={activateGym}>Gym</h2>
            <h2 style={{cursor: "pointer"}} className={fms ? "active-school" : "" } onClick={activateFMS} >FMS</h2>
        </div>
      { !fms ? <GymIndex />  : <FmsIndex />}
    </>
  )
}

function FmsIndex() {
    return (
        <>
        <ol className="nav">
            <li>IKT
                <ol>
                    <NavLink to="fms/ikt" site="../site/md/fms/ikt.mdx">
                        Einführung
                    </NavLink>
                </ol>
            </li>
        </ol>
        </>
    )
}

function GymIndex() {
    return (
        <>
<ol className="nav">
        <li>
          Einführung
          <ol>
            <NavLink to="install" site="../sites/md/installation.mdx">
              Installation
            </NavLink>
          </ol>
        </li>
        <li>
          HTML
          <ol>
            <NavLink to="html" site="../sites/md/html.mdx">
              Webseiten
            </NavLink>
            <NavLink to="html-elements" site="../sites/md/html-elements.mdx">
              Webseiten strukturieren
            </NavLink>
            <NavLink
              to="html-attributes"
              site="../sites/md/html-attributes.mdx">
              HTML Attribute
            </NavLink>
          </ol>
        </li>
        <li>
          SVG
          <ol>
            <NavLink to="svg" site="./sites/md/svg.mdx">
              Vektorgrafiken mit SVG
            </NavLink>
            <NavLink to="svg-elements" site="./sites/md/svg-elements.mdx">
              Weitere SVG-Elemente
            </NavLink>
            <NavLink to="svg-clipping" site="./sites/md/svg-clipping.mdx">
              Elemente verbergen
            </NavLink>
            <NavLink to="svg-animation" site="./sites/md/svg-animation.mdx">
              Elemente animieren
            </NavLink>
          </ol>
        </li>
        <li>
          CSS
          <ol>
            <NavLink to="css" site="./sites/md/css.mdx">
              Elemente gestalten
            </NavLink>
            <NavLink to="css-selectors" site="./sites/md/css-selectors.mdx">
              CSS Selektoren
            </NavLink>
            <NavLink to="css-box-model" site="./sites/md/css-box-model.mdx">
              CSS Box Modell
            </NavLink>
            <NavLink to="css-animations" site="./sites/md/css-animationen.mdx">
              CSS Animationen
            </NavLink>
          </ol>
        </li>
        <li>
          Git
          <ol>
            <NavLink to="git" site="./sites/md/git.mdx">
              Versionskontrolle
            </NavLink>
            <NavLink to="git-branches" site="./sites/md/git-branches.mdx">
              Versionszweige (<ICode>branch</ICode>es)
            </NavLink>
            <NavLink to="git-merges" site="./sites/md/git-merges.mdx">
              Versionen zusammenführen (<ICode>merge</ICode>)
            </NavLink>
            <NavLink
              to="git-merge-conflicts"
              site="./sites/md/git-merge-conflicts.mdx">
              <ICode>merge</ICode>-Konflikte
            </NavLink>
          </ol>
        </li>
        <li>
          Tipps und Tricks für HTML und CSS
          <ol>
            <NavLink to="tipp-images" site="./sites/md/css-img.mdx">
              Bilder zentrieren
            </NavLink>
            <NavLink to="tipp-flexbox" site="./sites/md/css-layout.mdx">
              Layouts
            </NavLink>
            <NavLink
              to="img-background"
              site="./sites/md/css-img-background.mdx">
              Bild als Hintergrund
            </NavLink>
            <NavLink
              to="img-next-to-text"
              site="./sites/md/css-img-next-to-text.mdx">
              Bild neben Text
            </NavLink>
          </ol>
        </li>
        <li>
          Javascript
          <ol>
            <NavLink to="javascript" site="./sites/md/javascript.mdx">
              Einführung in Javascript
            </NavLink>
            <NavLink
              to="javascript-change-page"
              site="./sites/md/javascript-change-page.mdx">
              Seiteninhalte mit Javascript anpassen
            </NavLink>
            <NavLink
              to="javascript-text-to-numbers"
              site="./sites/md/javascript-text-to-numbers.mdx">
              Datentypen in Javascript
            </NavLink>
          </ol>
        </li>
        <li>
          Javascript: Logik
          <ol>
            <NavLink
              to="javascript-variables"
              site="./sites/md/javascript-variables.mdx">
              Variablen
            </NavLink>
            <NavLink
              to="javascript-blocks"
              site="./sites/md/javascript-blocks.mdx">
              Code-Blöcke / Scoping
            </NavLink>
            <NavLink
              to="javascript-declarative"
              site="./sites/md/javascript-declarative.mdx">
              Deklarativer Code und praktische Funktionen
            </NavLink>
            <NavLink to="javascript-if" site="./sites/md/javascript-if.mdx">
              Bedingungen (<pre>if</pre>)
            </NavLink>
            <NavLink to="javascript-for" site="./sites/md/javascript-for.mdx">
              Javascript Schleifen (<pre>for</pre>)
            </NavLink>
            <NavLink
              to="javascript-return"
              site="./sites/md/javascript-return.mdx">
              Rückgabewerte in Javascript (<pre>return</pre>)
            </NavLink>
            <NavLink
              to="javascript-lists"
              site="./sites/md/javascript-lists.mdx">
              Listen in Javascript
            </NavLink>
            <NavLink
              to="javascript-ascii"
              site="./sites/md/javascript-ascii.mdx">
              ASCII-Codes in Javascript
            </NavLink>
            <NavLink
              to="javascript-switches"
              site="./sites/md/javascript-switches.mdx">
              Schalter in Javascript
            </NavLink>
          </ol>
        </li>
        <li>
          Künstliche Intelligenz
          <ol>
            <NavLink to="ai-intro" site="./sites/md/ai-intro.mdx">
              Arbeiten mit küstlicher Intelligenz
            </NavLink>
            <NavLink to="ai-pong" site="./sites/md/ai-pong.mdx">
              Pong mit küstlicher Intelligenz
            </NavLink>
          </ol>
        </li>
        <li>
          Daten und Objekte
          <ol>
            <NavLink to="data" site="./sites/md/data.mdx">
              Daten
            </NavLink>
            <NavLink to="data-objects" site="./sites/md/data-objects.mdx">
              Objekte
            </NavLink>
            <NavLink to="data-complex" site="./sites/md/data-complex.mdx">
              Komplexe Daten
            </NavLink>
            <NavLink to="data-classes" site="./sites/md/data-classes.mdx">
              Klassen
            </NavLink>
            <NavLink
              to="data-objects-as-data"
              site="./sites/md/data-objects-as-data.mdx">
              Objekte as Datenquelle
            </NavLink>
            <NavLink to="data-binary" site="./sites/md/data-binary.mdx">
              Binärsystem
            </NavLink>
            <NavLink to="data-hex" site="./sites/md/data-hex.mdx">
              Hexadezimalsystem
            </NavLink>
          </ol>
        </li>
        <li>
          Computerspiele
          <ol>
            <NavLink to="game" site="./sites/md/game.mdx">
              Eigenes Computerspiel
            </NavLink>
            <NavLink
              to="game-animations"
              site="./sites/md/game-player-and-animations.mdx">
              Spieler und Animationen
            </NavLink>
            <NavLink
              to="game-interactions"
              site="./sites/md/game-interactions.mdx">
              Interaktionen im Spiel
            </NavLink>
          </ol>
        </li>
        <li>
          Sicherheit
          <ol>
            <NavLink
              to="security-passwords"
              site="./sites/md/security-passwords.mdx">
              Passwörter und Sicherheit
            </NavLink>
            <NavLink
              to="security-encryption"
              site="./sites/md/security-encryption.mdx">
              Verschiedene Verschlüsselungsverfahren
            </NavLink>
          </ol>
        </li>
        <li>
          Netzwerke
          <ol>
            <NavLink to="network-intro" site="./sites/md/network-intro.mdx">
              Computernetzwerke
            </NavLink>
          </ol>
        </li>
      </ol>
      </>
    )
}

export default ChapterIndex
