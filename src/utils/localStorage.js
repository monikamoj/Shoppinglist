import { useEffect, useState } from "react";

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key, defaultValue) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  setItem(key, defaultValue);
  return defaultValue;
};

export const useLocalStorageState = (key, defaultValue) => {
  const [value, setValue] = useState(() => getItem(key, defaultValue));

  useEffect(() => {
    setItem(key, value);
  }, [value]);

  return [value, setValue];
};
