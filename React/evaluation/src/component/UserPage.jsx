import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Context } from './Context';

export const UserPage = () => {

    const navigate = useNavigate();
    const { isLogin, setIsLogin } = React.useContext(Context);
    React.useEffect(() => {
        if (!isLogin) {
            navigate("/login");
        }
    })
    return (
        <div>UserPage</div>
    )
}
