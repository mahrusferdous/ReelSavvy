import React, { useState, useEffect, useContext } from "react";
import { fetchMovieInfo } from "../api/tmdbApi";
import { IdContext } from "../context/IdContext";
import MovieTrailer from "../components/MovieTrailer";
import MovieProvider from "../components/MovieProvider";
import SimilarMovie from "../components/SimilarMovie";
import Sidebar from "./Sidebar";
import styles from "../styles/MovieInfo.module.css";
import logoPlay from "../assets/logos/icon-play.svg";
import iconHeart from "../assets/logos/icon-heart-black.svg";
import iconGenre from "../assets/logos/icon-genre.svg";
import iconPlatform from "../assets/logos/icon-platform.svg";
import iconLanguage from "../assets/logos/icon-language.svg";
import iconPopular from "../assets/logos/icon-popular.svg";
import { Carousel } from "react-bootstrap";
import Footer from "./Footer";

const MovieInfo = () => {
    const [movieInfo, setMovieInfo] = useState([]);
    const { id } = useContext(IdContext);
    const posterURL = "https://image.tmdb.org/t/p/original";
    const [trailer, setTrailer] = useState(false);

    useEffect(() => {
        fetchMovieInfo(id)
            .then((data) => {
                setMovieInfo(data);
            })
            .catch((error) => {
                console.error("Error fetching movie info:", error);
            });
    }, [id, fetchMovieInfo]);

    return (
        <div className="d-flex" style={{ backgroundColor: "#050505" }}>
            <Sidebar />
            <div className={styles.main_content}>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item key={movieInfo.id} className={styles.title}>
                        <img
                            className="d-block w-100"
                            src={`${posterURL}${movieInfo.backdrop_path}`}
                            alt={movieInfo.title}
                        />
                        <Carousel.Caption>
                            <h2>{movieInfo.title}</h2>
                            <p style={{ fontSize: "18px", fontWeight: "normal" }}>{movieInfo.tagline}</p>

                            <div>
                                <button
                                    className={styles.btn}
                                    onClick={() => {
                                        setTrailer(!trailer);
                                    }}
                                >
                                    <img style={{ width: "30px" }} src={logoPlay} alt="play" /> Play Trailer
                                </button>
                                <button className={styles.btn}>
                                    <img style={{ width: "30px" }} src={iconHeart} alt="heart" /> Add to Watchlist
                                </button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className="d-flex justify-content-evenly" style={{ paddingTop: "20px" }}>
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
                        <div>
                            <div>
                                <div className={styles.rightTitle}>
                                    <img src={iconGenre} alt="Genre" />
                                    <p>Genre</p>
                                </div>
                                <div className={styles.rightBox}>
                                    {movieInfo.genres &&
                                        movieInfo.genres.map((genre) => (
                                            <p key={genre.id} className={styles.rightBox}>
                                                {genre.name}
                                            </p>
                                        ))}
                                </div>
                            </div>

                            <div>
                                <div className={styles.rightTitle}>
                                    <img src={iconPlatform} alt="Platform" />
                                    <p>Available Streaming Platforms</p>
                                </div>

                                <MovieProvider movieId={movieInfo.id} />
                            </div>

                            <div>
                                <div className={styles.rightTitle}>
                                    <img src={iconLanguage} alt="Language" />
                                    <p>Available Language for Closed Captions</p>
                                </div>
                                <div className={styles.rightBox}>
                                    {movieInfo.spoken_languages &&
                                        movieInfo.spoken_languages.map((language) => <p>{language.name}</p>)}
                                </div>
                            </div>

                            <div>
                                <div className={styles.rightTitle}>
                                    <img src={iconPopular} alt="Popular" />
                                    <p>Popularity</p>
                                </div>
                                <div className={styles.rightBox}>
                                    <p>{movieInfo.popularity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {trailer && (
                    <div onClick={() => setTrailer(!trailer)}>
                        <MovieTrailer movieId={movieInfo.id} />
                    </div>
                )}
                <SimilarMovie id={movieInfo.id} />
                <Footer />
            </div>
        </div>
    );
};

export default MovieInfo;
