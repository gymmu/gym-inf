import style from "./ProgressDot.module.css"

const colorMap = {
  1: style.red,
  2: style.yellow,
  3: style.green,
}

export default function ProgressDot({ level }) {
  if (!level) return null

  return <span className={`${style.dot} ${colorMap[level] || ""}`} />
}
