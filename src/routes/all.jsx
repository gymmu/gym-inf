import Layout from "@components/Layout";
import Colors from "@pages/colors.mdx";
import GymCSS from "@pages/css.mdx";
import Binary from "@pages/fms/binary.mdx";
import Hardware from "@pages/fms/hardware.mdx";
import Hex from "@pages/fms/hex.mdx";
// Importiere Unterseiten für die FMS
import FMSIndex from "@pages/fms/index.mdx";
import Pictures from "@pages/fms/pictures.mdx";
import FmsSVG from "@pages/fms/svg.mdx";
import FmsSVGAnimation from "@pages/fms/svg-animation.mdx";
import FmsSVGAufgaben from "@pages/fms/svg-aufgaben.mdx";
import FmsSVGLine from "@pages/fms/svg-line.mdx";
import FmsSVGPath from "@pages/fms/svg-path.mdx";
import FmsSVGPath02 from "@pages/fms/svg-path-2.mdx";
import FmsSVGTransformation from "@pages/fms/svg-transform.mdx";
import Grammar from "@pages/grammar.mdx";
import GymHTML from "@pages/html.mdx";
// Importiere Unterseiten fürs Gym
import Index from "@pages/index.mdx";
import Information from "@pages/information.mdx";
import GymJS from "@pages/javascript.mdx";
import Languages from "@pages/languages.mdx";
import Obsidian from "@pages/obsidian.mdx";
import ObsidianMarkdown from "@pages/obsidian-md.mdx";
// Importiere Unterseiten fürs Gym Praktikum
import PInstall from "@pages/praktikum/installation.mdx";
import Regex from "@pages/regex.mdx";
import { createBrowserRouter, Link } from "react-router-dom";

// import FmsSVGUse from "@pages/fms/svg-use.mdx"

import Path from "@components/Path.jsx";
// FMS Praktikum
import Excel from "@pages/fms/excel.mdx";
import ExcelSpielplan from "@pages/fms/excel-spielplan.mdx";
import FmsHTML from "@pages/fms/html.mdx";
import FmsInternet from "@pages/fms/internet.mdx";
import FmsInternetQuiz from "@pages/fms/internet-quiz.mdx";
import FmsVPN from "@pages/fms/vpn.mdx";
import FmsVPNQuiz from "@pages/fms/vpn-quiz.mdx";
import FmsJavascript from "@pages/fms/javascript.mdx";
import FmsWebdesign from "@pages/fms/webdesign.mdx";
import BoxModel from "../components/BoxModel";
// Weitere eigenständige imports. Diese sind nicht verlinkt.
import CodePen from "../components/CodePen";
import CodePenSVG from "../components/CodePenSVG";
import RegexEditor from "../components/RegexEditor";

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
          { path: "regex", element: <Regex /> },
          { path: "html", element: <GymHTML /> },
          { path: "css", element: <GymCSS /> },
          { path: "javascript", element: <GymJS /> },

          // Gym Praktikum
          { path: "praktikum/install", element: <PInstall /> },

          // FMS Routes 1. Klasse
          { path: "fms-theorie", element: <FMSIndex /> },
          { path: "fms/hardware", element: <Hardware /> },
          { path: "fms/binary", element: <Binary /> },
          { path: "fms/hex", element: <Hex /> },
          // FMS: Bilder und SVG
          { path: "pictures", element: <Pictures /> },
          { path: "/fms/svg", element: <FmsSVG /> },
          { path: "/fms/svg-line", element: <FmsSVGLine /> },
          { path: "/fms/svg-path", element: <FmsSVGPath /> },
          { path: "/fms/svg-aufgaben", element: <FmsSVGAufgaben /> },
          { path: "/fms/svg-path-2", element: <FmsSVGPath02 /> },
          {
            path: "/fms/svg-transformation",
            element: <FmsSVGTransformation />,
          },
          {
            path: "/fms/svg-animation",
            element: <FmsSVGAnimation />,
          },
          // Internet und Sicherheit
          { path: "/fms/internet", element: <FmsInternet /> },
          { path: "/fms/internet-quiz", element: <FmsInternetQuiz /> },
          { path: "/fms/vpn", element: <FmsVPN /> },
          { path: "/fms/vpn-quiz", element: <FmsVPNQuiz /> },

          // FMS Routes 2. Klasse
          { path: "fms/excel", element: <Excel /> },
          {
            path: "fms/excel-spielplan",
            element: <ExcelSpielplan />,
          },

          { path: "fms/html", element: <FmsHTML /> },
          { path: "fms/webdesign", element: <FmsWebdesign /> },
          { path: "fms/javascript", element: <FmsJavascript /> },

          // TODO: Comment these out if no longer tested
          { path: "codepen", element: <CodePen /> },
          { path: "codepensvg", element: <CodePenSVG /> },
          { path: "regexeditor", element: <RegexEditor /> },
          { path: "boxmodel", element: <BoxModel /> },

          { path: "path-editor", element: <Path /> },

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
  );
};
