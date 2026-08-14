import style from "./Navbar.module.css";
import NavLink from "./NavLink";

function WeekSection({ weekNumber, title, items }) {
  return (
    <section className={style.weekSection}>
      <h2 className={style.weekTitle}>Woche {weekNumber}</h2>
      <ol className={style.nav}>
        <li className={style.weekTopic}>{title}</li>
        {items.map((item) => (
          <li key={item.to} className={item.type}>
            <NavLink to={item.to}>{item.label}</NavLink>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function EfIndex() {
  return (
    <div className={style.navList}>
      <WeekSection
        weekNumber="1"
        title="Einstieg ins Programmieren"
        items={[
          {
            type: "theorie",
            to: "ef/js-einstieg",
            label: "Theorie: Willkommen",
          },
          {
            type: "information",
            to: "ef/js-uebersicht",
            label: "Information: JavaScript-Übersicht",
          },
          {
            type: "arbeitsauftrag",
            to: "ef/js-grundlagen",
            label: "Arbeitsauftrag: Grundinstallation",
          },
          {
            type: "theorie",
            to: "ef/js-variablen",
            label: "Theorie: Variablen",
          },
          {
            type: "theorie",
            to: "ef/js-bedingungen",
            label: "Theorie: Bedingungen",
          },
          {
            type: "theorie",
            to: "ef/js-listen",
            label: "Theorie: Listen",
          },
          {
            type: "theorie",
            to: "ef/js-schleifen",
            label: "Theorie: Schleifen",
          },
          {
            type: "aufgaben",
            to: "ef/aufgaben",
            label: "Aufgaben: Übungsaufgaben",
          },
        ]}
      />
      <WeekSection
        weekNumber="2"
        title="Grundlagen der Programmierung"
        items={[
          {
            type: "information",
            to: "ef/js-funktionen",
            label: "Information: Funktionen",
          },
        ]}
      />
      <WeekSection
        weekNumber="3"
        title="Funktionales Programmieren"
        items={[
          {
            type: "theorie",
            to: "ef/js-objekte",
            label: "Theorie: Objekte",
          },
          {
            type: "information",
            to: "ef/js-funktionales-programmieren",
            label: "Information: Funktionales Programmieren",
          },
          {
            type: "aufgaben",
            to: "ef/js-klassen",
            label: "Aufgaben: Klassen und Vererbung",
          },
        ]}
      />
      <WeekSection
        weekNumber="4"
        title="Objektorientiertes Programmieren"
        items={[
          {
            type: "theorie",
            to: "ef/js-objekte",
            label: "Theorie: Objekte und Klassen",
          },
          {
            type: "information",
            to: "ef/js-klassen",
            label: "Information: Vererbung",
          },
          {
            type: "arbeitsauftrag",
            to: "ef/js-aufgaben",
            label: "Arbeitsauftrag: OOP-Projekte",
          },
        ]}
      />
      <WeekSection
        weekNumber="5"
        title="Leistungsüberprüfung"
        items={[
          {
            type: "theorie",
            to: "ef/js-wiederholung",
            label: "Theorie: Wiederholung aller Kapitel",
          },
          {
            type: "information",
            to: "ef/js-vorbereitung",
            label: "Information: Prüfungsvorbereitung",
          },
          {
            type: "aufgaben",
            to: "ef/js-pruefung",
            label: "Aufgaben: Leistungsüberprüfung",
          },
        ]}
      />
    </div>
  );
}
