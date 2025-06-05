import { useContext, useEffect } from 'react';
import { NavContext } from '../context/NavContext';
import { Link } from 'react-router-dom';
import {registerRoute} from "./../routes.jsx"
import SuspenseWrapper from "./SuspenseWrapper"

function NavLink({ to, site, children }) {
  const { setVisible } = useContext(NavContext);
  useEffect(() => {
    registerRoute(to, <SuspenseWrapper path={site} />);
    }, [])
  const hide = () => {
    setVisible(false);
  };

  return (
    <li>
      <Link onClick={hide} to={to}>
        {children}
      </Link>
    </li>
  );
}

export default NavLink;

