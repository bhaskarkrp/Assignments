import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from './Context'

export const Navbar = () => {


    const h3 = {
        padding: "1rem"
    }
    const { user, isLogin } = React.useContext(Context);
    const navigate = useNavigate();
    return (
        <div>Navbar
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h3 style={h3} onClick={() => navigate("/post")}>Posts</h3>
                <h3 style={h3} onClick={() => navigate(`/${user}/post`)}>My Posts</h3>
                <h3 style={h3}>{user}</h3>
                <h3 style={h3} onClick={() => navigate(`/login`)}>{!isLogin ? "Login" : "Logout"}</h3>
            </div>
        </div>
    )
}
