import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import SearchedMovie from "../components/SearchedMovie";
import Sidebar from "./Sidebar";
import styles from "../styles/SearchMovie.module.css";
import Footer from "./Footer";

const SearchMovie = () => {
    const { movie } = useContext(MovieContext);

    return (
        <div className="d-flex" style={{ backgroundColor: "#050505 ", height: "100vh" }}>
            <Sidebar />
            <div>
                <div className={styles.main_content}>
                    {movie && movie.map((movie) => <SearchedMovie key={movie.id} movie={movie} />)}
                </div>
                <div style={{ marginLeft: "377px" }}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default SearchMovie;
