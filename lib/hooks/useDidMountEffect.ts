import { useEffect, useRef } from 'react';

/**
 * Like useEffect, but skips running on initial mount.
 * Runs the effect only on dependency updates.
 *
 * @param effect - effect callback
 * @param deps - dependency array
 */
function useDidMountEffect(effect: React.EffectCallback, deps: React.DependencyList) {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      return effect();
    } else {
      didMount.current = true;
    }
  }, deps);
}

export default useDidMountEffect;
