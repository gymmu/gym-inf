import { useContext } from 'react';
import { NavContext } from '../context/NavContext';
import { Link } from 'react-router-dom';

function NavLink({ to, children }) {
  const { setVisible } = useContext(NavContext);
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

