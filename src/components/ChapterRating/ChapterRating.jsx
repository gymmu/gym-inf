import { useLocation } from "react-router-dom"
import { useAuth } from "@context/AuthContext"
import { useProgress } from "@context/ProgressContext"
import style from "./ChapterRating.module.css"

const levels = [
  {
    level: 1,
    label: "Nicht verstanden",
    colorClass: "red",
    dotClass: "dotRed",
  },
  {
    level: 2,
    label: "Teilweise verstanden",
    colorClass: "yellow",
    dotClass: "dotYellow",
  },
  {
    level: 3,
    label: "Gut verstanden",
    colorClass: "green",
    dotClass: "dotGreen",
  },
]

// Routes where the rating should not appear
const excludedPaths = [
  "login",
  "register",
  "forgot-password",
  "reset-password",
  "verify-email",
  "auth-demo",
  "protected",
  "admin",
  "codepen",
  "codepensvg",
  "regexeditor",
  "boxmodel",
  "path-editor",
]

function getSlugFromPath(pathname) {
  const basePath = import.meta.env.VITE_BASE_PATH || "/gym-inf/"
  let slug = pathname
  if (slug.startsWith(basePath)) {
    slug = slug.slice(basePath.length)
  }
  if (slug.startsWith("/")) {
    slug = slug.slice(1)
  }
  if (slug.endsWith("/")) {
    slug = slug.slice(0, -1)
  }
  return slug
}

export default function ChapterRating() {
  const { isAuthenticated } = useAuth()
  const { getRating, updateRating } = useProgress()
  const location = useLocation()

  if (!isAuthenticated) return null

  const slug = getSlugFromPath(location.pathname)

  // Don't show on empty slug (home) or excluded paths
  if (!slug || excludedPaths.some((p) => slug.startsWith(p))) return null

  const currentRating = getRating(slug)

  return (
    <div className={style.container}>
      <p className={style.title}>Wie gut hast du dieses Kapitel verstanden?</p>
      <div className={style.buttons}>
        {levels.map(({ level, label, colorClass, dotClass }) => (
          <button
            key={level}
            className={`${style.ratingButton} ${currentRating === level ? `${style.active} ${style[colorClass]}` : ""}`}
            onClick={() => updateRating(slug, level)}
            title={label}>
            <span className={`${style.dot} ${style[dotClass]}`} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
