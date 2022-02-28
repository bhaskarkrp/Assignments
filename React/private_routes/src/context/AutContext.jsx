import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(false);

    const navigate = useNavigate();

    const handleSignIn = ({ username, password }) => {
        if (username === "admin" && password === "admin") {
            setIsAuth(true);
        } else {
            alert("Please enter correct Credential");
        }
    }

    const handleSignOut = () => setIsAuth(false);

    return (
        <AuthContext.Provider value={{ isAuth, handleSignIn, handleSignOut, navigate }}>{children}</AuthContext.Provider>
    )
}