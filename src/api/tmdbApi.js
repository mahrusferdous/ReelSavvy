import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWVkYzE4ZWYzZmRjN2NkZTYxYTUyNmQzNmYxZGMxMiIsInN1YiI6IjYxMTZkNjBhNjMzMmY3MDA3MjM4MTRlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fSRyvaPGcDkVN1hbHWPYUrkBSNgZSlibC3x5at-bBkQ";

const option = {
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
    },
};

export const fetchGenres = async () => {
    try {
        const response = await axios.get(`${URL}/genre/movie/list?language=en-US`, option);
        console.log(response.data.genres);
        return response.data.genres;
    } catch (error) {
        console.error(error);
    }
};

export const fetchNowPlaying = async () => {
    try {
        const response = await axios.get(`${URL}/movie/now_playing?language=en-US&page=1`, option);
        console.log(response.data.results);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};
