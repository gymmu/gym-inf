import { useAppContext } from "@context/AppContext"
import { useAuth } from "@context/AuthContext"
import HamburgerUrl from "@icons/hamburger.svg?url"
import { Link, useNavigate } from "react-router-dom"
import style from "./Header.module.css"

function Header() {
  const { menuVisible, setMenuVisible } = useAppContext()
  const { user, isAuthenticated, logout, hasRole } = useAuth()
  const navigate = useNavigate()

  const toggleSide = () => {
    setMenuVisible(!menuVisible)
  }

  const handleLogout = async () => {
    await logout()
    navigate("/")
  }

  return (
    <div className={style.container}>
      <header>
        <img src={HamburgerUrl} alt="Haburger Menu Icon" onClick={toggleSide} />
        <h1>
          <Link to="/">Informatik Skript</Link>
        </h1>
        <div className={style.authNav}>
          {isAuthenticated ? (
            <>
              {hasRole(["ADMIN"]) && (
                <Link to="/admin" className={style.adminLink}>
                  Admin
                </Link>
              )}
              <span className={style.userEmail}>{user.email}</span>
              <button className={style.authBtn} onClick={handleLogout}>
                Abmelden
              </button>
            </>
          ) : (
            <Link to="/login" className={style.authBtn}>
              Anmelden
            </Link>
          )}
        </div>
      </header>
    </div>
  )
}

export default Header
