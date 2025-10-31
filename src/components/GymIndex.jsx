import NavLink from "./NavLink"

export default function GymIndex() {
  return (
    <div>
      <h2>Theorie</h2>
      <ol className="nav">
        <li>
          Obsidian
          <ol>
            <NavLink to="obsidian">Obsidian</NavLink>
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
          Sprachen
          <ol>
            <NavLink to="sprachen">Sprachen</NavLink>
            <NavLink to="grammar">Grammatik</NavLink>
            <NavLink to="regex">Regex</NavLink>
            <NavLink to="html">HTML</NavLink>
          </ol>
        </li>
      </ol>

      <h2>Praktikum</h2>
      <ol className="nav">
        <li>
          <ol>
            <NavLink to="praktikum/install">Installation</NavLink>
          </ol>
        </li>
      </ol>
    </div>
  )
}
