import style from "./Navbar.module.css";
import NavLink from "./NavLink";

function WeekSection({ weekNumber, title, items }) {
  return (
    <section className={style.weekSection}>
      <h2 className={style.weekTitle}>Woche {weekNumber}</h2>
      <ol className={style.nav}>
        <li className={style.weekTopic}>{title}</li>
        {items.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
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
        title="Funktionen und Objekte"
        items={[
          {
            type: "repetition",
            to: "ef/js-repetition",
            label: "Repetition",
          },
          {
            type: "theorie",
            to: "ef/js-funktionen-theorie",
            label: "Theorie: Funktionen",
          },
          {
            type: "theorie",
            to: "ef/js-objekte-theorie",
            label: "Theorie: Objekte",
          },
          {
            type: "aufgaben",
            to: "ef/js-aufgaben-funktionen-objekte",
            label: "Aufgaben: Funktionen und Objekte",
          },
        ]}
      />
      <WeekSection
        weekNumber="3"
        title="Algorithmen"
        items={[
          {
            type: "repetition",
            to: "ef/js-repetition-funktionen-objekte",
            label: "Repetition: Funktionen und Objekte",
          },
          {
            type: "theorie",
            to: "ef/js-standard-algorithmen",
            label: "Theorie: Einfache Standard-Algorithmen",
          },
          {
            type: "theorie",
            to: "ef/js-bubblesort",
            label: "Theorie: Bubble Sort",
          },
          {
            type: "theorie",
            to: "ef/js-quicksort",
            label: "Theorie: Quicksort",
          },
          {
            type: "theorie",
            to: "ef/js-laufzeitanalyse",
            label: "Theorie: Laufzeitanalyse",
          },
          {
            type: "aufgaben",
            to: "ef/js-aufgaben-algorithmen",
            label: "Aufgaben: Algorithmen",
          },
        ]}
      />
      <WeekSection
        weekNumber="4"
        title="Funktionales Programmieren"
        items={[
          {
            type: "repetition",
            to: "ef/js-repetition-algorithmen",
            label: "Repetition: Algorithmen",
          },
          {
            type: "theorie",
            to: "ef/js-fp-theorie",
            label: "Theorie: map, filter, reduce",
          },
          {
            type: "aufgaben",
            to: "ef/js-aufgaben-fp",
            label: "Aufgaben: Funktionales Programmieren",
          },
        ]}
      />
      <WeekSection
        weekNumber="5"
        items={[
          {
            type: "repetition",
            to: "ef/js-repetition-fp",
            label: "Repetition: Funktionales Programmieren",
          },
          {
            type: "theorie",
            to: "ef/js-oop-theorie",
            label: "Theorie: Klassen und Objekte",
          },
          {
            type: "aufgaben",
            to: "ef/js-aufgaben-oop",
            label: "Projekt: Dungeon-Duell",
          },
        ]}
        title="Objektorientiertes Programmieren"
      />
      <WeekSection weekNumber="6" title="Leistungsüberprüfung" items={[]} />
      <WeekSection
        weekNumber="7"
        title="Klassische KI: Graphensuche"
        items={[
          {
            type: "theorie",
            to: "ef/ki-graphensuche",
            label: "Theorie: Graphensuche",
          },
          {
            type: "aufgaben",
            to: "ef/ki-aufgaben-graphensuche-hand",
            label: "Aufgaben: Graphensuche von Hand",
          },
          {
            type: "aufgaben",
            to: "ef/ki-aufgaben-graphensuche-code",
            label: "Aufgaben: Graphensuche mit Code",
          },
        ]}
      />
      <WeekSection
        weekNumber="8"
        title="Heuristiken: Greedy und A*"
        items={[
          {
            type: "theorie",
            to: "ef/ki-heuristiken",
            label: "Theorie: Heuristiken, A* und Greedy",
          },
          {
            type: "aufgaben",
            to: "ef/ki-aufgaben-heuristiken-hand",
            label: "Aufgaben: Heuristiken von Hand",
          },
          {
            type: "aufgaben",
            to: "ef/ki-aufgaben-heuristiken-code",
            label: "Aufgaben: A* und Greedy implementieren",
          },
        ]}
      />
      <WeekSection
        weekNumber="9"
        title="Kürzeste Pfade: Dijkstra und Routenplanung"
        items={[
          {
            type: "hausaufgaben",
            to: "ef/ki-hausaufgaben-paper",
            label: "Hausaufgaben: Paper vorbereiten",
          },
          {
            type: "theorie",
            to: "ef/ki-routenplanung",
            label: "Theorie: Dijkstra und Routenplanung",
          },
          {
            type: "theorie",
            to: "ef/ki-routenplanung-paper",
            label: "Theorie: Wie echte Routenplaner rechnen",
          },
        ]}
      />
    </div>
  );
}
