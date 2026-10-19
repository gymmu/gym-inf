import LevelQuiz from "@components/Binaria/LevelQuiz";
import { Link } from "react-router-dom";
import { getWorld } from "@/data/binaria";

export default function BinariaLevelQuiz({ worldId, levelId }) {
  const world = getWorld(worldId);
  const level = world?.levels.find((l) => l.id === levelId);

  if (!world || !level) {
    return (
      <>
        <h2>Dieses Level gibt es (noch) nicht</h2>
        <p>
          <Link to="/fms/binaria">← Zurück zur Karte von Binaria</Link>
        </p>
      </>
    );
  }

  return <LevelQuiz world={world} level={level} />;
}
