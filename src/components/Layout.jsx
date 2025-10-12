import { Outlet } from "react-router-dom"

import Header from "@components/Header"
import Footer from "@components/Footer"
import Navbar from "@components/Navbar"
import { NavProvider } from "@context/NavContext"

// Layout component can be extracted
export default function Layout() {
  return (
    <>
      <NavProvider>
        <Header />
        <Navbar />
        <main className="content-grid">
          <Outlet />
        </main>
      </NavProvider>
      <Footer />
    </>
  )
}
