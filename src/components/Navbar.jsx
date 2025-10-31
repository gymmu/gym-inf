import { useAppContext } from "../context/AppContext"
import ChapterIndex from "./ChapterIndex"

import style from "@components/Navbar.module.css"

export default function Navbar() {
  const { menuVisible } = useAppContext()
  return (
    <aside
      className={
        menuVisible ? `${style.show} ${style.sidenav}` : style.sidenav
      }>
      <ChapterIndex />
    </aside>
  )
}
