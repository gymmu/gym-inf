import { RouterProvider } from "react-router-dom"

// Import routes from external file
import { createRouter } from "./routes/all.jsx"
import { AppProvider } from "./context/AppContext.jsx"
import { NavProvider } from "./context/NavContext.jsx"

export default function App() {
  const router = createRouter()

  // This should never trigger, since the router is not set as a State.
  if (!router) {
    return <div>Loading...</div>
  }

  return (
    <AppProvider>
      <NavProvider>
        <RouterProvider router={router} />
      </NavProvider>
    </AppProvider>
  )
}
