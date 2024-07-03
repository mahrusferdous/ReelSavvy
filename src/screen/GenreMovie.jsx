import React, { useState, useEffect, useContext } from "react";
import { fetchGenreMovies } from "../api/tmdbApi";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "../styles/GenreMovie.module.css";
import { IdContext } from "../context/IdContext";

const GenreMovie = ({ genreId }) => {
    const posterURL = "https://image.tmdb.org/t/p/w500";
    const [genreMovies, setGenreMovies] = useState([]);
    const { setId } = useContext(IdContext);

    useEffect(() => {
        fetchGenreMovies(genreId)
            .then((data) => {
                setGenreMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching genre movies:", error);
            });
    }, [genreId, fetchGenreMovies]);

    if (!genreMovies) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className={styles.main_content}>
            <div>
                {genreMovies.map((movie) => (
                    <div key={movie.id} className={styles.poster}>
                        <Link to={"/movie"} onClick={() => setId(movie.id)}>
                            {movie.poster_path && <img src={`${posterURL}${movie.poster_path}`} alt={movie.title} />}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenreMovie;
