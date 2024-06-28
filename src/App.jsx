import React from "react";
// import MovieList from "./components/MovieList";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screen/HomePage";
import GenreMovie from "./screen/GenreMovie";
import SearchBox from "./components/SearchBox";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:genreId" element={<GenreMovie />} />
            <Route path="/search" element={<SearchBox />} />
            {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
        </Routes>
    );
}

export default App;
