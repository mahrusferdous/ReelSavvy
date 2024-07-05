import React, { useContext } from "react";
import { IdsContext } from "../context/IdsContext";
import GenreMovie from "./GenreMovie";
import Sidebar from "./Sidebar";

const GenrePage = () => {
    const { ids } = useContext(IdsContext);

    const genres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" }, //
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" }, //
    ];

    return (
        <div>
            <Sidebar />

            {ids.map((id) => (
                <div key={id}>
                    <GenreMovie genreId={id} />
                </div>
            ))}
        </div>
    );
};

export default GenrePage;
