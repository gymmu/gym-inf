import { ViteReactSSG } from "vite-react-ssg"
import { routes } from "./routes/all.jsx"
import "./index.css"

const basename = import.meta.env.VITE_BASE_PATH || "/gym-inf/"

export const createRoot = ViteReactSSG({
  routes,
  basename,
})
