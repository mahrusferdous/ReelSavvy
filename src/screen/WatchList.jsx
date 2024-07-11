import React, { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import styles from "../styles/SearchMovie.module.css";
import iconHeart from "../assets/logos/icon-heart.svg";
import { IdContext } from "../context/IdContext";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const WatchList = () => {
    const [watchList, setWatchList] = useState([]);
    const { setId } = useContext(IdContext);
    const navigation = useNavigate();

    useEffect(() => {
        const storedWatchList = JSON.parse(localStorage.getItem("watchList")) || [];
        setWatchList(storedWatchList);
    }, []);

    const handleRemoveItem = (id) => {
        const updatedWatchList = watchList.filter((movie) => movie.id !== id);
        localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
        setWatchList(updatedWatchList);
    };

    return (
        <div>
            <Sidebar />

            <div style={{ backgroundColor: "#050505" }}>
                <h1>Watch List</h1>
                <div className={styles.main_content}>
                    {watchList &&
                        watchList.map((movie) => (
                            <div className={styles.content}>
                                <div className={styles.movie_card}>
                                    <img
                                        onClick={() => {
                                            setId(movie.id);
                                            navigation("/movie");
                                        }}
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                    <button
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "none",
                                            color: "white",
                                            fontSize: "15px",
                                            fontWeight: "bold",
                                        }}
                                        onClick={() => handleRemoveItem(movie.id)}
                                    >
                                        Remove
                                        <img src={iconHeart} alt="heart" style={{ width: "30px" }} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default WatchList;
