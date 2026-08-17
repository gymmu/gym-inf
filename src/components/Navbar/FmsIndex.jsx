import style from "./Navbar.module.css";
import NavLink from "./NavLink";

export default function FmsIndex() {
  return (
    <div className={style.navList}>
      <section>
        <h2>BYOD</h2>
        <ol className={style.nav}>
          <NavLink to="byod">Grundinstallation</NavLink>
        </ol>
      </section>
      <section>
        <h2>Microsoft Word</h2>
        <ol className={style.nav}>
          <NavLink to="/fms/word">Einstieg in Word</NavLink>
        </ol>
      </section>
      <section>
        <h2>1. Klasse</h2>
        <ol className={style.nav}>
          <span>
            Einführung
            <ol>
              <NavLink to="fms/hardware">Computer Hardware</NavLink>
              <NavLink to="fms/binary">Binärsystem</NavLink>
              <NavLink to="fms/Hex">Hexadezimalsystem</NavLink>
              <NavLink to="information">Daten und Informationen</NavLink>
              <NavLink to="colors">Farben</NavLink>
            </ol>
          </span>
          <span>
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
          </span>
          <span>
            Internet und Sicherheit
            <ol>
              <NavLink to="fms/internet">Internet</NavLink>
              <NavLink to="fms/internet-karte">Karte des Internets</NavLink>
              <NavLink to="fms/internet-quiz">Quiz: Internet</NavLink>
              <NavLink to="fms/vpn">VPN</NavLink>
              <NavLink to="fms/vpn-quiz">Quiz: VPN</NavLink>
              <NavLink to="fms/verschluesselung">Verschlüsselung</NavLink>
              <NavLink to="fms/schluesselaustausch">Schlüsselaustausch</NavLink>
              <NavLink to="fms/passwoerter">Passwörter</NavLink>
            </ol>
          </span>
          <span>
            Algorithmen
            <ol>
              <NavLink to="/fms/algorithmen">Was sind Algorithmen?</NavLink>
              <NavLink to="/fms/algorithmen-loops">Schleifen</NavLink>
              <NavLink to="/fms/algorithmen-alltag">Alltag</NavLink>
              <NavLink to="/fms/algorithmen-mathematik">Mathematik</NavLink>
              <NavLink to="/fms/algorithmen-strings">Strings</NavLink>
              <NavLink to="/fms/algorithmen-suchen">Suchalgorithmen</NavLink>
              <NavLink to="/fms/algorithmen-sortieren">
                Sortieralgorithmen
              </NavLink>
              <NavLink to="/fms/algorithmen-aufgaben">Aufgaben</NavLink>
            </ol>
          </span>
        </ol>
      </section>
      <section>
        <h2>2. Klasse</h2>
        <ol className={style.nav}>
          <span>
            Tabellenkalkulation
            <ol>
              <NavLink to="fms/excel">Einstieg in Excel</NavLink>
              <NavLink to="fms/excel-spielplan">
                Zusammenarbeit in Excel
              </NavLink>
            </ol>
          </span>
          <span>
            Webdesign
            <ol>
              <NavLink to="fms/html">Einstieg in HTML</NavLink>
              <NavLink to="fms/webdesign">Webdesign mit HTML</NavLink>
              <NavLink to="fms/javascript">Interaktive Webseiten</NavLink>
            </ol>
          </span>
        </ol>
      </section>
    </div>
  );
}
