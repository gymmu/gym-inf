import { ReactSVG } from "react-svg"
import { Link } from "react-router-dom"
import HamburgerUrl from "@icons/hamburger.svg?url"
import { useAppContext } from "@context/AppContext"

function Header() {
  const { menuVisible, setMenuVisible } = useAppContext()
  const toggleSide = () => {
    setMenuVisible(!menuVisible)
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
