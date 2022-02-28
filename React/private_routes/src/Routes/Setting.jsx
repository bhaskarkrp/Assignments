import React from 'react'
import { AuthContext } from '../context/AutContext'

export const Setting = () => {

    const { isAuth, navigate } = React.useContext(AuthContext);

    React.useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth])
    return (
        <div>Welcom to Setting</div>
    )
}
