import style from "@components/Navbar.module.css";
import { useAppContext } from "../context/AppContext";
import ChapterIndex from "./ChapterIndex";

export default function Navbar() {
  const { menuVisible } = useAppContext();
  return (
    <aside className={`${style.sidenav} ${menuVisible ? style.show : ""}`}>
      <ChapterIndex />
    </aside>
  );
}
