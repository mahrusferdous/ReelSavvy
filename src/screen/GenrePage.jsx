import React, { useContext } from "react";
import { IdsContext } from "../context/IdsContext";
import GenreMovie from "./GenreMovie";
import Sidebar from "./Sidebar";

const GenrePage = () => {
    const { ids } = useContext(IdsContext);

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
