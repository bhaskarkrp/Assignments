import React from 'react'
import { Context } from '../context/Context';

export const Dashboard = () => {

    const { afterLogin } = React.useContext(Context);
    console.log(afterLogin);
    return (
        <div>Dashboard
            <h1>Hello {afterLogin.fName}</h1>
        </div>
    )
}
