import React, { useEffect, useState } from "react";
import { fetchSearchMovies } from "../api/tmdbApi";
import SearchMovie from "./SearchMovie";

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
        <div>
            <form onSubmit={search}>
                <label htmlFor="search">Search for a movie</label>
                <input type="text" id="search" name="search" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>

            {movie && movie.map((movie) => <SearchMovie movie={movie} />)}
        </div>
    );
};

export default SearchBox;
