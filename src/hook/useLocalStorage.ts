import { useState, useEffect } from 'react';

const PREFIX: string = 'codepen-clone-';


export const useLocalStorage = (key: string, initialValue: string) => {
  const prefixKey: string = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixKey);
    if (jsonValue != null) return JSON.parse(jsonValue);

    try {
      if(typeof initialValue !== 'function') {
        return initialValue;
      }
    } catch (err) {
      console.log(`${err}`);
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value))
  }, [prefixKey, value])
  
  return [value, setValue];
}