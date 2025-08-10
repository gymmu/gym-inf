import React, { lazy, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

/* Suspend the loading of a component, used for lazy loading pages.
 *
 * Mit dieser Komponente können Unterwebseite verzögert geladen werden. So wird
 * das ganze ein wenig dynamischer und nicht alle Inhalte müssen bereits beim
 * Start der Webseite verfügbar sein. Das ist wichtig da einige Unterwebseiten
 * sehr komplex sind und obwohl sie nicht gerendert werden, brauchen sie sehr
 * viel CPU und Memory, das sollte nicht passieren.
 */
function SuspenseWrapper({ filename, fms = false }) {
  const file = filename.split("/").slice(-1)[0]
  const basename = file.split(".")[0]
  const finalFilename = fms
    ? `/gym-inf/docs/assets/sites/md/fms/${basename}.mdx`
    : `/gym-inf/docs/assets/sites/md/${basename}.mdx`
  console.log(`Loading component from: ${finalFilename}`)
  const LazyComponent = lazy(() =>
    import(`${finalFilename}`).catch((err) => console.error(err)),
  )
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  )
}

export default SuspenseWrapper
