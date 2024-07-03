import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchGenreMovies } from "../api/tmdbApi";
import { Link } from "react-router-dom";
import MovieTrailer from "../components/MovieTrailer";
import MovieProvider from "../components/MovieProvider";
import Sidebar from "./Sidebar";
import styles from "../styles/GenrePage.module.css";
import { IdContext } from "../context/IdContext";
import { Container } from "react-bootstrap";

const GenreMovie = () => {
    const { genreId } = useParams();
    const posterURL = "https://image.tmdb.org/t/p/original";
    const [genreMovies, setGenreMovies] = useState([]);
    const { setId } = useContext(IdContext);

    useEffect(() => {
        fetchGenreMovies(genreId)
            .then((data) => {
                setGenreMovies(data);
            })
            .catch((error) => {
                console.error("Error fetching genre movies:", error);
            });
    }, [genreId]);

    return (
        <Container className="d-flex">
            <Sidebar />
            <div className={styles.main_content}>
                <h1>Genre Movies</h1>
                <Link to={"/"}>
                    <button>Get Back</button>
                </Link>

                {genreMovies.map((movie) => (
                    <div key={movie.id}>
                        {/* <h2>{movie.title}</h2> */}
                        {/* <h3>Release Date: {movie.release_date}</h3>
                        <h3>Popularity: {movie.popularity}</h3>
                        <h3>Ratings: {movie.vote_average}</h3> */}
                        <Link to={"/movie"} onClick={() => setId(movie.id)}>
                            <img src={`${posterURL}${movie.poster_path}`} alt={movie.title} />
                        </Link>
                        {/* <img src={`${posterURL}${movie.backdrop_path}`} alt={movie.title} /> */}
                        {/* <p>{movie.overview}</p> */}
                        {/* <MovieTrailer movieId={movie.id} />
                        <MovieProvider movieId={movie.id} /> */}
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default GenreMovie;
