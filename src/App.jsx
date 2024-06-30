import React, { useState } from "react";
// import MovieList from "./components/MovieList";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screen/HomePage";
import GenreMovie from "./screen/GenreMovie";
import SearchMovie from "./screen/SearchMovie.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:genreId" element={<GenreMovie />} />
            <Route path="/search" element={<SearchMovie />} />
            {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
        </Routes>
    );
}

export default App;
