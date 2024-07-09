import React, { useEffect, useState } from "react";
import { fetchMovieProvider } from "../api/tmdbApi";
import styles from "../styles/MovieInfo.module.css";

const MovieProvider = ({ movieId }) => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchMovieProvider(movieId)
            .then((data) => {
                setMovie(data);
            })
            .catch((error) => {
                console.error("Error fetching movie provider:", error);
            });
    }, [movieId, fetchMovieProvider]);

    return (
        <div>
            {movie ? (
                <div id={movieId} className={styles.rightBox}>
                    {/* <p>Available Streaming Platform</p> */}
                    {movie.flatrate?.map((e) => (
                        <p key={e.provider_id}>{e.provider_name}</p>
                    ))}
                    {/* <p>Available on Stores</p> */}
                    {movie.buy?.map((e) => (
                        <p key={e.provider_id}>{e.provider_name}</p>
                    ))}
                </div>
            ) : (
                <div className={styles.rightBox}>
                    <p>In Theaters</p>
                </div>
            )}
        </div>
    );
};

export default MovieProvider;
