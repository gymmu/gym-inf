import ChapterRating from "@components/ChapterRating/ChapterRating";
import Footer from "@components/Footer";
import Header from "@components/Header";
import style from "@components/Layout.module.css";
import Navbar from "@components/Navbar";
import NotePanel from "@components/NotePanel";
import QuickNoteFab from "@components/QuickNoteFab";
import SkeletonScreen from "@components/SkeletonScreen";
import { AppProvider, useAppContext } from "@context/AppContext";
import { NavProvider } from "@context/NavContext";
import { NoteProvider, useNotes } from "@context/NoteContext";
import { ProgressProvider } from "@context/ProgressContext";
import { useVisitHistory, VisitProvider } from "@context/VisitContext";
import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function LayoutContent() {
  const [classes, setClasses] = useState("");
  const { fullscreen, setFullscreen, menuVisible } = useAppContext();
  const { hasCurrentNote } = useNotes();

  useEffect(() => {
    function handleKeyDown(ev) {
      const { key } = ev;
      if (key === "Escape") {
        setFullscreen(false);
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [setFullscreen]);

  useEffect(() => {
    console.log(menuVisible);
    setClasses(
      [fullscreen ? style.fullScreen : "", menuVisible ? style.show : ""].join(
        " ",
      ),
    );
  }, [menuVisible, fullscreen]);

  return (
    <div id={style.app} className={classes}>
      <Header />
      <Navbar />
      <main className="content-grid">
        <Suspense fallback={<SkeletonScreen />}>
          <Outlet />
        </Suspense>
        <ChapterRating />
      </main>
      <Footer />
      {hasCurrentNote && <NotePanel />}
      <QuickNoteFab />
    </div>
  );
}

function LayoutWithVisit() {
  const { initialized } = useVisitHistory();

  if (!initialized) {
    return (
      <div id="app" className="fullScreen show">
        <Header />
        <Navbar />
        <main className="content-grid">
          <SkeletonScreen />
        </main>
        <Footer />
      </div>
    );
  }

  return <LayoutContent />;
}

export default function Layout() {
  return (
    <AppProvider>
      <NavProvider>
        <VisitProvider>
          <ProgressProvider>
            <NoteProvider>
              <LayoutWithVisit />
            </NoteProvider>
          </ProgressProvider>
        </VisitProvider>
      </NavProvider>
    </AppProvider>
  );
}
