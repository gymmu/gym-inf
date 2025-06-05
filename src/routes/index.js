// Route registry to store all routes
const routeRegistry = [];

// Function to register a route
export function registerRoute(path, element) {
  routeRegistry.push({ path, element });
}

// Register routes
registerRoute("/", <SuspenseWrapper path="./sites/md/index.mdx" />);
registerRoute("install", <SuspenseWrapper path="./sites/md/installation.mdx" />);
registerRoute("html", <SuspenseWrapper path="./sites/md/html.mdx" />);
registerRoute("html-elements", <SuspenseWrapper path="./sites/md/html-elements.mdx" />);
registerRoute("html-attributes", <SuspenseWrapper path="./sites/md/html-attributes.mdx" />);
registerRoute("svg", <SuspenseWrapper path="./sites/md/svg.mdx" />);
registerRoute("svg-elements", <SuspenseWrapper path="./sites/md/svg-elements.mdx" />);
registerRoute("svg-clipping", <SuspenseWrapper path="./sites/md/svg-clipping.mdx" />);
registerRoute("svg-animation", <SuspenseWrapper path="./sites/md/svg-animation.mdx" />);
registerRoute("css", <SuspenseWrapper path="./sites/md/css.mdx" />);
registerRoute("css-selectors", <SuspenseWrapper path="./sites/md/css-selectors.mdx" />);
registerRoute("css-box-model", <SuspenseWrapper path="./sites/md/css-box-model.mdx" />);
registerRoute("css-animations", <SuspenseWrapper path="./sites/md/css-animationen.mdx" />);
registerRoute("tipp-images", <SuspenseWrapper path="./sites/md/css-img.mdx" />);
registerRoute("tipp-flexbox", <SuspenseWrapper path="./sites/md/css-layout.mdx" />);
registerRoute("img-background", <SuspenseWrapper path="./sites/md/css-img-background.mdx" />);
registerRoute("img-next-to-text", <SuspenseWrapper path="./sites/md/css-img-next-to-text.mdx" />);
registerRoute("git", <SuspenseWrapper path="./sites/md/git.mdx" />);
registerRoute("git-branches", <SuspenseWrapper path="./sites/md/git-branches.mdx" />);
registerRoute("git-merges", <SuspenseWrapper path="./sites/md/git-merges.mdx" />);
registerRoute("git-merge-conflicts", <SuspenseWrapper path="./sites/md/git-merge-conflicts.mdx" />);
registerRoute("javascript", <SuspenseWrapper path="./sites/md/javascript.mdx" />);
registerRoute("javascript-change-page", <SuspenseWrapper path="./sites/md/javascript-change-page.mdx" />);
registerRoute("javascript-blocks", <SuspenseWrapper path="./sites/md/javascript-blocks.mdx" />);
registerRoute("javascript-declarative", <SuspenseWrapper path="./sites/md/javascript-declarative.mdx" />);
registerRoute("javascript-if", <SuspenseWrapper path="./sites/md/javascript-if.mdx" />);
registerRoute("javascript-for", <SuspenseWrapper path="./sites/md/javascript-for.mdx" />);
registerRoute("javascript-return", <SuspenseWrapper path="./sites/md/javascript-return.mdx" />);
registerRoute("javascript-lists", <SuspenseWrapper path="./sites/md/javascript-lists.mdx" />);
registerRoute("javascript-ascii", <SuspenseWrapper path="./sites/md/javascript-ascii.mdx" />);
registerRoute("javascript-switches", <SuspenseWrapper path="./sites/md/javascript-switches.mdx" />);
registerRoute("javascript-text-to-numbers", <SuspenseWrapper path="./sites/md/javascript-text-to-numbers.mdx" />);
registerRoute("javascript-variables", <SuspenseWrapper path="./sites/md/javascript-variables.mdx" />);
registerRoute("ai-intro", <SuspenseWrapper path="./sites/md/ai-intro.mdx" />);
registerRoute("ai-pong", <SuspenseWrapper path="./sites/md/ai-pong.mdx" />);
registerRoute("data", <SuspenseWrapper path="./sites/md/data.mdx" />);
registerRoute("data-objects", <SuspenseWrapper path="./sites/md/data-objects.mdx" />);
registerRoute("data-complex", <SuspenseWrapper path="./sites/md/data-complex.mdx" />);
registerRoute("data-classes", <SuspenseWrapper path="./sites/md/data-classes.mdx" />);
registerRoute("data-objects-as-data", <SuspenseWrapper path="./sites/md/data-objects-as-data.mdx" />);
registerRoute("data-binary", <SuspenseWrapper path="./sites/md/data-binary.mdx" />);
registerRoute("data-hex", <SuspenseWrapper path="./sites/md/data-hex.mdx" />);
registerRoute("network", <SuspenseWrapper path="./sites/md/network.mdx" />);
registerRoute("game", <SuspenseWrapper path="./sites/md/game.mdx" />);
registerRoute("game-animations", <SuspenseWrapper path="./sites/md/game-player-and-animations.mdx" />);
registerRoute("game-interactions", <SuspenseWrapper path="./sites/md/game-interactions.mdx" />);
registerRoute("security-passwords", <SuspenseWrapper path="./sites/md/security-passwords.mdx" />);
registerRoute("security-encryption", <SuspenseWrapper path="./sites/md/security-encryption.mdx" />);
registerRoute("network-intro", <SuspenseWrapper path="./sites/md/network-intro.mdx" />);

// Export the route registry
export default routeRegistry;

