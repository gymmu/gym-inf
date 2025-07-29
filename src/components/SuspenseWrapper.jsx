import React, { lazy, Suspense } from 'react';

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
  const basename = file.split(".")[0];
  const finalFilename = fms ?  `../sites/md/fms/${basename}.mdx` : `../sites/md/${basename}.mdx`
  const LazyComponent = lazy(() => import(`${finalFilename}`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default SuspenseWrapper;

