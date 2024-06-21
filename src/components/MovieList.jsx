import React, { useEffect, useState } from "react";
import { fetchGenres, fetchNowPlaying } from "../api/tmdbApi";

const MovieList = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetchNowPlaying()
            .then((data) => {
                setGenres(data);
            })
            .catch((error) => {
                console.error("Error fetching genres:", error);
            });
    }, [fetchNowPlaying]);

    const posterURL = "https://image.tmdb.org/t/p/w500";

    return (
        <div>
            <h1>Movie Genres</h1>

            {genres.map((genre) => (
                <div key={genre.id}>
                    <h2>{genre.title}</h2>
                    <img src={`${posterURL}${genre.poster_path}`} alt={genre.title} />
                    <p>{genre.overview}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
