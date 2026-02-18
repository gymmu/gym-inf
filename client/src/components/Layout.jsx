import { Outlet } from "react-router-dom"
import { useEffect, useState, Suspense } from "react"

import Header from "@components/Header"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import SkeletonScreen from "@components/SkeletonScreen"
import { useNavContext, NavContext } from "@context/NavContext"
import { useAppContext, AppProvider } from "@context/AppContext"
import { NavProvider } from "@context/NavContext"
import { AuthProvider } from "@context/AuthContext"

import style from "@components/Layout.module.css"

// Inner layout component with context hooks
function LayoutContent() {
  const [classes, setClasses] = useState("")
  const { fullscreen, setFullscreen, menuVisible } = useAppContext()

  useEffect(() => {
    function handleKeyDown(ev) {
      const { key } = ev
      if (key === "Escape") {
        setFullscreen(false)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown)
      return () => {
        window.removeEventListener("keydown", handleKeyDown)
      }
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
        <Suspense fallback={<SkeletonScreen />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

// Layout component with context providers
export default function Layout() {
  return (
    <AppProvider>
      <NavProvider>
        <AuthProvider>
          <LayoutContent />
        </AuthProvider>
      </NavProvider>
    </AppProvider>
  )
}
