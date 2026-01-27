import { BASE_URL, DETAILS_URL } from "./constants";

import { fetchJson } from "../utils/api";

export const getCharacters = async (page = 1) => {
  const data = await fetchJson(
    `${BASE_URL}?page=${page}`,
    "Failed to load characters. Please try again.",
  );

  return {
    ...data,
    currentPage: page,
    totalPages: data.info?.pages ?? 0,
  };
};

export const getCharacter = async (id) => {
  return fetchJson(
    DETAILS_URL.replace("{id}", id),
    "Failed to load character details. Please try again.",
  );
};

