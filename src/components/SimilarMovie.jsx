import React, { useContext, useEffect, useState } from "react";
import { fetchSimilarMovies } from "../api/tmdbApi";
import { IdContext } from "../context/IdContext";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SimilarMovies.module.css";
import { Container } from "react-bootstrap";

const SimilarMovie = ({ id }) => {
    const [similarMovies, setSimilarMovies] = useState([]);
    const { setId } = useContext(IdContext);
    const posterURL = "https://image.tmdb.org/t/p/w500";
    const navigate = useNavigate();

    useEffect(() => {
        fetchSimilarMovies(id)
            .then((data) => {
                setSimilarMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching similar movies:", error);
            });
    }, [id, fetchSimilarMovies]);

    console.log(similarMovies);

    return (
        <div className={styles.main_content}>
            {similarMovies &&
                similarMovies.map((movie) => (
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
    );
};

export default SimilarMovie;
