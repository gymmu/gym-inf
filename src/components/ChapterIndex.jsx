import NavLink from "./NavLink"
import ICode from "./ICode"
import { useContext } from "react"
import { NavContext } from "../context/NavContext"

function ChapterIndex() {

  const {fms, setFms} = useContext(NavContext)

  const activateGym = () => {
    setFms(false)
  }
  const activateFMS = () => {
    setFms(true)
  }

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}>
        <h2 style={{cursor: "pointer"}} className={!fms ? "active-school" : "" } onClick={activateGym}>Gym</h2>
        <h2 style={{cursor: "pointer"}} className={fms ? "active-school" : "" } onClick={activateFMS} >FMS</h2>
      </div>
      { !fms ? <GymIndex />  : <FmsIndex />}
    </>
  )
}

function FmsIndex() {
  return (
    <>
      <div>
        <h2>1. Klasse</h2>
      <ol className="nav">
        <li>Obsidian
          <ol>
            <NavLink to="obsidian">
              Einführung
            </NavLink>
          </ol>
        </li>
      </ol>
      </div>
    </>
  )
}

function GymIndex() {
  return (
    <>
      <ol className="nav">
        <li>
          Obsidian
          <ol>
            <NavLink to="obsidian">
              Obsidian
            </NavLink>
            <NavLink to="obsidian-md">
              Markdown in Obsidian
            </NavLink>
          </ol>
        </li>
      </ol>
    </>
  )
}

export default ChapterIndex
