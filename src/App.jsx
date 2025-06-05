import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { NavProvider } from "./context/NavContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

// Import routes from external file
import { routeRegistry } from './routes';


export default function App() {
    // Create the router using the registry
    // Fügen Sie die Routen hier ein
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <Layout />,  
                children: routeRegistry,
            },
        ],
        {
            basename: "/gym-inf",
        },
    );
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

import NavLink from "./components/NavLink";

// NavLink component can be extracted

