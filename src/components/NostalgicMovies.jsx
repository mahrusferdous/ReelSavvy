import React, { useContext, useEffect, useRef, useState } from "react";
import { fetchNostalgicMovies } from "../api/tmdbApi";
import styles from "../styles/PopularMovies.module.css";
import { useNavigate } from "react-router-dom";
import { IdContext } from "../context/IdContext";

const NostalgicMovies = () => {
    const [movies, setMovies] = useState([]);
    const posterURL = "https://image.tmdb.org/t/p/w500";
    const navigate = useNavigate();
    const { setId } = useContext(IdContext);
    const scrollRef = useRef(null);

    useEffect(() => {
        fetchNostalgicMovies()
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching popular movies:", error);
            });
    }, [fetchNostalgicMovies]);

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
            <h1>Nostalgic Movies</h1>
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

export default NostalgicMovies;
