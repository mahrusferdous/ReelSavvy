import React, { useState, useEffect } from "react";
import { fetchMovieTrailer } from "../api/tmdbApi";

const MovieTrailer = ({ movieId }) => {
    const [trailers, setTrailers] = useState();
    const [trailer, setTrailer] = useState();

    useEffect(() => {
        fetchMovieTrailer(movieId)
            .then((data) => {
                setTrailers(data);
            })
            .catch((error) => {
                console.error("Error fetching movie trailor:", error);
            });
    }, [movieId]);

    useEffect(() => {
        const trailer = trailers && trailers.find((trailer) => trailer.type === "Trailer");
        setTrailer(trailer);
    }, [trailers]);

    return (
        <div>
            {trailer && (
                <div key={trailer.id}>
                    <h3>{trailer.name}</h3>
                    <h3>{trailer.published_at}</h3>
                    <h3>{trailer.type}</h3>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        title={trailer.name}
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default MovieTrailer;
