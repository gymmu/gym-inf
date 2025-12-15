import style from "@components/Header.module.css";
import { useAppContext } from "@context/AppContext";
import HamburgerUrl from "@icons/hamburger.svg?url";
import { Link } from "react-router-dom";

function Header() {
  const { menuVisible, setMenuVisible } = useAppContext();
  const toggleSide = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={style.container}>
      <header>
        <img src={HamburgerUrl} alt="Haburger Menu Icon" onClick={toggleSide} />
        <h1>
          <Link to="/">Informatik Skript</Link>
        </h1>
      </header>
    </div>
  );
}

export default Header;
