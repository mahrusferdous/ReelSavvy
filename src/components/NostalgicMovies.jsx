import React, { useEffect, useState } from "react";
import { fetchNostalgicMovies } from "../api/tmdbApi";
import styles from "../styles/PopularMovies.module.css";

const NostalgicMovies = () => {
    const [movies, setMovies] = useState([]);
    const posterURL = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        fetchNostalgicMovies()
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching popular movies:", error);
            });
    }, [fetchNostalgicMovies]);

    return (
        <div className={styles.main_content}>
            <h1>Nostalgic Movies</h1>
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

export default NostalgicMovies;
