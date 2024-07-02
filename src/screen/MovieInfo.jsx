import React, { useState, useEffect, useContext } from "react";
import { fetchMovieInfo } from "../api/tmdbApi";
import { IdContext } from "../context/IdContext";
import MovieTrailer from "../components/MovieTrailer";
import MovieProvider from "../components/MovieProvider";
import SimilarMovie from "../components/SimilarMovie";
import Sidebar from "./Sidebar";
import styles from "../styles/MovieInfo.module.css";
import logoPlay from "../assets/logos/icon-play.svg";
import iconHeart from "../assets/logos/icon-heart.svg";

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
        <div className="d-flex">
            <Sidebar />
            <div className={styles.main_content}>
                {/* <img
                    className={styles.image}
                    src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`}
                    alt={movieInfo.title}
                /> */}
                <div
                    className={styles.title}
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <h2>{movieInfo.title}</h2>
                    <h3>{movieInfo.tagline}</h3>

                    <div>
                        <button className={styles.heart}>
                            <img src={iconHeart} alt="heart" />
                        </button>
                        <button className={styles.btn}>
                            <img style={{ width: "30px" }} src={logoPlay} alt="play" /> Play Trailer
                        </button>
                    </div>

                    <div className={styles.shade}></div>
                </div>

                <div className="d-flex justify-content-evenly" style={{ background: "black", paddingTop: "20px" }}>
                    <div className={styles.topic}>
                        <h4 style={{ color: "orange" }}>RUNTIME</h4>
                        <p>{movieInfo.runtime} minutes</p>
                    </div>

                    <div className={styles.topic}>
                        <h4 style={{ color: "orange" }}>MOVIE MOODS</h4>
                        <p>{movieInfo.genres && movieInfo.genres.map((genre) => genre.name).join(", ")}</p>
                    </div>

                    <div className={styles.topic}>
                        <h4 style={{ color: "orange" }}>RELEASE DATE</h4>
                        <p>{movieInfo.release_date}</p>
                    </div>

                    <div className={styles.topic}>
                        <h4 style={{ color: "orange" }}> IMDB RATING</h4>
                        <p>{movieInfo.vote_average}</p>
                    </div>
                </div>

                <div className={styles.gridContainer}>
                    {/* Left Column */}
                    <div className={styles.leftColumn}>
                        <h4>Overview</h4>
                        <p>{movieInfo.overview}</p>
                    </div>

                    {/* Right Column */}
                    <div className={styles.rightColumn}>
                        <p>{movieInfo.genres && movieInfo.genres.map((genre) => genre.name).join(", ")}</p>

                        <MovieProvider movieId={movieInfo.id} />

                        <p>
                            Spoken Languages:{" "}
                            {movieInfo.spoken_languages &&
                                movieInfo.spoken_languages.map((language) => language.name).join(", ")}
                        </p>

                        <p>Popularity: {movieInfo.popularity}</p>
                    </div>
                </div>

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
                <h3>Status: {movieInfo.status}</h3>
                <h3>Budget: ${movieInfo.budget}</h3>
                <h3>Revenue: ${movieInfo.revenue}</h3>
                <h3>
                    Homepage:{" "}
                    <a href={movieInfo.homepage ? movieInfo.homepage : "https://www.themoviedb.org/"}>
                        {movieInfo.homepage}
                    </a>
                </h3>

                {/* <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={movieInfo.title} /> */}
                {/* <MovieTrailer movieId={movieInfo.id} /> */}
                {/* <SimilarMovie id={movieInfo.id} /> */}
            </div>
        </div>
    );
};

export default MovieInfo;
