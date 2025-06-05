import React, { lazy, Suspense } from 'react';

function SuspenseWrapper({ path }) {
  const file = path.split("/").slice(-1)[0];
  const filename = file.split(".")[0];
  const LazyComponent = lazy(() => import(`../sites/md/${filename}.mdx`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

export default SuspenseWrapper;

