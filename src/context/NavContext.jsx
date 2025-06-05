import React, { useState, createContext } from 'react';

const NavContext = createContext({});

function NavProvider({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <NavContext.Provider value={{ visible, setVisible }}>
      {children}
    </NavContext.Provider>
  );
}

export { NavContext, NavProvider };

