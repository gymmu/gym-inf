import style from "@components/Presentation.module.css"

export function Presentation({ children }) {
  return <div className={style.presentation}>{children}</div>
}

export function Slide({ children }) {
  return <div className={style.slide}>{children}</div>
}

export function Narrow({ children }) {
  return <div className={style.narrow}>{children}</div>
}

export function SlideContent({ children }) {
  return <div className={style.slideContent}>{children}</div>
}
