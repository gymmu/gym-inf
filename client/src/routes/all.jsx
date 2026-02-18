import { lazy } from "react"
import { createBrowserRouter, Link } from "react-router-dom"

// Critical components: Normal import (always needed)
import Layout from "@components/Layout"

// Auth pages: Lazy loading
const Login = lazy(() => import("@/auth/Login.jsx"))
const Register = lazy(() => import("@/auth/Register.jsx"))
const ForgotPassword = lazy(() => import("@/auth/ForgotPassword.jsx"))
const ResetPassword = lazy(() => import("@/auth/ResetPassword.jsx"))
const VerifyEmail = lazy(() => import("@/auth/VerifyEmail.jsx"))
const ProtectedDemo = lazy(() => import("@/pages/auth/ProtectedDemo.jsx"))

// Auth wrapper for protected routes
import ProtectedRoute from "@/auth/ProtectedRoute.jsx"

// All pages: Lazy loading
const Colors = lazy(() => import("@pages/colors.mdx"))
const GymCSS = lazy(() => import("@pages/css.mdx"))
const Binary = lazy(() => import("@pages/fms/binary.mdx"))
const Hardware = lazy(() => import("@pages/fms/hardware.mdx"))
const Hex = lazy(() => import("@pages/fms/hex.mdx"))
const FMSIndex = lazy(() => import("@pages/fms/index.mdx"))
const Pictures = lazy(() => import("@pages/fms/pictures.mdx"))
const FmsSVG = lazy(() => import("@pages/fms/svg.mdx"))
const FmsSVGAnimation = lazy(() => import("@pages/fms/svg-animation.mdx"))
const FmsSVGAufgaben = lazy(() => import("@pages/fms/svg-aufgaben.mdx"))
const FmsSVGLine = lazy(() => import("@pages/fms/svg-line.mdx"))
const FmsSVGPath = lazy(() => import("@pages/fms/svg-path.mdx"))
const FmsSVGPath02 = lazy(() => import("@pages/fms/svg-path-2.mdx"))
const FmsSVGTransformation = lazy(() => import("@pages/fms/svg-transform.mdx"))
const Grammar = lazy(() => import("@pages/grammar.mdx"))
const GymHTML = lazy(() => import("@pages/html.mdx"))
const Index = lazy(() => import("@pages/index.mdx"))
const Information = lazy(() => import("@pages/information.mdx"))
const GymJS = lazy(() => import("@pages/javascript.mdx"))
const Languages = lazy(() => import("@pages/languages.mdx"))
const Obsidian = lazy(() => import("@pages/obsidian.mdx"))
const ObsidianMarkdown = lazy(() => import("@pages/obsidian-md.mdx"))
const PInstall = lazy(() => import("@pages/praktikum/installation.mdx"))
const Regex = lazy(() => import("@pages/regex.mdx"))
const GymJSAufgaben = lazy(() => import("@pages-gym/js-aufgaben.jsx"))
const GymJSConditions = lazy(() => import("@pages-gym/js-bedingungen.jsx"))
const GymJSFunctions = lazy(() => import("@pages-gym/js-functions.jsx"))
const GymJSLists = lazy(() => import("@pages-gym/js-lists.jsx"))
const GymJSLoops = lazy(() => import("@pages-gym/js-loops.jsx"))
const GymJSLoopsFunctions = lazy(
  () => import("@pages-gym/js-loops-functions.jsx"),
)
const GymJSVariables = lazy(() => import("@pages-gym/js-variables.jsx"))
const Path = lazy(() => import("@components/Path.jsx"))
const Excel = lazy(() => import("@pages/fms/excel.mdx"))
const ExcelSpielplan = lazy(() => import("@pages/fms/excel-spielplan.mdx"))
const FmsHTML = lazy(() => import("@pages/fms/html.mdx"))
const FmsInternet = lazy(() => import("@pages/fms/internet.mdx"))
const FmsInternetQuiz = lazy(() => import("@pages/fms/internet-quiz.mdx"))
const FmsInternetStory = lazy(() => import("@pages/fms/internet-story.mdx"))
const FmsJavascript = lazy(() => import("@pages/fms/javascript.mdx"))
const FmsVerschluesselungQuiz = lazy(
  () => import("@pages/fms/verschluesselung-quiz.mdx"),
)
const FmsVPN = lazy(() => import("@pages/fms/vpn.mdx"))
const FmsVPNQuiz = lazy(() => import("@pages/fms/vpn-quiz.mdx"))
const FmsInternetKarte = lazy(() => import("@pages-fms/internet-karte.jsx"))
const FmsPasswoerter = lazy(() => import("@pages-fms/passwoerter.jsx"))
const Schluesselaustausch = lazy(
  () => import("@pages-fms/schluesselaustausch.jsx"),
)
const FmsVerschluesselung = lazy(
  () => import("@pages-fms/verschluesselung.jsx"),
)
const FmsWebdesign = lazy(() => import("@pages-fms/webdesign.jsx"))
const BoxModel = lazy(() => import("../components/BoxModel"))
const CodePen = lazy(() => import("../components/CodePen"))
const CodePenSVG = lazy(() => import("../components/CodePenSVG"))
const RegexEditor = lazy(() => import("../components/RegexEditor"))

