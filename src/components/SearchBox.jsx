import React, { useEffect, useState } from "react";
import { fetchSearchMovies } from "../api/tmdbApi";
import SearchMovie from "./SearchMovie";
import styles from "../styles/SearchBox.module.css";
import iconSearch from "../assets/logos/icon-search.svg";

const SearchBox = () => {
    const [movie, setMovie] = useState();
    const [query, setQuery] = useState("");

    const search = (e) => {
        e.preventDefault();
        fetchSearchMovies(query)
            .then((data) => {
                setMovie(data);
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    };

    console.log(movie);

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

            {movie && movie.map((movie) => <SearchMovie movie={movie} />)}
        </div>
    );
};

export default SearchBox;
