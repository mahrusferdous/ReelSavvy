import React, { createContext, useState } from "react";

// Create a Context
export const IdContext = createContext({
    id: 0,
    setId: () => {},
});

export const IdProvider = ({ children }) => {
    const [id, setId] = useState(0);

    return <IdContext.Provider value={{ id, setId }}>{children}</IdContext.Provider>;
};
