import React, { useContext, useEffect, useRef, useState } from "react";
import { fetchSentimentalMovies } from "../api/tmdbApi";
import styles from "../styles/PopularMovies.module.css";
import { IdContext } from "../context/IdContext";
import { useNavigate } from "react-router-dom";

const SentimentalMovies = () => {
    const [movies, setMovies] = useState([]);
    const posterURL = "https://image.tmdb.org/t/p/w500";
    const navigate = useNavigate();
    const { setId } = useContext(IdContext);
    const scrollRef = useRef(null);

    useEffect(() => {
        fetchSentimentalMovies()
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching popular movies:", error);
            });
    }, [fetchSentimentalMovies]);

    // Function to scroll the div to the right
    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    // Function to scroll the div to the left
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    return (
        <div className={styles.content}>
            <h1>Sentimental Movies</h1>
            <div className={styles.main_content}>
                <button className={`${styles.scrollButton} ${styles.leftButton}`} onClick={scrollLeft}>
                    <i class="bi bi-chevron-left"></i>
                </button>
                <div ref={scrollRef} className={styles.scrollContainer}>
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            onClick={() => {
                                setId(movie.id);
                                navigate("/movie");
                            }}
                            className={styles.poster}
                        >
                            {movie.poster_path && <img src={`${posterURL}${movie.poster_path}`} alt={movie.title} />}
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

export default SentimentalMovies;
