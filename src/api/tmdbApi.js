import axios from "axios";

const URL = "https://api.themoviedb.org/3";

const option = {
    headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZj`,
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
