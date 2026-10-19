import Biit from "@components/gym/Biit/Biit";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Map.module.css";
import { blobPath, serpentineLayout, smoothPath } from "./mapUtils";
import { CHAPTER_STATE_LABEL, useBinariaProgress } from "./useBinariaProgress";

const LEVEL_MAP_WIDTH = 1000;
const LEVEL_MAP_HEIGHT = 520;

const TYPE_LABEL = {
  boss: "Boss-Level",
  miniboss: "Zwischenboss",
  quiz: "Quiz",
  exercise: "Übung",
};

const STATE_ICON = {
  new: "·",
  visited: "👣",
  learning: "🔨",
  done: "⭐",
};

export default function LevelMap({ world }) {
  const { getLevelState, getChapterState, getWorldState, getCurrentLevelId } =
    useBinariaProgress();
  const [selectedId, setSelectedId] = useState(null);

  const positions = useMemo(
    () =>
      serpentineLayout(
        world.levels.length,
        LEVEL_MAP_WIDTH,
        LEVEL_MAP_HEIGHT,
        world.levels.length > 6 ? 4 : 3,
      ),
    [world],
  );

  const pathD = useMemo(
    () => smoothPath(positions.map((p) => [p.x, p.y])),
    [positions],
  );

  const terrain = useMemo(
    () =>
      positions.map((p, i) =>
        blobPath(p.x, p.y, 78 + (i % 3) * 12, i * 2.1 + 1, 9),
      ),
    [positions],
  );

  const worldState = getWorldState(world);
  const currentLevelId = getCurrentLevelId(world);
  const selected =
    world.levels.find((l) => l.id === selectedId) ||
    world.levels.find((l) => l.id === currentLevelId);

  return (
    <div className={style.mapWrapper}>
      <div
        className={style.worldHeader}
        style={{ "--node-accent": world.accent }}
      >
        <Link to="/fms/binaria" className={style.backLink}>
          ← Karte von Binaria
        </Link>
        <h2 className={style.worldTitle}>
          <span aria-hidden="true">{world.icon}</span> {world.name}
        </h2>
        <p className={style.worldSubtitle}>{world.subtitle}</p>
        <p className={style.worldDescription}>{world.description}</p>
        <div className={style.worldStats}>
          <span className={style.progressBar}>
            <span
              className={style.progressFill}
              style={{
                width: `${worldState.percent}%`,
                background: world.accent,
              }}
            />
          </span>
          <span className={style.nodeMeta}>
            {worldState.done}/{worldState.chapters} Kapitel verstanden ·{" "}
            {worldState.percent}%
          </span>
        </div>
      </div>

      <div
        className={style.map}
        style={{ aspectRatio: `${LEVEL_MAP_WIDTH} / ${LEVEL_MAP_HEIGHT}` }}
      >
        <svg
          className={style.canvas}
          viewBox={`0 0 ${LEVEL_MAP_WIDTH} ${LEVEL_MAP_HEIGHT}`}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`Levelkarte von ${world.name}`}
        >
          <defs>
            <radialGradient id="level-ground" cx="50%" cy="40%" r="80%">
              <stop offset="0%" stopColor="#3c3836" />
              <stop offset="100%" stopColor="#1d2021" />
            </radialGradient>
          </defs>
          <rect
            width={LEVEL_MAP_WIDTH}
            height={LEVEL_MAP_HEIGHT}
            fill="url(#level-ground)"
          />

          {terrain.map((d, i) => (
            <path
              // biome-ignore lint/suspicious/noArrayIndexKey: statische Deko
              key={i}
              d={d}
              className={style.island}
              style={{ fill: world.accent, opacity: 0.16 }}
            />
          ))}

          <path d={pathD} className={style.routeShadow} />
          <path d={pathD} className={style.route} />
        </svg>

        {world.levels.map((level, index) => {
          const state = getLevelState(level);
          const pos = positions[index];
          const isCurrent = level.id === currentLevelId;
          const isSelected = selected?.id === level.id;
          return (
            <button
              type="button"
              key={level.id}
              onClick={() => setSelectedId(level.id)}
              className={`${style.node} ${style.levelNode} ${isCurrent ? style.current : ""} ${isSelected ? style.selected : ""}`}
              style={{
                left: `${(pos.x / LEVEL_MAP_WIDTH) * 100}%`,
                top: `${(pos.y / LEVEL_MAP_HEIGHT) * 100}%`,
                "--node-accent": world.accent,
              }}
              aria-label={`Level ${index + 1}: ${level.name}`}
            >
              {isCurrent && (
                <span className={style.biitMarker}>
                  <Biit variant="small" size={100} animate />
                </span>
              )}
              <span
                className={`${style.nodeIcon} ${level.type ? style[level.type] || "" : ""}`}
                data-status={state.status}
              >
                {state.status === "done" ? "⭐" : level.icon}
              </span>
              <span className={style.levelLabel}>
                <span className={style.levelNumber}>
                  {world.levels.length > 1 ? `Level ${index + 1}` : "Level"}
                  {level.type ? ` · ${TYPE_LABEL[level.type]}` : ""}
                </span>
                <strong>{level.name}</strong>
              </span>
            </button>
          );
        })}
      </div>

      {selected && (
        <div
          className={style.levelPanel}
          style={{ "--node-accent": world.accent }}
        >
          <h3 className={style.levelPanelTitle}>
            <span aria-hidden="true">{selected.icon}</span> {selected.name}
            {selected.type && (
              <span className={style.badge}>{TYPE_LABEL[selected.type]}</span>
            )}
          </h3>
          <ul className={style.chapterList}>
            {selected.chapters.map((chapter) => {
              const chapterState = getChapterState(chapter);
              return (
                <li key={chapter.path}>
                  <Link to={chapter.path} className={style.chapterLink}>
                    <span
                      className={style.chapterState}
                      data-state={chapterState}
                      title={CHAPTER_STATE_LABEL[chapterState]}
                    >
                      {STATE_ICON[chapterState]}
                    </span>
                    <span>{chapter.title}</span>
                    <span className={style.chapterGo}>spielen →</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
