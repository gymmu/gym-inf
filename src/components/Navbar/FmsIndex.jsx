import style from "./Navbar.module.css";
import NavLink from "./NavLink";

export default function FmsIndex() {
  return (
    <div className={style.navList}>
      <section>
        <h2>1. Klasse</h2>
        <ol className={style.nav}>
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
              <NavLink to="fms/svg-transformation">Transformationen</NavLink>
              <NavLink to="fms/svg-animation">Animationen</NavLink>
            </ol>
          </li>
          <li>
            Internet und Sicherheit
            <ol>
              <NavLink to="fms/internet">Internet</NavLink>
              <NavLink to="fms/internet-quiz">Quiz: Internet</NavLink>
              <NavLink to="fms/vpn">VPN</NavLink>
              <NavLink to="fms/vpn-quiz">Quiz: VPN</NavLink>
              {/*<NavLink to="fms/verschluesselung">Verschlüsselung</NavLink>
            <NavLink to="fms/verschluesselung-quiz">
              Quiz: Verschlüsselung
            </NavLink> */}
            </ol>
          </li>
        </ol>
      </section>
      <section>
        <h2>2. Klasse</h2>
        <ol className={style.nav}>
          <li>
            Tabellenkalkulation
            <ol>
              <NavLink to="fms/excel">Einstieg in Excel</NavLink>
              <NavLink to="fms/excel-spielplan">
                Zusammenarbeit in Excel
              </NavLink>
            </ol>
          </li>
          <li>
            Webdesign
            <ol>
              <NavLink to="fms/html">Einstieg in HTML</NavLink>
              <NavLink to="fms/webdesign">Webdesign mit HTML</NavLink>
              <NavLink to="fms/javascript">Interaktive Webseiten</NavLink>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  );
}
