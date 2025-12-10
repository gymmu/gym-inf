import { useAppContext } from "@context/AppContext";
import HamburgerUrl from "@icons/hamburger.svg?url";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

function Header() {
  const { menuVisible, setMenuVisible } = useAppContext();
  const toggleSide = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <img src={HamburgerUrl} alt="Haburger Menu Icon" onClick={toggleSide} />
      <h1>
        <Link to="/">Informatik Skript</Link>
      </h1>
    </header>
  );
}

export default Header;
