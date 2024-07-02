import React, { useEffect, useState } from "react";
import { fetchMovieProvider } from "../api/tmdbApi";

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
            {movie && (
                <div id={movieId}>
                    <p>Available Streaming Platform</p>
                    {movie.flatrate?.map((e) => (
                        <div key={e.provider_id}>
                            <p>Provider: {e.provider_name}</p>
                        </div>
                    ))}
                    <p>Available on Stores</p>
                    {movie.buy?.map((e) => (
                        <div key={e.provider_id}>
                            <p>Buy: {e.provider_name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MovieProvider;
