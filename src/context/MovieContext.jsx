import React, { createContext, useState } from "react";

// Create a Context
export const MovieContext = createContext({
    movie: [],
    setMovie: () => {},
});

export const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState([]);

    return <MovieContext.Provider value={{ movie, setMovie }}>{children}</MovieContext.Provider>;
};
