import React from "react";
// import MovieList from "./components/MovieList";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screen/HomePage";
import GenreMovie from "./screen/GenreMovie";

function App() {
    return (
        <Routes>
            <Route path="/movie/:genreId" element={<GenreMovie />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default App;
