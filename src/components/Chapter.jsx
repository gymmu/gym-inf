import { useContext, useEffect } from "react";
import { NavContext } from "../context/NavContext";

export default function Chapter({ children, setFmsNav = false }) {
  const { setFms } = useContext(NavContext);
  useEffect(() => {
    setFms(setFmsNav);
  }, []);

  return <div className="outlet">{children}</div>;
}
