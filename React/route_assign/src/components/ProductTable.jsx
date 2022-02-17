import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Li_item = styled.li`
    border-bottom: 1px solid black;
    font-size: 20px;
    padding: 1rem;
`
const Button = styled.button`
    padding: 0.5rem; 0.8rem
    margin: 1rem;
    font-size: 20px;
    background-color: #108899;
    border: none;
`

export const ProductTable = ({ item }) => {


    const navigate = useNavigate();
    return (
        <div>
            <Li_item>
                <p>Name : {item.name}</p>
                <p>Price : {item.price}</p>
                <Button onClick={() => navigate(`/products/${item.id}`)} >More Details</Button>
            </Li_item>
        </div>
    )
}
