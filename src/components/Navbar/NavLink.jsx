import { NavContext } from "@context/NavContext"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { registerRoute } from "@/routes.jsx"
import { useAuth } from "@context/AuthContext"
import { useProgress } from "@context/ProgressContext"
import ProgressDot from "./ProgressDot"
import style from "./NavLink.module.css"

function NavLink({ to, elem, children }) {
  const { setVisible } = useContext(NavContext)
  const { isAuthenticated } = useAuth()
  const { getRating } = useProgress()

  useEffect(() => {
    registerRoute(to, elem)
  }, [])

  const hide = () => {
    setVisible(false)
  }

  // Normalize the slug (remove leading slash)
  const slug = to.startsWith("/") ? to.slice(1) : to
  const rating = isAuthenticated ? getRating(slug) : null

  return (
    <li>
      <Link onClick={hide} to={to} className={style.navLink}>
        <span>{children}</span>
        {isAuthenticated && <ProgressDot level={rating} />}
      </Link>
    </li>
  )
}

export default NavLink
