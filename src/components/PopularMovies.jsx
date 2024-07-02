import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api/tmdbApi";
import styles from "../styles/PopularMovies.module.css";

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);
    const posterURL = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        fetchPopularMovies()
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching popular movies:", error);
            });
    }, [fetchPopularMovies]);

    return (
        <div className={styles.main_content}>
            <h1>Popular Movies</h1>
            <div>
                {movies.map((movie) => (
                    <div key={movie.id} className={styles.poster}>
                        <img src={`${posterURL}${movie.poster_path}`} alt={movie.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularMovies;
