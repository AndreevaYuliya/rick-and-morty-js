const isBrowser = typeof window !== "undefined" && !!window.localStorage;

export const saveValue = (key, value) => {
  if (!isBrowser) {
    return;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (_) {}
};

export const loadValue = (key, fallback = null) => {
  if (!isBrowser) {
    return fallback;
  }

  try {
    const stored = window.localStorage.getItem(key);

    return stored ? JSON.parse(stored) : fallback;
  } catch (_) {
    return fallback;
  }
};

