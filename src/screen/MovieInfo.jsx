import React, { useState, useEffect, useContext } from "react";
import { fetchMovieInfo } from "../api/tmdbApi";
import { IdContext } from "../context/IdContext";
import MovieTrailer from "../components/MovieTrailer";
import MovieProvider from "../components/MovieProvider";
import SimilarMovie from "../components/SimilarMovie";

const MovieInfo = () => {
    const [movieInfo, setMovieInfo] = useState([]);
    const { id } = useContext(IdContext);

    useEffect(() => {
        fetchMovieInfo(id)
            .then((data) => {
                setMovieInfo(data);
            })
            .catch((error) => {
                console.error("Error fetching movie info:", error);
            });
    }, [id, fetchMovieInfo]);

    console.log(movieInfo);

    return (
        <div>
            <h2>{movieInfo.title}</h2>
            <MovieProvider movieId={movieInfo.id} />
            <h3>Release Date: {movieInfo.release_date}</h3>
            <h3>Popularity: {movieInfo.popularity}</h3>
            <h3>Ratings: {movieInfo.vote_average}</h3>
            <h3>Genres: {movieInfo.genres && movieInfo.genres.map((genre) => genre.name).join(", ")}</h3>
            <h3>
                Production Companies:{" "}
                {movieInfo.production_companies &&
                    movieInfo.production_companies.map((company) => company.name).join(", ")}
            </h3>
            <h3>
                Production Countries:{" "}
                {movieInfo.production_countries &&
                    movieInfo.production_countries.map((country) => country.name).join(", ")}
            </h3>
            <h3>
                Spoken Languages:{" "}
                {movieInfo.spoken_languages && movieInfo.spoken_languages.map((language) => language.name).join(", ")}
            </h3>
            <h3>Runtime: {movieInfo.runtime} minutes</h3>
            <h3>Status: {movieInfo.status}</h3>
            <h3>Tagline: {movieInfo.tagline}</h3>
            <h3>Budget: ${movieInfo.budget}</h3>
            <h3>Revenue: ${movieInfo.revenue}</h3>
            <h3>
                Homepage:{" "}
                <a href={movieInfo.homepage ? movieInfo.homepage : "https://www.themoviedb.org/"}>
                    {movieInfo.homepage}
                </a>
            </h3>
            <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={movieInfo.title} />
            <img src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`} alt={movieInfo.title} />
            <p>{movieInfo.overview}</p>
            <MovieTrailer movieId={movieInfo.id} />
            <SimilarMovie id={movieInfo.id} />
        </div>
    );
};

export default MovieInfo;