// Admin pages
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard.jsx"))

// Route configuration as plain objects (SSG-compatible)
export const routes = [
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
      { path: "js-variables", element: <GymJSVariables /> },
      { path: "js-bedingungen", element: <GymJSConditions /> },
      { path: "js-functions", element: <GymJSFunctions /> },
      { path: "js-lists", element: <GymJSLists /> },
      { path: "js-loops", element: <GymJSLoops /> },
      { path: "js-loops-functions", element: <GymJSLoopsFunctions /> },
      { path: "js-aufgaben", element: <GymJSAufgaben /> },

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
      { path: "/fms/internet-karte", element: <FmsInternetKarte /> },
      { path: "/fms/internet-story", element: <FmsInternetStory /> },
      { path: "/fms/internet-quiz", element: <FmsInternetQuiz /> },
      { path: "/fms/vpn", element: <FmsVPN /> },
      { path: "/fms/vpn-quiz", element: <FmsVPNQuiz /> },
      { path: "/fms/verschluesselung", element: <FmsVerschluesselung /> },
      { path: "/fms/passwoerter", element: <FmsPasswoerter /> },
      {
        path: "/fms/schluesselaustausch",
        element: <Schluesselaustausch />,
      },
      {
        path: "/fms/verschluesselung-quiz",
        element: <FmsVerschluesselungQuiz />,
      },

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

      // Auth routes
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password/:token", element: <ResetPassword /> },
      { path: "verify-email/:token", element: <VerifyEmail /> },

      // AuthWrapper Demo (public - shows wrapped content)
      { path: "auth-demo", element: <ProtectedDemo /> },

      // Protected route example (redirects to login if not authenticated)
      {
        path: "protected",
        element: (
          <ProtectedRoute>
            <ProtectedDemo />
          </ProtectedRoute>
        ),
      },

      // Admin routes (protected)
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },

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
]

// Extract all route paths for SSG (excluding catch-all)
export const getAllRoutePaths = () => {
  const paths = []

  routes.forEach((route) => {
    if (route.children) {
      route.children.forEach((child) => {
        // Skip catch-all route and test routes
        if (
          child.path &&
          child.path !== "*" &&
          !child.path.includes("codepen") &&
          !child.path.includes("regexeditor") &&
          !child.path.includes("boxmodel") &&
          !child.path.includes("path-editor") &&
          !child.path.includes("login") &&
          !child.path.includes("register") &&
          !child.path.includes("forgot-password") &&
          !child.path.includes("reset-password") &&
          !child.path.includes("verify-email") &&
          !child.path.includes("auth-demo") &&
          !child.path.includes("protected")
        ) {
          // Normalize paths (remove leading slash for consistency)
          const normalizedPath = child.path.startsWith("/")
            ? child.path.slice(1)
            : child.path
          paths.push(normalizedPath === "/" ? "/" : `/${normalizedPath}`)
        }
      })
    }
  })

  return paths
}

// Create browser router (existing functionality)
export const createRouter = () => {
  const basename = import.meta.env.VITE_BASE_PATH || "/gym-inf/"
  return createBrowserRouter(routes, {
    basename,
  })
}
