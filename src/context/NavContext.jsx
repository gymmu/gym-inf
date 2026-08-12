import { loadFms, loadSection, saveFms, saveSection } from "@utils/visitStorage";
import { createContext, useEffect, useState } from "react";

const NavContext = createContext({});

function useNavContext() {
  return createContext(NavContext);
}

function NavProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [section, setSection] = useState("gym");

  useEffect(() => {
    loadSection().then((saved) => {
      if (saved !== null) {
        setSection(saved);
      }
    });
  }, []);

  useEffect(() => {
    saveSection(section);
  }, [section]);

  return (
    <NavContext.Provider
      value={{ visible, setVisible, section, setSection }}
    >
      {children}
    </NavContext.Provider>
  );
}

export { NavContext, NavProvider, useNavContext };
