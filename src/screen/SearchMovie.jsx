import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import SearchedMovie from "../components/SearchedMovie";
import Sidebar from "./Sidebar";

const SearchMovie = () => {
    const { movie } = useContext(MovieContext);

    if (!movie || movie.length === 0) {
        return <p>No movie data available.</p>;
    }

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-column">
                {movie && movie.map((movie) => <SearchedMovie key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default SearchMovie;
