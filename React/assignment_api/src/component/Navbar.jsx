import React, { useContext } from 'react'
import { AuthContext } from './AuthContext';

export const Navbar = () => {
    const { login, Logout, isLogin } = useContext(AuthContext);
    return (
        <div style={{ margin: "1rem" }}>Navbar
            <div style={{ margin: "1rem" }}>
                <button onClick={!isLogin ? login : Logout}>{!isLogin ? "Login" : "Logout"}</button>
            </div>
        </div >
    )
}
