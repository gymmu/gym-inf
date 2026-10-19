import Biit from "@components/gym/Biit/Biit";
import { Link } from "react-router-dom";
import { binariaWorlds, MAP_HEIGHT, MAP_WIDTH } from "@/data/binaria";
import style from "./Map.module.css";
import { blobPath, smoothPath } from "./mapUtils";
import { useBinariaProgress } from "./useBinariaProgress";

const routePoints = binariaWorlds.map((world) => [world.x, world.y]);
const routeD = smoothPath(routePoints);

const islands = binariaWorlds.map((world, index) => ({
  id: world.id,
  accent: world.accent,
  d: blobPath(world.x, world.y, 92 + (index % 3) * 10, index * 1.7 + 1),
}));

/** Kleine Deko-Wellen im "Datenmeer". */
const waves = Array.from({ length: 14 }, (_, i) => ({
  x: 40 + ((i * 137) % (MAP_WIDTH - 80)),
  y: 50 + ((i * 231) % (MAP_HEIGHT - 80)),
}));

export default function WorldMap() {
  const { getWorldState, currentWorldId } = useBinariaProgress();

  return (
    <div className={style.mapWrapper}>
      <div
        className={style.map}
        style={{ aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}` }}
      >
        <svg
          className={style.canvas}
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Übersichtskarte von Binaria"
        >
          <defs>
            <radialGradient id="binaria-sea" cx="50%" cy="45%" r="75%">
              <stop offset="0%" stopColor="#3c3836" />
              <stop offset="100%" stopColor="#1d2021" />
            </radialGradient>
            <filter
              id="binaria-glow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect
            width={MAP_WIDTH}
            height={MAP_HEIGHT}
            fill="url(#binaria-sea)"
          />

          {waves.map((wave) => (
            <path
              key={`${wave.x}-${wave.y}`}
              d={`M ${wave.x} ${wave.y} q 10 -6 20 0 q 10 6 20 0`}
              className={style.wave}
            />
          ))}

          {/* Reiseroute von Welt zu Welt */}
          <path d={routeD} className={style.routeShadow} />
          <path d={routeD} className={style.route} />

          {islands.map((island) => {
            const state = getWorldState(
              binariaWorlds.find((w) => w.id === island.id),
            );
            return (
              <g key={island.id}>
                <path
                  d={island.d}
                  className={style.islandShadow}
                  transform="translate(6 10)"
                />
                <path
                  d={island.d}
                  className={style.island}
                  style={{
                    fill: island.accent,
                    opacity: state.status === "new" ? 0.3 : 0.55,
                  }}
                />
              </g>
            );
          })}
        </svg>

        {binariaWorlds.map((world) => {
          const state = getWorldState(world);
          const isCurrent = world.id === currentWorldId;
          return (
            <Link
              key={world.id}
              to={`/fms/binaria/${world.id}`}
              className={`${style.node} ${style.worldNode} ${isCurrent ? style.current : ""}`}
              style={{
                left: `${(world.x / MAP_WIDTH) * 100}%`,
                top: `${(world.y / MAP_HEIGHT) * 100}%`,
                "--node-accent": world.accent,
              }}
              aria-label={`${world.name} — ${state.percent}% abgeschlossen`}
            >
              {isCurrent && (
                <span className={style.biitMarker}>
                  <Biit variant="small" size={110} animate />
                </span>
              )}
              <span className={style.nodeIcon} data-status={state.status}>
                {state.status === "done" ? "🏁" : world.icon}
              </span>
              <span className={style.nodeLabel}>
                <strong>{world.name}</strong>
                <span className={style.nodeSub}>{world.subtitle}</span>
                <span className={style.progressBar}>
                  <span
                    className={style.progressFill}
                    style={{
                      width: `${state.percent}%`,
                      background: world.accent,
                    }}
                  />
                </span>
                <span className={style.nodeMeta}>
                  {state.levelsDone}/{state.levels} Levels · {state.percent}%
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      <p className={style.hint}>
        Tipp: Klicke auf ein Land, um die Levels zu sehen. Biit steht immer
        dort, wo du gerade unterwegs bist.
      </p>
    </div>
  );
}
