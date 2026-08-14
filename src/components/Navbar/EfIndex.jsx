import style from "./Navbar.module.css";
import NavLink from "./NavLink";

export default function EfIndex() {
  return (
    <div className={style.navList}>
      <section>
        <h2>Programmieren mit JavaScript</h2>
        <ol className={style.nav}>
          <li>
            <NavLink to="ef/editor">Editor</NavLink>
          </li>
          <li>
            Einstieg
            <ol>
              <NavLink to="ef/js-einstieg">Willkommen</NavLink>
              <NavLink to="ef/js-grundlagen">
                Arbeitsauftrag: Grundinstallation
              </NavLink>
            </ol>
          </li>
          <li>
            <NavLink to="ef/aufgaben">Aufgaben</NavLink>
          </li>
          <li>
            <NavLink to="ef/js-variablen">Variablen</NavLink>
          </li>
          <li>
            <NavLink to="ef/js-bedingungen">Bedingungen</NavLink>
          </li>
          <li>
            <NavLink to="ef/js-listen">Listen</NavLink>
          </li>
          <li>
            <NavLink to="ef/js-schleifen">Schleifen</NavLink>
          </li>
          <li>
            <NavLink to="ef/js-funktionen">Funktionen</NavLink>
          </li>
          <li>
            <NavLink to="ef/js-objekte">Objekte</NavLink>
          </li>
          <li>
            <NavLink to="ef/js-funktionales-programmieren">
              Funktionales Programmieren
            </NavLink>
          </li>
          <li>
            <NavLink to="ef/js-klassen">Klassen und Vererbung</NavLink>
          </li>
        </ol>
      </section>
    </div>
  );
}
