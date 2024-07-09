import React, { useState, useEffect } from "react";
import { fetchMovieTrailer } from "../api/tmdbApi";
import styles from "../styles/MovieInfo.module.css";

const MovieTrailer = ({ movieId }) => {
    const [trailers, setTrailers] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [text, setText] = useState("Loading...");

    useEffect(() => {
        // Fetch the movie trailers when movieId changes
        fetchMovieTrailer(movieId)
            .then((data) => {
                setTrailers(data);
            })
            .catch((error) => {
                console.error("Error fetching movie trailer:", error);
            });
    }, [movieId]); // Only movieId is necessary

    useEffect(() => {
        // Find and set the trailer when trailers change
        if (trailers) {
            const trailer = trailers.find((trailer) => trailer.type === "Trailer");
            setTrailer(trailer);
        }
    }, [trailers]);

    setTimeout(() => {
        setText("Not Available");
    }, 5000);

    return (
        <div className={styles.trailer}>
            {trailer ? (
                <div key={trailer.id}>
                    <iframe
                        width="800"
                        height="450"
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        title={trailer.name}
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <p style={{ color: "white" }}>{text}</p> // Loading state or message
            )}
        </div>
    );
};

export default MovieTrailer;
