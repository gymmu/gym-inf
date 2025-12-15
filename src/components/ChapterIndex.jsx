import style from "@components/ChapterIndex.module.css";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import FmsIndex from "./FmsIndex";
import GymIndex from "./GymIndex";

function ChapterIndex() {
  const { fms, setFms } = useContext(NavContext);

  const activateGym = () => {
    setFms(false);
  };
  const activateFMS = () => {
    setFms(true);
  };

  return (
    <div className={style.container}>
      <div className={style.selectSchool}>
        <h2 className={!fms ? "active-school" : ""} onClick={activateGym}>
          Gym
        </h2>
        <h2 className={fms ? "active-school" : ""} onClick={activateFMS}>
          FMS
        </h2>
      </div>
      {!fms ? <GymIndex /> : <FmsIndex />}
    </div>
  );
}

export default ChapterIndex;
