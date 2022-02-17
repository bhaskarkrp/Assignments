import React, { Children } from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

    const [isLogin, setIsLogin] = React.useState(false);

    const login = () => {
        console.log("login");
        fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }),
            headers: {
                "content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                if (data.token) {
                    setIsLogin(true);
                    alert(`Login Successful! TokenID- ${data.token}`)
                } else {
                    alert("Login Unsuccessful!")
                }
            });
    }

    const Logout = () => {
        // console.log("logout");
        alert("Logout Successful!")
        setIsLogin(false)
    };
    return (
        <AuthContext.Provider value={{ isLogin, Logout, login }}>{children}</AuthContext.Provider >
    )
}