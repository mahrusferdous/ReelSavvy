import React from "react";

const SearchedMovie = ({ movie }) => {
    const posterURL = "https://image.tmdb.org/t/p/w500";

    return (
        <div>
            <div>
                <h2>{movie.title}</h2>
                <h3>Release Date: {movie.release_date}</h3>
                <h3>Popularity: {movie.popularity}</h3>
                <h3>Ratings: {movie.vote_average}</h3>
                <img src={`${posterURL}${movie.poster_path}`} alt={movie.title} />
                <img src={`${posterURL}${movie.backdrop_path}`} alt={movie.title} />
                <p>{movie.overview}</p>
            </div>
        </div>
    );
};

export default SearchedMovie;
