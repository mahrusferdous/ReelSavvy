import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import SearchedMovie from "../components/SearchedMovie";
import Sidebar from "./Sidebar";
import styles from "../styles/SearchMovie.module.css";
import { Container } from "react-bootstrap";

const SearchMovie = () => {
    const { movie } = useContext(MovieContext);

    return (
        <div className="d-flex">
            <Sidebar />
            <div className={styles.main_content}>
                {movie && movie.map((movie) => <SearchedMovie key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default SearchMovie;
