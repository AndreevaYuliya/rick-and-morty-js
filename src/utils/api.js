export const fetchJson = async (url, errorMessage = "Request failed") => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(errorMessage);
  }

  return res.json();
};

