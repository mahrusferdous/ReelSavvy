import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IdContext } from "../context/IdContext";
import styles from "../styles/SearchMovie.module.css";

const SearchedMovie = ({ movie }) => {
    const posterURL = "https://image.tmdb.org/t/p/w500";
    const { setId } = useContext(IdContext);

    const movieProcess = () => {
        setId(movie.id);
    };

    return (
        <div>
            <div className={styles.content}>
                <Link to={"/movie"} onClick={() => movieProcess()}>
                    <img src={`${posterURL}${movie.poster_path}`} alt={movie.title} />
                </Link>
            </div>
        </div>
    );
};

export default SearchedMovie;
