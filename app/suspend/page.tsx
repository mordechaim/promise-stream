'use client';

import { Suspense, use, useEffect, useMemo } from 'react';
import { createDeferredPromise } from './promise';

export default function SuspendingParent() {
  const { promise, resolve } = useMemo(
    // Promise.withResolvers() polyfill
    () => createDeferredPromise<number>(),
    []
  );

  // resolving outside the effect will not causing this issue
  // resolve(42)

  useEffect(() => {
    console.log('executed');

    resolve(42);
  }, [resolve]);

  return (
    <Suspense fallback='Loading meaning of life...'>
      <SuspendingChild promise={promise} />
    </Suspense>
  );
}

interface ChildProps {
  promise: Promise<number>;
}

function SuspendingChild(props: ChildProps) {
  const { promise } = props;

  return use(promise);
}
