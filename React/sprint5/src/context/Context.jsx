import React, { createContext } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [userData, setUserData] = React.useState({ attend: "", laptop: "" });

    const [afterLogin, setAfterLogin] = React.useState({});



    return <Context.Provider value={{ userData, setUserData, afterLogin, setAfterLogin }}>{children}</Context.Provider>
}