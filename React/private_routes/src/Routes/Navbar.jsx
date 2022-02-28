import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AutContext'

const links = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/about",
        title: "About"
    },
    {
        to: "/users",
        title: "Users"
    },
    {
        to: "/login",
        title: "Login"
    }
]


export const Navbar = () => {

    const { isAuth, handleSignOut } = React.useContext(AuthContext);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none' }}>
            {
                links.map(({ to, title }) => (
                    <div style={{ padding: "0.5rem" }}>
                        {
                            title === "Login" ?
                                !isAuth ? (<Link to={to} >{title}</Link>)
                                    : (<a style={{ cursor: "pointer" }} onClick={handleSignOut}>Logout</a>)
                                : (<Link to={to} >{title}</Link>)
                        }
                    </div>
                ))
            }
        </div >
    )
}
