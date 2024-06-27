import React, { useState, useEffect } from "react";
import { fetchMovieInfo } from "../api/tmdbApi";

const MovieInfo = ({ movieId }) => {
    const [movieInfo, setMovieInfo] = useState([]);

    useEffect(() => {
        fetchMovieInfo(movieId)
            .then((data) => {
                setMovieInfo(data);
            })
            .catch((error) => {
                console.error("Error fetching movie info:", error);
            });
    }, []);

    console.log(movieInfo);

    return <div>MovieInfo</div>;
};

export default MovieInfo;
