import { NavContext } from "@context/NavContext"
import { useNotes } from "@context/NoteContext"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { registerRoute } from "@/routes.jsx"
import ProgressDot from "./ProgressDot"
import style from "./NavLink.module.css"

function NavLink({ to, elem, children }) {
  const { setVisible } = useContext(NavContext)
  const { hasNote } = useNotes()
  const location = useLocation()
  const [hasNotes, setHasNotes] = useState(false)

  useEffect(() => {
    const slug = to.startsWith("/") ? to.slice(1) : to
    hasNote(slug).then((result) => setHasNotes(result))
  }, [to, hasNote])

  useEffect(() => {
    registerRoute(to, elem)
  }, [])

  const hide = () => {
    setVisible(false)
  }

  const slug = to.startsWith("/") ? to.slice(1) : to
  const rating = localStorage.getItem(`gym-inf-progress-${slug}`)

  const isActive = location.pathname === to || location.pathname === `/${slug}`

  return (
    <li>
      <Link
        onClick={hide}
        to={to}
        className={`${style.navLink}${isActive ? " active" : ""}`}
      >
        <span>{children}</span>
        {rating && <ProgressDot level={parseInt(rating, 10)} />}
        <span className={style.spacer} />
        {hasNotes && <span className={style.noteIcon}>📝</span>}
      </Link>
    </li>
  )
}

export default NavLink
