// This custom hook stores user input code
// User's code store localStorage in browser

import { useState, useEffect } from 'react';

const PREFIX = 'codepen-clone-';

export const useLocalStorage = (key: string, initialValue: string) => {
  const prefixKey: string = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    try {
      if (typeof initialValue !== 'function') {
        return initialValue;
      }
    } catch (err) {
      console.log(`${err}`);
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [prefixKey, value]);

  return [value, setValue];
};
