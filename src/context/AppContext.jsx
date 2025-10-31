import { useState, createContext, useContext } from "react"

const AppContext = createContext({})

function useAppContext() {
  return useContext(AppContext)
}

function AppProvider({ children }) {
  const [fullscreen, setFullscreen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <AppContext.Provider
      value={{ fullscreen, setFullscreen, menuVisible, setMenuVisible }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider, useAppContext }
