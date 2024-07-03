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
        return response.data.genres;
    } catch (error) {
        console.error(error);
    }
};

export const fetchNowPlaying = async () => {
    try {
        const response = await axios.get(`${URL}/movie/now_playing?language=en-US&page=1`, option);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};

export const fetchGenreMovies = async (id) => {
    try {
        const response = await axios.get(`${URL}/discover/movie?with_genres=${id}&language=en-US`, option);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};

export const fetchMovieTrailer = async (id) => {
    try {
        const response = await axios.get(`${URL}/movie/${id}/videos?language=en-US`, option);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};

export const fetchMovieInfo = async (id) => {
    try {
        const response = await axios.get(`${URL}/movie/${id}?language=en-US`, option);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const fetchMovieProvider = async (id) => {
    try {
        const response = await axios.get(`${URL}/movie/${id}/watch/providers?language=en-US`, option);
        return response.data.results.US;
    } catch (error) {
        console.error(error);
    }
};

export const fetchSearchMovies = async (query) => {
    try {
        const response = await axios.get(`${URL}/search/movie?query=${query}&language=en-US&page=1`, option);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};

export const fetchSimilarMovies = async (id) => {
    try {
        const response = await axios.get(`${URL}/movie/${id}/similar?language=en-US&page=1`, option);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
};

export const fetchSentimentalMovies = async () => {
    try {
        const MAX_PAGES = 10; // Adjust this based on your knowledge of the API
        const randomPage = Math.floor(Math.random() * MAX_PAGES) + 1;

        const response = await axios.get(`${URL}/discover/movie`, {
            params: {
                language: "en-US",
                sort_by: "popularity.desc",
                include_adult: false,
                include_video: false,
                with_genres: "18,10749,10751", // Drama, Romance, Family
                page: randomPage,
            },
            ...option,
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching sentimental movies:", error);
    }
};

export const fetchNostalgicMovies = async () => {
    try {
        const randomYear = Math.floor(Math.random() * (1999 - 1980 + 1)) + 1980;

        const response = await axios.get(`${URL}/discover/movie`, {
            params: {
                language: "en-US",
                sort_by: "popularity.desc",
                include_adult: false,
                include_video: false,
                primary_release_year: randomYear,
                page: 1,
            },
            ...option,
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching nostalgic movies:", error);
    }
};

export const fetchPopularMovies = async () => {
    try {
        const response = await axios.get(`${URL}/movie/popular?language=en-US&page=1`, option);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
    }
};
