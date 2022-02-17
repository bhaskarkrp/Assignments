import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    padding: 0.5rem; 0.8rem
    margin: 1rem;
    font-size: 20px;
    background-color: #108899;
    border: none;
`

export const Home = () => {

    const navigate = useNavigate();
    return (
        <div>
            <h1>Home</h1>
            <div>
                <Button onClick={() => navigate("/products")}>Show All Products</Button>
            </div>
        </div>
    )
}
