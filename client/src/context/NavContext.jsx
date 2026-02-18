import { useState, createContext } from "react"

const NavContext = createContext({})

function useNavContext() {
  return createContext(NavContext)
}

function NavProvider({ children }) {
  const [visible, setVisible] = useState(false)
  const [fms, setFms] = useState(false)

  return (
    <NavContext.Provider value={{ visible, setVisible, fms, setFms }}>
      {children}
    </NavContext.Provider>
  )
}

export { NavContext, NavProvider, useNavContext }
