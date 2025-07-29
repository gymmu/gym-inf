import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom"
import { useState, useEffect } from "react"
import { NavProvider } from "./context/NavContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

// Import routes from external file
import routeRegistry from "./routes/all.jsx"

export default function App() {
  const [router, setRouter] = useState(null)
  const [routeCount, setRouteCount] = useState(routeRegistry.length)

  // Function to create/recreate the router
  const createRouter = () => {
    return createBrowserRouter(
      [
        {
          path: "/",
          element: <Layout />,
          children: [
            ...routeRegistry, // Create a new array to ensure fresh reference
            {
              path: "*", // Catch-all route for invalid paths
              // TODO: Beim Reload oder externen aufruf, muss die richtige seite
              // geladen werden. Im Moment wird die Startseite geladen
              // element: <Navigate to="/" replace />,
              element: <div>Cannot show route...</div>
            },
          ],
        },
      ],
      {
        basename: "/gym-inf",
      },
    )
  }

  // Initialize router
  useEffect(() => {
    setRouter(createRouter())
  }, [])

  // Check for route changes and recreate router if needed
  useEffect(() => {
    const checkRoutes = () => {
      if (routeRegistry.length !== routeCount) {
        setRouteCount(routeRegistry.length)
        setRouter(createRouter())
      }
    }

    // Check every 100ms for new routes
    // TODO: Das muss dringend geändert werden!!!
    // Ich glaube im Moment ist es so drin, weil ich keine bessere Lösung
    // gefunden habe, und ohne dieses Stück Code, würden die neuen Routes nicht
    // geladen werden aus der Registry.
    const interval = setInterval(checkRoutes, 100)

    return () => clearInterval(interval)
  }, [routeCount])

  if (!router) {
    return <div>Loading...</div>
  }

  return <RouterProvider router={router} />
}

// Layout component can be extracted
function Layout() {
  return (
    <>
      <NavProvider>
        <Header />
        <Navbar />
        <main>
          <Outlet />
        </main>
      </NavProvider>
      <Footer />
    </>
  )
}
