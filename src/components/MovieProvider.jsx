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
    }, [movieId]);

    return (
        <div>
            {movie && (
                <div id={movieId}>
                    {movie.flatrate?.map((e) => (
                        <div key={e.provider_id}>
                            <h3>Provider: {e.provider_name}</h3>
                        </div>
                    ))}
                    {movie.buy?.map((e) => (
                        <div key={e.provider_id}>
                            <h3>Buy: {e.provider_name}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MovieProvider;
