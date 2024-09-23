// Promise.withResolvers() polyfill
export function createDeferredPromise<T = unknown>() {
  const deferred: {
    resolve?: (value: T | PromiseLike<T>) => void;
    reject?: (value: T | PromiseLike<T>) => void;
  } = {};

  const promise = new Promise<T>((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return {
    promise,
    resolve: deferred.resolve!,
    reject: deferred.reject!,
  };
}
