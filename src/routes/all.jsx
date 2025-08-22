import { createBrowserRouter, Link } from "react-router-dom"

import Layout from "@components/Layout"

// Importiere Unterseiten fürs Gym
import Index from "@pages/index.mdx"

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


// Register routes
// registerRoute("/", <Index />);
// registerRoute("install", <Installation />);
// registerRoute("html", <SuspenseWrapper filepath="html.mdx" />);
// registerRoute("html-elements", <SuspenseWrapper filepath="html-elements.mdx" />);
// registerRoute("html-attributes", <SuspenseWrapper filepath="html-attributes.mdx" />);
// registerRoute("svg", <SuspenseWrapper filepath="svg.mdx" />);
// registerRoute("svg-elements", <SuspenseWrapper filepath="svg-elements.mdx" />);
// registerRoute("svg-clipping", <SuspenseWrapper filepath="svg-clipping.mdx" />);
// registerRoute("svg-animation", <SuspenseWrapper filepath="svg-animation.mdx" />);
// registerRoute("css", <SuspenseWrapper filepath="css.mdx" />);
// registerRoute("css-selectors", <SuspenseWrapper filepath="css-selectors.mdx" />);
// registerRoute("css-box-model", <SuspenseWrapper filepath="css-box-model.mdx" />);
// registerRoute("css-animations", <SuspenseWrapper filepath="css-animationen.mdx" />);
// registerRoute("tipp-images", <SuspenseWrapper filepath="css-img.mdx" />);
// registerRoute("tipp-flexbox", <SuspenseWrapper filepath="css-layout.mdx" />);
// registerRoute("img-background", <SuspenseWrapper filepath="css-img-background.mdx" />);
// registerRoute("img-next-to-text", <SuspenseWrapper filepath="css-img-next-to-text.mdx" />);
// registerRoute("git", <SuspenseWrapper filepath="git.mdx" />);
// registerRoute("git-branches", <SuspenseWrapper filepath="git-branches.mdx" />);
// registerRoute("git-merges", <SuspenseWrapper filepath="git-merges.mdx" />);
// registerRoute("git-merge-conflicts", <SuspenseWrapper filepath="git-merge-conflicts.mdx" />);
// registerRoute("javascript", <SuspenseWrapper filepath="javascript.mdx" />);
// registerRoute("javascript-change-page", <SuspenseWrapper filepath="javascript-change-page.mdx" />);
// registerRoute("javascript-blocks", <SuspenseWrapper filepath="javascript-blocks.mdx" />);
// registerRoute("javascript-declarative", <SuspenseWrapper filepath="javascript-declarative.mdx" />);
// registerRoute("javascript-if", <SuspenseWrapper filepath="javascript-if.mdx" />);
// registerRoute("javascript-for", <SuspenseWrapper filepath="javascript-for.mdx" />);
// registerRoute("javascript-return", <SuspenseWrapper filepath="javascript-return.mdx" />);
// registerRoute("javascript-lists", <SuspenseWrapper filepath="javascript-lists.mdx" />);
// registerRoute("javascript-ascii", <SuspenseWrapper filepath="javascript-ascii.mdx" />);
// registerRoute("javascript-switches", <SuspenseWrapper filepath="javascript-switches.mdx" />);
// registerRoute("javascript-text-to-numbers", <SuspenseWrapper filepath="javascript-text-to-numbers.mdx" />);
// registerRoute("javascript-variables", <SuspenseWrapper filepath="javascript-variables.mdx" />);
// registerRoute("ai-intro", <SuspenseWrapper filepath="ai-intro.mdx" />);
// registerRoute("ai-pong", <SuspenseWrapper filepath="ai-pong.mdx" />);
// registerRoute("data", <SuspenseWrapper filepath="data.mdx" />);
// registerRoute("data-objects", <SuspenseWrapper filepath="data-objects.mdx" />);
// registerRoute("data-complex", <SuspenseWrapper filepath="data-complex.mdx" />);
// registerRoute("data-classes", <SuspenseWrapper filepath="data-classes.mdx" />);
// registerRoute("data-objects-as-data", <SuspenseWrapper filepath="data-objects-as-data.mdx" />);
// registerRoute("data-binary", <SuspenseWrapper filepath="data-binary.mdx" />);
// registerRoute("data-hex", <SuspenseWrapper filepath="data-hex.mdx" />);
// registerRoute("network", <SuspenseWrapper filepath="network.mdx" />);
// registerRoute("game", <SuspenseWrapper filepath="game.mdx" />);
// registerRoute("game-animations", <SuspenseWrapper filepath="game-player-and-animations.mdx" />);
// registerRoute("game-interactions", <SuspenseWrapper filepath="game-interactions.mdx" />);
// registerRoute("security-passwords", <SuspenseWrapper filepath="security-passwords.mdx" />);
// registerRoute("security-encryption", <SuspenseWrapper filepath="security-encryption.mdx" />);
// registerRoute("network-intro", <SuspenseWrapper filepath="network-intro.mdx" />);

// registerRoute("fms-theorie", <FMSIndex />);
// registerRoute("fms/ikt", <FMSIkt />);
// registerRoute("fms/ikt", <SuspenseWrapper filepath="fms/ikt.mdx" fms={true} />);


export const createRouter = () => {
    return createBrowserRouter(
        [
            {
                path: "/",
                element: <Layout />,
                children: [
                    // Alle
                    {path: "/", element: <Index />},

                    // Gym Theorie
                    {path: "obsidian", element: <Obsidian />},
                    {path: "obsidian-md", element: <ObsidianMarkdown />},

                    // Gym Praktikum
                    {path: "praktikum/install", element: <PInstall />},
                    
                    // FMS Routes 1. Klasse
                    {path: "fms-theorie", element: <FMSIndex /> },
                    {path: "fms/hardware", element: <Hardware /> },
                    {path: "fms/binary", element: <Binary /> },
                    {path: "fms/hex", element: <Hex /> },

                    // FMS Routes 2. Klasse
                    {path: "fms/excel", element: <Excel /> },

                    // Was passiert wenn die Route falsch ist.
                    {
                        path: "*", // Catch-all route for invalid paths
                        // TODO: Beim Reload oder externen aufruf, muss die richtige seite
                        // geladen werden. Im Moment wird die Startseite geladen
                        // element: <Navigate to="/" replace />,
                        element: <div>
                            Leider wurde hier keine Webseite gefunden. Gehe zurück zum <Link to="/">Start</Link>
                        </div>
                    },
                ],
            },
        ],
        {
            basename: "/gym-inf/",
        },
    )
}

