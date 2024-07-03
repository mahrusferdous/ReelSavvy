import React, { createContext, useState } from "react";

// Create a Context
export const IdsContext = createContext({
    id: [],
    setId: () => {},
});

export const IdsProvider = ({ children }) => {
    const [ids, setIds] = useState([]);

    return <IdsContext.Provider value={{ ids, setIds }}>{children}</IdsContext.Provider>;
};
