import React, { useEffect, useState } from "react";
import { fetchNowPlaying } from "../api/tmdbApi";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const posterURL = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        fetchNowPlaying()
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    }, [fetchNowPlaying]);

    return (
        <div>
            <h1>Movies</h1>

            {movies.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <h3>Release Date: {movie.release_date}</h3>
                    <h3>Popularity: {movie.popularity}</h3>
                    <h3>Ratings: {movie.vote_average}</h3>
                    <img src={`${posterURL}${movie.poster_path}`} alt={movie.title} />
                    <img src={`${posterURL}${movie.backdrop_path}`} alt={movie.title} />
                    <p>{movie.overview}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
