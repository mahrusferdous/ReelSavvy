import React from "react";
import { useEffect, useState } from "react";
import { fetchGenres } from "../api/tmdbApi";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const HomePage = () => {
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        fetchGenres()
            .then((data) => {
                setGenre(data);
            })
            .catch((error) => {
                console.error("Error fetching genres:", error);
            });
    }, [fetchGenres]);

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-column">
                <h1>Genres</h1>
                <Link to="/search">
                    <button>Search for movie</button>
                </Link>
                {genre.map((genre) => (
                    <div key={genre.id}>
                        <Link to={`/movie/${genre.id}`}>
                            <h2>{genre.name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
