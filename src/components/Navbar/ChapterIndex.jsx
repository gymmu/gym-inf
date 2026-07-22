import { NavContext } from "@context/NavContext";
import { useContext } from "react";
import style from "./ChapterIndex.module.css";
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
        <button
          className={!fms ? "active-school" : ""}
          onClick={activateGym}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              activateGym();
            }
          }}
          type="button"
        >
          Gym
        </button>
        <button
          className={fms ? "active-school" : ""}
          onClick={activateFMS}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              activateFMS();
            }
          }}
          type="button"
        >
          FMS
        </button>
      </div>
      {!fms ? <GymIndex /> : <FmsIndex />}
    </div>
  );
}

export default ChapterIndex;
