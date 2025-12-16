import { useAppContext } from "@context/AppContext";
import ChapterIndex from "./ChapterIndex";
import style from "./Navbar.module.css";

export default function Navbar() {
  const { menuVisible } = useAppContext();
  return (
    <aside className={`${style.sidenav} ${menuVisible ? style.show : ""}`}>
      <ChapterIndex />
    </aside>
  );
}
