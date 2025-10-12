import { createBrowserRouter, Link } from "react-router-dom"

import Layout from "@components/Layout"

// Importiere Unterseiten fürs Gym
import Index from "@pages/index.mdx"
import Colors from "@pages/colors.mdx"
import Information from "@pages/information.mdx"
import Languages from "@pages/languages.mdx"
import Grammar from "@pages/grammar.mdx"

// Importiere Unterseiten fürs Gym Praktikum
import PInstall from "@pages/praktikum/installation.mdx"

// Importiere Unterseiten für die FMS
import FMSIndex from "@pages/fms/index.mdx"
import Obsidian from "@pages/obsidian.mdx"
import ObsidianMarkdown from "@pages/obsidian-md.mdx"
import Hardware from "@pages/fms/hardware.mdx"
import Binary from "@pages/fms/binary.mdx"
import Hex from "@pages/fms/hex.mdx"

// FMS Praktikum
import Excel from "@pages/fms/excel.mdx"
import ExcelSpielplan from "@pages/fms/excel-spielplan.mdx"

export const createRouter = () => {
  return createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          // Alle
          { path: "/", element: <Index /> },

          // Gym Theorie
          { path: "obsidian", element: <Obsidian /> },
          { path: "obsidian-md", element: <ObsidianMarkdown /> },
          { path: "colors", element: <Colors /> },
          { path: "information", element: <Information /> },
          { path: "sprachen", element: <Languages /> },
          { path: "grammar", element: <Grammar /> },

          // Gym Praktikum
          { path: "praktikum/install", element: <PInstall /> },

          // FMS Routes 1. Klasse
          { path: "fms-theorie", element: <FMSIndex /> },
          { path: "fms/hardware", element: <Hardware /> },
          { path: "fms/binary", element: <Binary /> },
          { path: "fms/hex", element: <Hex /> },

          // FMS Routes 2. Klasse
          { path: "fms/excel", element: <Excel /> },
          { path: "fms/excel-spielplan", element: <ExcelSpielplan /> },

          // Was passiert wenn die Route falsch ist.
          {
            path: "*", // Catch-all route for invalid paths
            // TODO: Beim Reload oder externen aufruf, muss die richtige seite
            // geladen werden. Im Moment wird die Startseite geladen
            // element: <Navigate to="/" replace />,
            element: (
              <div>
                Leider wurde hier keine Webseite gefunden. Gehe zurück zum{" "}
                <Link to="/">Start</Link>
              </div>
            ),
          },
        ],
      },
    ],
    {
      basename: "/gym-inf/",
    },
  )
}
