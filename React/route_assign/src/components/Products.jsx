import React from 'react'
import { Outlet } from 'react-router-dom';
import { ProductTable } from './ProductTable';

export const Products = () => {

    const [detail, setDetail] = React.useState([])

    React.useEffect(() => {
        fetch("http://localhost:3000/productDetails")
            .then((response) => response.json()).then((data) => setDetail(data))
    }, []);
    // console.log(detail)

    return (
        <div>
            <h1>All Products</h1>
            <ol>
                {detail.map((item) => <ProductTable key={item.id} item={item} />)}
            </ol>
        </div>
    )
}
