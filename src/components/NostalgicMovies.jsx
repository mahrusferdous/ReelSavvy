import React, { useContext, useEffect, useState } from "react";
import { fetchNostalgicMovies } from "../api/tmdbApi";
import styles from "../styles/PopularMovies.module.css";
import { useNavigate } from "react-router-dom";
import { IdContext } from "../context/IdContext";

const NostalgicMovies = () => {
    const [movies, setMovies] = useState([]);
    const posterURL = "https://image.tmdb.org/t/p/w500";
    const navigate = useNavigate();
    const { setId } = useContext(IdContext);

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

export default NostalgicMovies;
