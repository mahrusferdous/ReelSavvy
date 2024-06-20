import React, { useEffect, useState } from "react";
import { fetchGenres, fetchMoviesByGenre } from "../api/tmdbApi";

const MovieList = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetchGenres()
            .then((data) => {
                setGenres(data);
            })
            .catch((error) => {
                console.error("Error fetching genres:", error);
            });
    }, [fetchGenres]);

    return (
        <div>
            <h1>Movie Genres</h1>

            {genres.map((genre) => (
                <div key={genre.id}>
                    <h2>{genre.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
