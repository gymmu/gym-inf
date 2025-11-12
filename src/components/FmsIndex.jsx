import NavLink from "./NavLink"

export default function FmsIndex() {
  return (
    <div>
      <h2>1. Klasse</h2>
      <ol className="nav">
        <li>
          Obsidian
          <ol>
            <NavLink to="obsidian">Einführung</NavLink>
            <NavLink to="obsidian-md">Markdown in Obsidian</NavLink>
          </ol>
        </li>
        <li>
          Einführung
          <ol>
            <NavLink to="fms/hardware">Computer Hardware</NavLink>
            <NavLink to="fms/binary">Binärsystem</NavLink>
            <NavLink to="fms/Hex">Hexadezimalsystem</NavLink>
            <NavLink to="information">Daten und Informationen</NavLink>
            <NavLink to="colors">Farben</NavLink>
          </ol>
        </li>
        <li>
          Bilder
          <ol>
            <NavLink to="pictures">Bilder</NavLink>
            <NavLink to="fms/svg">SVG</NavLink>
            <NavLink to="fms/svg-line">Linien</NavLink>
            <NavLink to="fms/svg-path">Pfade</NavLink>
            <NavLink to="fms/svg-aufgaben">Aufgaben</NavLink>
            <NavLink to="fms/svg-path-2">Pfade 2.0</NavLink>
            <NavLink to="fms/svg-animation">Animationen</NavLink>
            <NavLink to="fms/svg-use">Elemente wiederverwenden</NavLink>
          </ol>
        </li>
      </ol>
      <h2>2. Klasse</h2>
      <ol className="nav">
        <li>
          Tabellenkalkulation
          <ol>
            <NavLink to="fms/excel">Einstieg in Excel</NavLink>
            <NavLink to="fms/excel-spielplan">Zusammenarbeit in Excel</NavLink>
          </ol>
        </li>
        <li>
          Webdesign
          <ol>
            <NavLink to="fms/html">Einstieg in HTML</NavLink>
            <NavLink to="fms/webdesign">Webdesign mit HTML</NavLink>
          </ol>
        </li>
      </ol>
    </div>
  )
}
