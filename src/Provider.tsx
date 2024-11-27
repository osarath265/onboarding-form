import React, { createContext, useContext, useState } from "react";
import { MyContext } from "./App";

// Create the context

export const MyContextProvider = ({ children } : any) => {
    const [state, setState] = useState({});

    const updateState = (newValue : any) => setState(newValue);


    return (
        <MyContext.Provider value={{ state, updateState }}>
            {children}
        </MyContext.Provider>
    );
}


