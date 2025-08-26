import NavLink from "./NavLink"
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
            <NavLink to="obsidian-md">
              Markdown in Obsidian
            </NavLink>
            </ol>
          </li>
          <li>Einführung
            <ol>
              <NavLink to="fms/hardware">
                Computer Hardware
              </NavLink>
              <NavLink to="fms/binary">Binärsystem</NavLink>
              <NavLink to="fms/Hex">Hexadezimalsystem</NavLink>
            </ol>
          </li>
        </ol>
        <h2>2. Klasse</h2>
        <ol className="nav">
          <li>Tabellenkalkulation
            <ol>
              <NavLink to="fms/excel">
                Einstieg in Excel
              </NavLink>
              <NavLink to="fms/excel-spielplan">
                Zusammenarbeit in Excel
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
      <div>

        <h2>Theorie</h2>
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
          <li>Einführung
            <ol>
              <NavLink to="fms/hardware">
                Computer Hardware
              </NavLink>
              <NavLink to="fms/binary">Binärsystem</NavLink>
              <NavLink to="fms/Hex">Hexadezimalsystem</NavLink>
              <NavLink to="colors">Farben</NavLink>
            </ol>
          </li>
        </ol>

        <h2>Praktikum</h2>
        <ol className="nav">
          <li>
            <ol>
              <NavLink to="praktikum/install">
                Installation
              </NavLink>
            </ol>
          </li>
        </ol>

      </div>
    </>
  )
}

export default ChapterIndex
