import SuspenseWrapper from "../components/SuspenseWrapper";
// Route registry to store all routes
const routeRegistry = [];

/* Füge eine Seite zur Route-Registry hinzu.
 *
 * Die Route-Registry ist eine Liste von Unterwebseiten, die hier verfügbar
 * sind. Somit gibt es einen zentralen Ort an dem man alle Routes angeben muss.
 * Die Unterseiten müssen aber noch nicht zuvor geladen werden, diese werden
 * erst später per lazy-loading hinzugefügt. Eine Route braucht einen Pfad auf
 * dem sie hört, und eine Unterseite die dann geladen werden soll.
 *
 * @param path Der Pfad auf den die Route hört.
 * @param filename Der Name der Datei die lazy-loaded wird.
 */
export function registerRoute(path, element) {
  routeRegistry.push({ path, element });
}

// Register routes
registerRoute("/", <SuspenseWrapper filename="./sites/md/index.mdx" />);
registerRoute("install", <SuspenseWrapper filename="./sites/md/installation.mdx" />);
registerRoute("html", <SuspenseWrapper filename="./sites/md/html.mdx" />);
registerRoute("html-elements", <SuspenseWrapper filename="./sites/md/html-elements.mdx" />);
registerRoute("html-attributes", <SuspenseWrapper filename="./sites/md/html-attributes.mdx" />);
registerRoute("svg", <SuspenseWrapper filename="./sites/md/svg.mdx" />);
registerRoute("svg-elements", <SuspenseWrapper filename="./sites/md/svg-elements.mdx" />);
registerRoute("svg-clipping", <SuspenseWrapper filename="./sites/md/svg-clipping.mdx" />);
registerRoute("svg-animation", <SuspenseWrapper filename="./sites/md/svg-animation.mdx" />);
registerRoute("css", <SuspenseWrapper filename="./sites/md/css.mdx" />);
registerRoute("css-selectors", <SuspenseWrapper filename="./sites/md/css-selectors.mdx" />);
registerRoute("css-box-model", <SuspenseWrapper filename="./sites/md/css-box-model.mdx" />);
registerRoute("css-animations", <SuspenseWrapper filename="./sites/md/css-animationen.mdx" />);
registerRoute("tipp-images", <SuspenseWrapper filename="./sites/md/css-img.mdx" />);
registerRoute("tipp-flexbox", <SuspenseWrapper filename="./sites/md/css-layout.mdx" />);
registerRoute("img-background", <SuspenseWrapper filename="./sites/md/css-img-background.mdx" />);
registerRoute("img-next-to-text", <SuspenseWrapper filename="./sites/md/css-img-next-to-text.mdx" />);
registerRoute("git", <SuspenseWrapper filename="./sites/md/git.mdx" />);
registerRoute("git-branches", <SuspenseWrapper filename="./sites/md/git-branches.mdx" />);
registerRoute("git-merges", <SuspenseWrapper filename="./sites/md/git-merges.mdx" />);
registerRoute("git-merge-conflicts", <SuspenseWrapper filename="./sites/md/git-merge-conflicts.mdx" />);
registerRoute("javascript", <SuspenseWrapper filename="./sites/md/javascript.mdx" />);
registerRoute("javascript-change-page", <SuspenseWrapper filename="./sites/md/javascript-change-page.mdx" />);
registerRoute("javascript-blocks", <SuspenseWrapper filename="./sites/md/javascript-blocks.mdx" />);
registerRoute("javascript-declarative", <SuspenseWrapper filename="./sites/md/javascript-declarative.mdx" />);
registerRoute("javascript-if", <SuspenseWrapper filename="./sites/md/javascript-if.mdx" />);
registerRoute("javascript-for", <SuspenseWrapper filename="./sites/md/javascript-for.mdx" />);
registerRoute("javascript-return", <SuspenseWrapper filename="./sites/md/javascript-return.mdx" />);
registerRoute("javascript-lists", <SuspenseWrapper filename="./sites/md/javascript-lists.mdx" />);
registerRoute("javascript-ascii", <SuspenseWrapper filename="./sites/md/javascript-ascii.mdx" />);
registerRoute("javascript-switches", <SuspenseWrapper filename="./sites/md/javascript-switches.mdx" />);
registerRoute("javascript-text-to-numbers", <SuspenseWrapper filename="./sites/md/javascript-text-to-numbers.mdx" />);
registerRoute("javascript-variables", <SuspenseWrapper filename="./sites/md/javascript-variables.mdx" />);
registerRoute("ai-intro", <SuspenseWrapper filename="./sites/md/ai-intro.mdx" />);
registerRoute("ai-pong", <SuspenseWrapper filename="./sites/md/ai-pong.mdx" />);
registerRoute("data", <SuspenseWrapper filename="./sites/md/data.mdx" />);
registerRoute("data-objects", <SuspenseWrapper filename="./sites/md/data-objects.mdx" />);
registerRoute("data-complex", <SuspenseWrapper filename="./sites/md/data-complex.mdx" />);
registerRoute("data-classes", <SuspenseWrapper filename="./sites/md/data-classes.mdx" />);
registerRoute("data-objects-as-data", <SuspenseWrapper filename="./sites/md/data-objects-as-data.mdx" />);
registerRoute("data-binary", <SuspenseWrapper filename="./sites/md/data-binary.mdx" />);
registerRoute("data-hex", <SuspenseWrapper filename="./sites/md/data-hex.mdx" />);
registerRoute("network", <SuspenseWrapper filename="./sites/md/network.mdx" />);
registerRoute("game", <SuspenseWrapper filename="./sites/md/game.mdx" />);
registerRoute("game-animations", <SuspenseWrapper filename="./sites/md/game-player-and-animations.mdx" />);
registerRoute("game-interactions", <SuspenseWrapper filename="./sites/md/game-interactions.mdx" />);
registerRoute("security-passwords", <SuspenseWrapper filename="./sites/md/security-passwords.mdx" />);
registerRoute("security-encryption", <SuspenseWrapper filename="./sites/md/security-encryption.mdx" />);
registerRoute("network-intro", <SuspenseWrapper filename="./sites/md/network-intro.mdx" />);

registerRoute("fms-theorie", <SuspenseWrapper filename="./sites/md/fms.mdx" fms={true} />);
registerRoute("fms/ikt", <SuspenseWrapper filename="./sites/md/fms/ikt.mdx" fms={true} />);

// Export the route registry
export default routeRegistry;

