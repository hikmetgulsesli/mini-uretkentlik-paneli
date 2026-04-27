export function getStorageItem<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    if (item === null || item === '') {
      return null;
    }
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(`Depolama okuma hatası ("${key}"):` , error);
    return null;
  }
}

export function setStorageItem<T>(key: string, value: T | null): void {
  try {
    if (value === null) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Depolama yazma hatası ("${key}"):` , error);
  }
}

export function removeStorageItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Depolama silme hatası ("${key}"):` , error);
  }
}
