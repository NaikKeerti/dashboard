// useDebounce.js
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
        setDelayedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return delayedValue;
}

export default useDebounce;
