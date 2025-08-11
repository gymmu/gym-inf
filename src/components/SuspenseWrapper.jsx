import React, { lazy, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

/* TODO
 * Dynamische imports sind eher schwer zu managen. Es gibt sehr viele Regeln
 * die man beachten muss, damit Vite die imports analysieren kann, damit es
 * später auch importiert werden kann. Die Frage ist, ob sich das auch wirklich
 * lohnt dies mit dynamischen Imports zu machen, denn so wirklich dynamisch
 * wird das ganze ja nicht. Es ist mehr eine Spielerei für mich um weniger
 * imports anzugeben.
 */

/* Suspend the loading of a component, used for lazy loading pages.
 *
 * Mit dieser Komponente können Unterwebseite verzögert geladen werden. So wird
 * das ganze ein wenig dynamischer und nicht alle Inhalte müssen bereits beim
 * Start der Webseite verfügbar sein. Das ist wichtig da einige Unterwebseiten
 * sehr komplex sind und obwohl sie nicht gerendert werden, brauchen sie sehr
 * viel CPU und Memory, das sollte nicht passieren.
 */
function SuspenseWrapper({ filepath }) {
  const finalFilename = `../sites/md/${filepath}`
  console.log(`Loading component from: ${finalFilename}`)
  const LazyComponent = lazy(() => import(`${finalFilename}`))

  return (
    // <div>No longer working...</div>
    // <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    // </ErrorBoundary>
  )
}

export default SuspenseWrapper
