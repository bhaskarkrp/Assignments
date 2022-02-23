import React from 'react';

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [data, setData] = React.useState([]);
    const [select, setSelect] = React.useState("default");

    return (
        <Context.Provider value={{ data, setData, select, setSelect }}>{children}</Context.Provider>
    )
}