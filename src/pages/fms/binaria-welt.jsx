import LevelMap from "@components/Binaria/LevelMap";
import { Link } from "react-router-dom";
import { getWorld } from "@/data/binaria";

export default function BinariaWelt({ worldId }) {
  const world = getWorld(worldId);

  if (!world) {
    return (
      <>
        <h2>Dieses Land gibt es (noch) nicht</h2>
        <p>
          <Link to="/fms/binaria">← Zurück zur Karte von Binaria</Link>
        </p>
      </>
    );
  }

  return <LevelMap world={world} />;
}
