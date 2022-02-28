import React from 'react'
import { AuthContext } from '../context/AutContext'

export const Logout = () => {

    const { handleSignOut } = React.useContext(AuthContext);
    return (
        <div>Logout</div>
    )
}
