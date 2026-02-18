import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes/all.jsx";
import "./index.css";

export const createRoot = ViteReactSSG({
  routes,
  basename: "/gym-inf/",
});
