import { useCallback, useEffect, useState } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = getStorageItem<T>(key);
    return item !== null ? item : initialValue;
  });

  const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (value) => {
      setStoredValue((prev) => {
        const nextValue = value instanceof Function ? value(prev) : value;
        setStorageItem(key, nextValue);
        return nextValue;
      });
    },
    [key],
  );

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key !== key) {
        return;
      }
      if (event.newValue === null) {
        setStoredValue(initialValue);
        return;
      }
      try {
        setStoredValue(JSON.parse(event.newValue) as T);
      } catch {
        // Invalid JSON in storage, keep current state
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue];
}
