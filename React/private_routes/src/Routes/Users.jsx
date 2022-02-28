import React from 'react'
import { AuthContext } from '../context/AutContext'

export const Users = () => {
    const { isAuth, navigate } = React.useContext(AuthContext);

    const [data, setData] = React.useState([]);


    React.useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        } else {
            fetch("http://localhost:3000/prouctData")
                .then((response) => response.json())
                .then((result) => setData(result));
        }
    }, [isAuth])
    return (
        <div>Products
            <div>
                <ol>
                    {data.map((item) =>
                    (
                        <li>
                            <h3>Name: {item.name}</h3>
                            <h4>Price : {item.price}</h4>
                            <button onClick={() => navigate(`/users/${item.id}`)} key={item.id}>More Details</button>
                        </li>
                    )
                    )}
                </ol>

                <button onClick={() => navigate(`/users/Setting`)}>Setting</button>
            </div>
        </div>
    )
}
