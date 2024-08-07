import React, { useState } from "react";
// import MovieList from "./components/MovieList";
import { Routes, Route } from "react-router-dom";
import MoodPage from "./screen/MoodPage.jsx";
import GenrePage from "./screen/GenrePage.jsx";
import SearchMovie from "./screen/SearchMovie.jsx";
import MovieInfo from "./screen/MovieInfo.jsx";
import HomePage from "./screen/HomePage.jsx";
import WatchList from "./screen/WatchList.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mood" element={<MoodPage />} />
            <Route path="/genre" element={<GenrePage />} />
            <Route path="/search" element={<SearchMovie />} />
            <Route path="/movie" element={<MovieInfo />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route
                path="*"
                element={
                    <h1
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100vh",
                            width: "100%",
                        }}
                    >
                        Not Found
                    </h1>
                }
            />
        </Routes>
    );
}

export default App;
