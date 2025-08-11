import {
  RouterProvider,
} from "react-router-dom"
import { useState, useEffect } from "react"

// Import routes from external file
import {createRouter} from "./routes/all.jsx"

export default function App() {
  const [router, setRouter] = useState(null)
  // const [routeCount, setRouteCount] = useState(routeRegistry.length)


  // Initialize router
  useEffect(() => {
    setRouter(createRouter())
  }, [])

  // Check for route changes and recreate router if needed
  // useEffect(() => {
  //   const checkRoutes = () => {
  //     if (routeRegistry.length !== routeCount) {
  //       setRouteCount(routeRegistry.length)
  //       setRouter(createRouter())
  //     }
  //   }

  //   // Check every 100ms for new routes
  //   // TODO: Das muss dringend geändert werden!!!
  //   // Ich glaube im Moment ist es so drin, weil ich keine bessere Lösung
  //   // gefunden habe, und ohne dieses Stück Code, würden die neuen Routes nicht
  //   // geladen werden aus der Registry.
  //   const interval = setInterval(checkRoutes, 100)

  //   return () => clearInterval(interval)
  // }, [routeCount])

  if (!router) {
    return <div>Loading...</div>
  }

  return <RouterProvider router={router} />
}
