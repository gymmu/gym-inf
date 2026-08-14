import style from "./Navbar.module.css";
import NavLink from "./NavLink";

function WeekSection({ weekNumber, title, items }) {
  return (
    <section className={style.weekSection}>
      <h2 className={style.weekTitle}>Woche {weekNumber}</h2>
      <ol className={style.nav}>
        <li className={style.weekTopic}>{title}</li>
        {items.map((item) => (
          <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
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
            type: "tipp",
            to: "ef/js-user-input",
            label: "Tipp: User Input",
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
        items={[]}
      />
      <WeekSection
        weekNumber="3"
        title="Algorithmen"
        items={[]}
      />
      <WeekSection
        weekNumber="4"
        title="Funktionales Programmieren"
        items={[]}
      />
      <WeekSection
        weekNumber="5"
        title="Objektorientiertes Programmieren"
        items={[]}
      />
      <WeekSection
        weekNumber="6"
        title="Leistungsüberprüfung"
        items={[]}
      />
    </div>
  );
}
