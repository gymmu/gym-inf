import { useNotes } from "@context/NoteContext"
import { useAppContext } from "@context/AppContext"
import HamburgerUrl from "@icons/hamburger.svg?url"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import style from "./Header.module.css"

function Header() {
  const { menuVisible, setMenuVisible } = useAppContext()
  const { initialized } = useNotes()

  const toggleSide = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <div className={style.container}>
      <header>
        <img src={HamburgerUrl} alt="Hamburger Menu Icon" onClick={toggleSide} />
        <h1>
          <Link to="/">Informatik Skript</Link>
        </h1>
        <Link to="/notes" className={style.noteLink} title="Alle Notizen">
          📝
        </Link>
      </header>
    </div>
  )
}

export default Header
