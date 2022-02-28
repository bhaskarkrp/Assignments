import React from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AutContext';

export const UserPage = () => {
    const { isAuth, navigate } = React.useContext(AuthContext);
    const [data, setData] = React.useState({});

    const params = useParams();
    // const history = useHistory();
    React.useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        } else {
            fetch(`http://localhost:3000/prouctData/${params.userId}`)
                .then((response) => response.json())
                .then(result => setData(result));
        }
    }, [isAuth, data])
    return (
        <div>Product Details
            <div>
                <p>{data.name}</p>
                <p>{data.price}</p>
                <p>{data.brand}</p>
                <img style={{ width: "300px", height: "300px" }} src={data.image} />
            </div>
            <button onClick={() => navigate("/users")}>Go Back</button>
        </div>
    )
}


// 11:20 video