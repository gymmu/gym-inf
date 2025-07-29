import { useEffect, useContext } from "react"
import Prism from "./prism"
import "./prism.css"
import { NavContext } from "../context/NavContext"

export default function Chapter({ children, hash, setFmsNav = false }) {
    const {setFms} = useContext(NavContext)
  useEffect(() => {

    if (setFmsNav) {
            setFms(true)
        }

    Prism.highlightAll()
  }, [])

  return <div className="outlet">{children}</div>
}
