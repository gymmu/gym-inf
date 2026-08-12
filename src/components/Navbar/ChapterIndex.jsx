import { NavContext } from "@context/NavContext";
import { useContext } from "react";
import style from "./ChapterIndex.module.css";
import EfIndex from "./EfIndex";
import FmsIndex from "./FmsIndex";
import GymIndex from "./GymIndex";

function ChapterIndex() {
  const { section, setSection } = useContext(NavContext);

  const activateGym = () => {
    setSection("gym");
  };
  const activateFMS = () => {
    setSection("fms");
  };
  const activateEF = () => {
    setSection("ef");
  };

  return (
    <div className={style.container}>
      <div className={style.selectSchool}>
        <button
          className={section === "gym" ? "active-school" : ""}
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
          className={section === "fms" ? "active-school" : ""}
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
        <button
          className={section === "ef" ? "active-school" : ""}
          onClick={activateEF}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              activateEF();
            }
          }}
          type="button"
        >
          EF
        </button>
      </div>
      {section === "gym" && <GymIndex />}
      {section === "fms" && <FmsIndex />}
      {section === "ef" && <EfIndex />}
    </div>
  );
}

export default ChapterIndex;
