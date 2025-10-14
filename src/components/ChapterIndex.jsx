import NavLink from "./NavLink"
import { useContext } from "react"
import { NavContext } from "../context/NavContext"

import FmsIndex from "./FmsIndex"
import GymIndex from "./GymIndex"

function ChapterIndex() {
  const { fms, setFms } = useContext(NavContext)

  const activateGym = () => {
    setFms(false)
  }
  const activateFMS = () => {
    setFms(true)
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}>
        <h2
          style={{ cursor: "pointer" }}
          className={!fms ? "active-school" : ""}
          onClick={activateGym}>
          Gym
        </h2>
        <h2
          style={{ cursor: "pointer" }}
          className={fms ? "active-school" : ""}
          onClick={activateFMS}>
          FMS
        </h2>
      </div>
      {!fms ? <GymIndex /> : <FmsIndex />}
    </>
  )
}

export default ChapterIndex
