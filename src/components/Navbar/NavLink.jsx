import { NavContext } from "@context/NavContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { registerRoute } from "@/routes.jsx";

function NavLink({ to, elem, children }) {
  const { setVisible } = useContext(NavContext);
  useEffect(() => {
    registerRoute(to, elem);
  }, []);
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
