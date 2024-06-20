import axios from "axios";

const option = {
    param: {
        language: "en-US",
    },
    headers: {
        accept: "application/json",
        Authorization: "Bearer ${process.env.TMDB_API_KEY}",
    },
};

export const fetchGenres = async () => {
    try {
        const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list?language=en-US", option);
        console.log(response.data.genres);
        return response.data.genres;
    } catch (error) {
        console.error(error);
    }
};
