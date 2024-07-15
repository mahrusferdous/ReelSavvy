import React, { useState, useEffect, useContext, useRef } from "react";
import { fetchGenreMovies } from "../api/tmdbApi";
import { Link } from "react-router-dom";
import styles from "../styles/GenreMovie.module.css";
import { IdContext } from "../context/IdContext";

const GenreMovie = ({ genreId }) => {
    const posterURL = "https://image.tmdb.org/t/p/w500";
    const [genreMovies, setGenreMovies] = useState([]);
    const { setId } = useContext(IdContext);
    const scrollRef = useRef(null);

    const genres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
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
        { id: 37, name: "Western" },
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

    // Function to scroll the div to the right
    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    };

    // Function to scroll the div to the left
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    };

    return (
        <div className={styles.main}>
            <h2 style={{ color: "white", fontSize: "25px" }} key={genreId}>
                {genreName} Movies
            </h2>
            <div className={styles.main_content}>
                <button className={`${styles.scrollButton} ${styles.leftButton}`} onClick={scrollLeft}>
                    <i class="bi bi-chevron-left"></i>
                </button>
                <div ref={scrollRef} className={styles.scrollContainer}>
                    {genreMovies.map((movie) => (
                        <div key={movie.id} className={styles.poster}>
                            <Link to={"/movie"} onClick={() => setId(movie.id)}>
                                {movie.poster_path && (
                                    <img src={`${posterURL}${movie.poster_path}`} alt={movie.title} />
                                )}
                            </Link>
                        </div>
                    ))}
                </div>
                <button className={`${styles.scrollButton} ${styles.rightButton}`} onClick={scrollRight}>
                    <i class="bi bi-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default GenreMovie;
