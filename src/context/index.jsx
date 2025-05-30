import { createContext, useContext, useReducer, useEffect } from "react"

const Context = createContext();

export const ContextProvider = ({ children, reducer, initialState }) => {
    const store = useReducer(reducer, initialState);
    return <Context.Provider value={store}>{children}</Context.Provider>
}

export const useStateValue = () => useContext(Context);