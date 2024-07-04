import React, { useState, useEffect } from "react";
import { fetchMovieTrailer } from "../api/tmdbApi";
import styles from "../styles/MovieInfo.module.css";

const MovieTrailer = ({ movieId }) => {
    const [trailers, setTrailers] = useState(null); // Initialize with null
    const [trailer, setTrailer] = useState(null); // Initialize with null

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

    return (
        <div className={styles.trailer}>
            {trailer ? (
                <div key={trailer.id}>
                    <iframe
                        width="1120"
                        height="620"
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        title={trailer.name}
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <p>Loading trailer...</p> // Loading state or message
            )}
        </div>
    );
};

export default MovieTrailer;
