import React, { createContext, useState } from "react";

// Create a Context
export const MoodContext = createContext({
    mood: "",
    setMood: () => {},
});

export const MoodProvider = ({ children }) => {
    const [mood, setMood] = useState([]);

    return <MoodContext.Provider value={{ mood, setMood }}>{children}</MoodContext.Provider>;
};
