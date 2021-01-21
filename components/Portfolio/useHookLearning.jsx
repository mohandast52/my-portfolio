import React, { useState, useEffect } from 'react';

const getSavedValue = (key, initValue) => {
  if (typeof window === 'undefined') return null;
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initValue instanceof Function) return initValue();
  return initValue;
};

export const useLocalStorage = (key, initialState) => {
  const [value, setValue] = useState(() => getSavedValue(key, initialState));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value]);

  return [value, setValue];
};

export const UseEventListenerInPage = () => {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div>
      <h2>Event listener</h2>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
};
