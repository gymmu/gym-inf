import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { useRef, useContext } from "react"
import { NavContext, NavProvider } from "./context/NavContext"
import ICode from "./components/ICode"
import Header from "./components/Header";

// Import routes from external file
import { routeRegistry } from './routes';

// Create the router using the registry
// Fügen Sie die Routen hier ein
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,  
      children: routeRegistry,
    },
  ],
  {
    basename: "/gym-inf",
  },
);

export default function App() {
  return <RouterProvider router={router} />
}

// Layout component can be extracted
function Layout() {
  const dialogRef = useRef(null)

  return (
    <>
      <NavProvider>
        <Header />
        <Navbar />
        <main>
          <Outlet />
        </main>
      </NavProvider>
      <dialog
        style={{
          padding: "4rem 2rem",
          fontSize: "2.5rem",
          fontWeight: "bold",
          fontFamily: "monospace",
        }}
        ref={dialogRef}>{`${window.location}`}</dialog>
      <footer>Informatik Gymnasium Muttenz</footer>
    </>
  )
}


// Navbar component can be extracted
function Navbar() {
  const { visible } = useContext(NavContext)
  return (
    <aside className={visible ? "show sidenav" : "sidenav"}>
      <ChapterIndex />
    </aside>
  )
}

import NavLink from "./components/NavLink";

// NavLink component can be extracted

// ChapterIndex component can be extracted
function ChapterIndex() {
  return (
    <>
      <div className="hint">
        ACHTUNG: Diese Webseite ist unter aktiver Entwicklung. Informationen
        können von einem Tag auf den nächsten ändern. Wenn Sie eine Information
        von der Webseite brauchen, dann machen Sie ein Screenshot davon, und
        speichern diesen für sich ab.
      </div>
      <ol className="nav">
        <li>
          Einführung
          <ol>
            <NavLink to="install">Installation</NavLink>
          </ol>
        </li>
        <li>
          HTML
          <ol>
            <NavLink to="html">Webseiten</NavLink>
            <NavLink to="html-elements">Webseiten strukturieren</NavLink>
            <NavLink to="html-attributes">HTML Attribute</NavLink>
          </ol>
        </li>
        <li>
          SVG
          <ol>
            <NavLink to="svg">Vektorgrafiken mit SVG</NavLink>
            <NavLink to="svg-elements">Weitere SVG-Elemente</NavLink>
            <NavLink to="svg-clipping">Elemente verbergen</NavLink>
            <NavLink to="svg-animation">Elemente animieren</NavLink>
          </ol>
        </li>
        <li>
          CSS
          <ol>
            <NavLink to="css">Elemente gestalten</NavLink>
            <NavLink to="css-selectors">CSS Selektoren</NavLink>
            <NavLink to="css-box-model">CSS Box Modell</NavLink>
            <NavLink to="css-animations">CSS Animationen</NavLink>
          </ol>
        </li>
        <li>
          Git
          <ol>
            <NavLink to="git">Versionskontrolle</NavLink>
            <NavLink to="git-branches">
              Versionszweige (<ICode>branch</ICode>es)
            </NavLink>
            <NavLink to="git-merges">
              Versionen zusammenführen (<ICode>merge</ICode>)
            </NavLink>
            <NavLink to="git-merge-conflicts">
              <ICode>merge</ICode>-Konflikte
            </NavLink>
          </ol>
        </li>
        <li>
          Tipps und Tricks für HTML und CSS
          <ol>
            <NavLink to="tipp-images">Bilder zentrieren</NavLink>
            <NavLink to="tipp-flexbox">Layouts</NavLink>
            <NavLink to="img-background">Bild als Hintergrund</NavLink>
            <NavLink to="img-next-to-text">Bild neben Text</NavLink>
          </ol>
        </li>
        <li>
          Javascript
          <ol>
            <NavLink to="javascript">Einführung in Javascript</NavLink>
            <NavLink to="javascript-change-page">
              Seiteninhalte mit Javascript anpassen
            </NavLink>
            <NavLink to="javascript-text-to-numbers">
              Datentypen in Javascript
            </NavLink>
          </ol>
        </li>
        <li>
          Javascript: Logik
          <ol>
            <NavLink to="javascript-variables">Variablen</NavLink>
            <NavLink to="javascript-blocks">Code-Blöcke / Scoping</NavLink>
            <NavLink to="javascript-declarative">
              Deklarativer Code und praktische Funktionen
            </NavLink>
            <NavLink to="javascript-if">
              Bedingungen (<pre>if</pre>)
            </NavLink>
            <NavLink to="javascript-for">
              Javascript Schleifen (<pre>for</pre>)
            </NavLink>
            <NavLink to="javascript-return">
              Rückgabewerte in Javascript (<pre>return</pre>)
            </NavLink>
            <NavLink to="javascript-lists">Listen in Javascript</NavLink>
            <NavLink to="javascript-ascii">ASCII-Codes in Javascript</NavLink>
            <NavLink to="javascript-switches">Schalter in Javascript</NavLink>
          </ol>
        </li>
        <li>
          Künstliche Intelligenz
          <ol>
            <NavLink to="ai-intro">Arbeiten mit küstlicher Intelligenz</NavLink>
            <NavLink to="ai-pong">Pong mit küstlicher Intelligenz</NavLink>
          </ol>
        </li>
        <li>
          Daten und Objekte
          <ol>
            <NavLink to="data">Daten</NavLink>
            <NavLink to="data-objects">Objekte</NavLink>
            <NavLink to="data-complex">Komplexe Daten</NavLink>
            <NavLink to="data-classes">Klassen</NavLink>
            <NavLink to="data-objects-as-data">Objekte as Datenquelle</NavLink>
            <NavLink to="data-binary">Binärsystem</NavLink>
            <NavLink to="data-hex">Hexadezimalsystem</NavLink>
          </ol>
        </li>
        <li>
          Computerspiele
          <ol>
            <NavLink to="game">Eigenes Computerspiel</NavLink>
            <NavLink to="game-animations">Spieler und Animationen</NavLink>
            <NavLink to="game-interactions">Interaktionen im Spiel</NavLink>
          </ol>
        </li>
        <li>
          Sicherheit
          <ol>
            <NavLink to="security-passwords">Passwörter und Sicherheit</NavLink>
            <NavLink to="security-encryption">
              Verschiedene Verschlüsselungsverfahren
            </NavLink>
          </ol>
        </li>
        <li>
          Netzwerke
          <ol>
            <NavLink to="network-intro">Computernetzwerke</NavLink>
          </ol>
        </li>
      </ol>
    </>
  )
}
