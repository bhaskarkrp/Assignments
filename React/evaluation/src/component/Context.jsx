import React from 'react';

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [postData, setPostData] = React.useState([]);
    const [sinlePostData, setSinglePostData] = React.useState([]);
    const [user, setUser] = React.useState("");
    const [userPostData, setUserPostData] = React.useState([]);

    const [isLogin, setIsLogin] = React.useState(false);
    const value = { postData, setPostData, isLogin, setIsLogin, sinlePostData, setSinglePostData, user, setUser, userPostData, setUserPostData }


    return (
        <Context.Provider value={value}>{children}</Context.Provider>
    )
}