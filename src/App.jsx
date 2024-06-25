import React from "react";
import MovieList from "./components/MovieList";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MovieList />} />
        </Routes>
    );
}

export default App;
