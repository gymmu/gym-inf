import { useContext } from 'react';
import { NavContext } from '../context/NavContext';
import { ReactSVG } from 'react-svg';

function Header() {
  const { setVisible } = useContext(NavContext);
  const toggleSide = () => {
    setVisible((toggle) => !toggle);
  };

  return (
    <header onClick={toggleSide}>
      <span className="icon">
        <ReactSVG src="./icons/hamburger.svg" />
      </span>
      <h1>Gym Informatik</h1>
    </header>
  );
}

export default Header;

