import SuspenseWrapper from "./components/SuspenseWrapper"

// Route registry to store all routes
const routeRegistry = []

// Function to register a route
function registerRoute(path, element) {
  routeRegistry.push({ path, element })
}

// Register routes
registerRoute("/", <SuspenseWrapper filename="./sites/md/index.mdx" />)

export { routeRegistry, registerRoute }
