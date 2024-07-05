import React, { createContext, useState } from "react";

// Create a Context
export const MoodSentenceContext = createContext({
    moodSentence: "",
    setMoodSentence: () => {},
});

export const MoodSentenceProvider = ({ children }) => {
    const [moodSentence, setMoodSentence] = useState([]);

    return (
        <MoodSentenceContext.Provider value={{ moodSentence, setMoodSentence }}>
            {children}
        </MoodSentenceContext.Provider>
    );
};
