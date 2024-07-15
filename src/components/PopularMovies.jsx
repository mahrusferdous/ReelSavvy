import React, { useEffect, useState, useContext, useRef } from "react";
import { fetchPopularMovies } from "../api/tmdbApi";
import styles from "../styles/PopularMovies.module.css";
import { IdContext } from "../context/IdContext";
import { useNavigate } from "react-router-dom";

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);
    const posterURL = "https://image.tmdb.org/t/p/w500";
    const { setId } = useContext(IdContext);
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    useEffect(() => {
        fetchPopularMovies()
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching popular movies:", error);
            });
    }, [fetchPopularMovies]);

    // Function to scroll the div to the right
    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    };

    // Function to scroll the div to the left
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    };

    return (
        <div className={styles.content}>
            <h1>Popular Movies</h1>
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
                            <img src={`${posterURL}${movie.poster_path}`} alt={movie.title} />
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

export default PopularMovies;
