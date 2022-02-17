import React from 'react'
import { useParams } from "react-router-dom";

export const Product = () => {

    const [info, setInfo] = React.useState({});
    // console.log(info)

    const params = useParams();
    // console.log(params)

    React.useEffect(() => {
        if (params.id) {
            // console.log(params.id)
            fetch(`http://localhost:3000/productDetails/${params.id}`)
                .then(response => response.json()).then((data) => {
                    // console.log(data)
                    setInfo(data)
                });
        }
    }, [])
    return (
        <div>
            <h1>Product Detail</h1>
            <div>
                {info.name} : {info.price} : {info.id}
            </div>
            {/* <Outlet /> */}
        </div>
    )
}
