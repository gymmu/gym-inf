import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import ChapterIndex from "./ChapterIndex";

export default function Navbar() {
  const { visible } = useContext(NavContext);
  return (
    <aside className={visible ? "show sidenav" : "sidenav"}>
      <ChapterIndex />
    </aside>
  );
}

