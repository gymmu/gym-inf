import style from "@components/Presentation.module.css"
import { useEffect } from "react"
import { useAppContext } from "../context/AppContext"
import { useRef } from "react"

export function Presentation({ children }) {
  const { fullscreen, setFullscreen } = useAppContext()
  const presentationRef = useRef(null)

  useEffect(() => {
    function handleKeyDown(ev) {
      const { key } = ev
      if (key === "f") {
        setFullscreen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [setFullscreen])

  function scroll(value) {
    console.log("scrollByValue:", value)
    console.log(presentationRef.current.scrollLeft)
    if (presentationRef) {
      presentationRef.current.scrollLeft += value
    }
  }

  return (
    <>
      <button
        className={`${style.scrollButton} ${style.leftButton}`}
        onClick={(ev) => scroll(-500)}>
        &larr;
      </button>
      <button
        className={`${style.scrollButton} ${style.rightButton}`}
        onClick={(ev) => scroll(500)}>
        &rarr;
      </button>
      <div
        ref={presentationRef}
        id={style.presentation}
        className={fullscreen ? style.fullScreen : ""}>
        {children}
      </div>
    </>
  )
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
