import style from "./Navbar.module.css"
import NavLink from "./NavLink"

export default function GymIndex() {
  return (
    <div className={style.navList}>
      <section>
        <h2>Theorie</h2>
        <ol className={style.nav}>
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
              <NavLink to="css">CSS</NavLink>
              <NavLink to="javascript">Javascript</NavLink>
            </ol>
          </li>
          <li>
            Programmieren
            <ol>
              <NavLink to="js-variables">Variablen</NavLink>
              <NavLink to="js-bedingungen">Bedingungen</NavLink>
              <NavLink to="js-functions">Funktionen</NavLink>
              <NavLink to="js-lists">Listen</NavLink>
              <NavLink to="js-loops">Schleifen</NavLink>
              <NavLink to="js-loops-functions">
                Schleifen mit Funktionen
              </NavLink>
              <NavLink to="js-aufgaben">Aufgaben</NavLink>
            </ol>
          </li>
          <li>
            Spielprojekt mit Kaplay
            <ol>
              <NavLink to="kaplay-intro">Einführung</NavLink>
              <NavLink to="kaplay-gameobjects">Spielobjekte</NavLink>
              <NavLink to="kaplay-interaction">Interaktionen</NavLink>
              <NavLink to="kaplay-scenes">Szenen</NavLink>
              <NavLink to="kaplay-components">Komponenten</NavLink>
              <NavLink to="kaplay-events">Ereignisse</NavLink>
              <NavLink to="kaplay-tags">Tags</NavLink>
              <NavLink to="kaplay-collisions">Kollisionen</NavLink>
              <NavLink to="kaplay-camera">Kamera zentrieren</NavLink>
              <NavLink to="kaplay-teamwork">Arbeiten im Team</NavLink>
            </ol>
          </li>
          <li>
            Internet und Sicherheit
            <ol>
              <NavLink to="gym/praesentation-netzwerke">
                ▶ Präs.: Netz &amp; Internet
              </NavLink>
              <NavLink to="gym/internet">Internet</NavLink>
              <NavLink to="gym/internet-karte">Karte des Internets</NavLink>
              <NavLink to="gym/internet-quiz">Quiz: Internet</NavLink>
              <NavLink to="gym/netzwerke">Netzwerkkomponenten</NavLink>
              <NavLink to="gym/netzwerke-quiz">Quiz: Netzwerke</NavLink>
              <NavLink to="gym/vpn">VPN</NavLink>
              <NavLink to="gym/vpn-quiz">Quiz: VPN</NavLink>
              <NavLink to="gym/praesentation-krypto">
                ▶ Präs.: Kryptographie
              </NavLink>
              <NavLink to="gym/verschluesselung">Verschlüsselung</NavLink>
              <NavLink to="gym/verschluesselung-quiz">
                Quiz: Verschlüsselung
              </NavLink>
              <NavLink to="gym/schluesselaustausch">Schlüsselaustausch</NavLink>
              <NavLink to="gym/schluesselaustausch-quiz">
                Quiz: Schlüsselaustausch
              </NavLink>
              <NavLink to="gym/passwoerter">Passwörter</NavLink>
              <NavLink to="gym/passwoerter-quiz">Quiz: Passwörter</NavLink>
            </ol>
          </li>
        </ol>
      </section>

      <section>
        <h2>Praktikum</h2>
        <ol className={style.nav}>
          <li>
            <ol>
              <NavLink to="praktikum/install">Installation</NavLink>
            </ol>
          </li>
        </ol>
      </section>
    </div>
  )
}
