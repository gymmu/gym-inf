import { Outlet } from "react-router-dom"

import Header from "@components/Header"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { useNavContext, NavContext } from "@context/NavContext"
import { useAppContext } from "@context/AppContext"

import style from "@components/Layout.module.css"
import { useEffect } from "react"
import { useState } from "react"

// Layout component can be extracted
export default function Layout() {
  const [classes, setClasses] = useState("")
  const { fullscreen, setFullscreen, menuVisible } = useAppContext()

  useEffect(() => {
    function handleKeyDown(ev) {
      const { key } = ev
      if (key === "Escape") {
        setFullscreen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [setFullscreen])

  useEffect(() => {
    console.log(menuVisible)
    setClasses(
      [fullscreen ? style.fullScreen : "", menuVisible ? style.show : ""].join(
        " ",
      ),
    )
  }, [menuVisible, fullscreen])

  return (
    <div id={style.app} className={classes}>
      <Header />
      <Navbar />
      <main className="content-grid">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
