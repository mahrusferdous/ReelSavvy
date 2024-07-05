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

    const genres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" }, //
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" }, //
    ];

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

    const genreName = genres.find((genre) => genre.id === genreId).name;

    return (
        <div className={styles.main_content}>
            <h2 style={{ color: "white" }} key={genreId}>
                {genreName}
            </h2>
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
