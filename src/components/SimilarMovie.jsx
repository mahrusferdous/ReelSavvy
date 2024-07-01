import React, { useEffect, useState } from "react";
import { fetchSimilarMovies } from "../api/tmdbApi";

const SimilarMovie = ({ id }) => {
    const [similarMovies, setSimilarMovies] = useState([]);

    useEffect(() => {
        fetchSimilarMovies(id)
            .then((data) => {
                setSimilarMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching similar movies:", error);
            });
    }, [id, fetchSimilarMovies]);

    return (
        <div>
            {similarMovies &&
                similarMovies.map((movie) => (
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </div>
                ))}
        </div>
    );
};

export default SimilarMovie;
