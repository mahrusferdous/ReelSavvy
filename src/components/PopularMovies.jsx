import React, { useEffect, useState, useContext } from "react";
import { fetchPopularMovies } from "../api/tmdbApi";
import styles from "../styles/PopularMovies.module.css";
import { IdContext } from "../context/IdContext";
import { useNavigate } from "react-router-dom";

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);
    const posterURL = "https://image.tmdb.org/t/p/original";
    const { setId } = useContext(IdContext);
    const navigate = useNavigate();

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

export default PopularMovies;
