// import SuspenseWrapper from "./components/SuspenseWrapper"
// import Index from "@pages/index.mdx"

// Route registry to store all routes
const routeRegistry = []

// Function to register a route
function registerRoute(path, element) {
  routeRegistry.push({ path, element })
}

// Register routes
registerRoute("/", <div>Just stupid shit.... </div>)

export { routeRegistry, registerRoute }
