import React, { useContext, useEffect, useState } from "react";
import { fetchNowPlaying } from "../api/tmdbApi";
import Sidebar from "./Sidebar";
import { Carousel } from "react-bootstrap";
import styles from "../styles/HomePage.module.css";
import { IdContext } from "../context/IdContext";
import { useNavigate } from "react-router-dom";

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

    console.log(movies);

    const shuffleArray = (array) => {
        const shuffled = array.slice(); // Create a copy of the array
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    return (
        <div>
            <Sidebar />
            <div className={styles.main_content}>
                <Carousel className={styles.caption}>
                    {movies.map((movie) => (
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
                                {/* <p>{movie.overview}</p>  */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default HomePage;
