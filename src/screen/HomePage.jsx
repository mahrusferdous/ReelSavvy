import React, { useContext, useEffect, useState } from "react";
import { fetchNowPlaying } from "../api/tmdbApi";
import Sidebar from "./Sidebar";
import { Carousel } from "react-bootstrap";
import styles from "../styles/HomePage.module.css";
import { IdContext } from "../context/IdContext";
import { useNavigate } from "react-router-dom";
import iconHeart from "../assets/logos/icon-heart.svg";
import bannerLogo from "../assets/logos/banner_logo.png";
import PopularMovies from "../components/PopularMovies";
import SentimentalMovies from "../components/SentimentalMovies";
import NostalgicMovies from "../components/NostalgicMovies";
import Footer from "./Footer";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const posterURL = "https://image.tmdb.org/t/p/original";
    const { setId } = useContext(IdContext);
    const navigation = useNavigate();

    useEffect(() => {
        fetchNowPlaying()
            .then((data) => {
                const shuffleMovies = shuffleArray(data);
                setMovies(shuffleMovies.slice(0, 5));
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    }, [fetchNowPlaying]);

    const shuffleArray = (array) => {
        const shuffled = array.slice(); // Create a copy of the array
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const handleAddToWatchList = (movie) => {
        const storedWatchList = JSON.parse(localStorage.getItem("watchList")) || [];
        const updatedWatchList = [...storedWatchList, movie];
        localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
    };

    return (
        <div style={{ backgroundColor: "#050505" }}>
            <Sidebar />
            <div className={styles.main_content}>
                <Carousel>
                    {movies.map(
                        (movie) =>
                            movie.backdrop_path && (
                                <Carousel.Item
                                    key={movie.id}
                                    onClick={() => {
                                        setId(movie.id);
                                        navigation("/movie");
                                    }}
                                >
                                    <img
                                        className="d-block w-100"
                                        src={`${posterURL}${movie.backdrop_path}`}
                                        alt={movie.title}
                                    />
                                    <Carousel.Caption>
                                        <p className={styles.captionP}>TOP RECOMMENDED MOVIES</p>
                                        <h1>{movie.title}</h1>
                                        <button className={styles.heart} onClick={() => handleAddToWatchList(movie)}>
                                            <img src={iconHeart} alt="heart" />
                                        </button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                    )}
                </Carousel>
            </div>

            <PopularMovies />
            <SentimentalMovies />
            <NostalgicMovies />

            <div className={styles.banner}>
                <img onClick={() => navigation("/mood")} className="img-fluid" src={bannerLogo} alt="Banner" />
            </div>

            <div style={{ marginLeft: "377px" }}>
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;
