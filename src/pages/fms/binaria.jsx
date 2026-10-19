import { useBinariaProgress } from "@components/Binaria/useBinariaProgress";
import WorldMap from "@components/Binaria/WorldMap";
import Section from "@components/Section.jsx";
import { Link } from "react-router-dom";
import { binariaWorlds } from "@/data/binaria";

export default function Binaria() {
  const { getWorldState, currentWorldId } = useBinariaProgress();
  const currentWorld = binariaWorlds.find((w) => w.id === currentWorldId);

  return (
    <>
      <h2>Die Karte von Binaria</h2>
      <section>
        <p>
          Willkommen in <strong>Binaria</strong> — dem Land, in dem Biit zu
          Hause ist. Jedes Land auf der Karte ist ein Themengebiet, jedes Level
          darin ein Kapitel. Arbeite dich Schritt für Schritt vor: Biit zieht
          mit dir weiter.
        </p>
      </section>

      <WorldMap />

      <Section>
        <h2>Wo steht Biit gerade?</h2>
        <p>
          Biit wartet in <strong>{currentWorld?.name}</strong>:{" "}
          {currentWorld?.description}
        </p>
        <p>
          <Link to={`/fms/binaria/${currentWorld?.id}`}>
            → Weiter in {currentWorld?.name}
          </Link>
        </p>
      </Section>

      <section>
        <h2>Alle Länder</h2>
        <ul>
          {binariaWorlds.map((world) => {
            const state = getWorldState(world);
            return (
              <li key={world.id}>
                <Link to={`/fms/binaria/${world.id}`}>
                  {world.icon} {world.name}
                </Link>{" "}
                — {world.subtitle} ({state.done}/{state.chapters} Kapitel
                verstanden)
              </li>
            );
          })}
        </ul>
      </section>

      <Section>
        <h2>So funktioniert die Karte</h2>
        <ul>
          <li>
            <strong>Land anklicken</strong> → du siehst die Levels des
            Themengebiets.
          </li>
          <li>
            <strong>Level anklicken</strong> → du siehst die Kapitel, die dazu
            gehören.
          </li>
          <li>
            Ein Level bekommt einen <strong>Stern ⭐</strong>, sobald du alle
            seine Kapitel unten auf der Seite mit „Gut verstanden“ bewertet
            hast.
          </li>
          <li>
            Die Navigationsleiste oben bleibt bestehen — sie ist die Abkürzung
            für alle, die direkt zu einem Kapitel springen wollen.
          </li>
        </ul>
      </Section>
    </>
  );
}
