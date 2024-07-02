import React, { useContext, useEffect, useState } from "react";
import { fetchSentimentalMovies } from "../api/tmdbApi";
import styles from "../styles/PopularMovies.module.css";
import { IdContext } from "../context/IdContext";
import { useNavigate } from "react-router-dom";

const SentimentalMovies = () => {
    const [movies, setMovies] = useState([]);
    const posterURL = "https://image.tmdb.org/t/p/original";
    const navigate = useNavigate();
    const { setId } = useContext(IdContext);

    useEffect(() => {
        fetchSentimentalMovies()
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching popular movies:", error);
            });
    }, [fetchSentimentalMovies]);

    return (
        <div className={styles.main_content}>
            <h1>Sentimental Movies</h1>
            <div>
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        onClick={() => {
                            setId(movie.id);
                            navigate("/movie");
                        }}
                        className={styles.poster}
                    >
                        <img src={`${posterURL}${movie.poster_path}`} alt={movie.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SentimentalMovies;
