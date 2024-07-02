import axios from "axios";

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbum = async () => {
  try {
    const res = await axios.get( `${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (e) {
    console.log("Error fetching album:", e);
    return [];
  }
};

export const fetchNewAlbum = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return res.data;
  } catch (e) {
    console.log("Error fetching New album:", e);
    return [];
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return res.data;
  } catch (e) {
    console.log("Error fetching songs:", e);
    return [];
  }
};

export const fetchFilters = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    return res.data;
  } catch (e) {
    console.log("error fetching filter data", e);
    return [];
  }
};
