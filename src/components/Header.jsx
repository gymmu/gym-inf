import { useContext } from "react"
import { NavContext } from "../context/NavContext"
import { ReactSVG } from "react-svg"
import { Link } from "react-router-dom"
import HamburgerUrl from "@icons/hamburger.svg?url"

function Header() {
  const { setVisible } = useContext(NavContext)
  const toggleSide = () => {
    setVisible((toggle) => !toggle)
  }

  return (
    <header>
      <span className="icon" onClick={toggleSide}>
        <ReactSVG src={HamburgerUrl} />
      </span>
      <h1>
        <Link to="/">Informatik Skript</Link>
      </h1>
    </header>
  )
}

export default Header
