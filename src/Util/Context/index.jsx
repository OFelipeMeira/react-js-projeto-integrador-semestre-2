import { createContext, useState } from "react";
import { globalState } from "./data";

/***  Creating context to use all data created in file './data.jsx',
 in the entire application*/

// object to export data:
export const GlobalContext = createContext()

// context provider:
export const AppContext = ({ children }) => {
    const [contextState, setState] = useState(globalState)
    return (
        <GlobalContext.Provider value={{ contextState, setState }}>
            {children}
        </GlobalContext.Provider>
    )
}