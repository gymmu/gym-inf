import { useContext } from 'react';
import { NavContext } from '../context/NavContext';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

function Header() {
  const { setVisible } = useContext(NavContext);
  const toggleSide = () => {
    setVisible((toggle) => !toggle);
  };

  return (
    <header>
      <span className="icon" onClick={toggleSide}>
        <ReactSVG src="./icons/hamburger.svg" />
      </span>
      <h1><Link to="/">Informatik Skript</Link></h1>
    </header>
  );
}

export default Header;

