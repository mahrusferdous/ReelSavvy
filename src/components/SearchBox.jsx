import React, { useContext, useState } from "react";
import { fetchSearchMovies } from "../api/tmdbApi";
import styles from "../styles/SearchBox.module.css";
import iconSearch from "../assets/logos/icon-search.svg";
import { MovieContext } from "../context/MovieContext.jsx";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
    const { setMovie } = useContext(MovieContext);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        fetchSearchMovies(query)
            .then((data) => {
                setMovie(data);
                navigate("/search");
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={search} className="w-75">
                <div className="form-group">
                    <input
                        className={styles.searchBox}
                        type="text"
                        id="search"
                        name="search"
                        value={query}
                        placeholder="Search"
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <button type="submit" className={styles.search}>
                        <img src={iconSearch} alt="search" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBox;
