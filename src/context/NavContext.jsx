import { loadFms, saveFms } from "@utils/visitStorage";
import { createContext, useEffect, useState } from "react";

const NavContext = createContext({});

function useNavContext() {
  return createContext(NavContext);
}

function NavProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [fms, setFms] = useState(false);

  useEffect(() => {
    loadFms().then((saved) => {
      if (saved !== null) {
        setFms(saved);
      }
    });
  }, []);

  useEffect(() => {
    saveFms(fms);
  }, [fms]);

  return (
    <NavContext.Provider value={{ visible, setVisible, fms, setFms }}>
      {children}
    </NavContext.Provider>
  );
}

export { NavContext, NavProvider, useNavContext };
