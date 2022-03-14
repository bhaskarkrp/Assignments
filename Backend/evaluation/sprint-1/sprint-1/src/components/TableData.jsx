import React from 'react';
import axios from 'axios';

export const TableData = ({ item }) => {

    const deleteHandler = () => {
        axios.get(`http://localhost:8000/api/addresses/${item.id}`)
    }

    return (

        <tr style={{ margin: "10px" }}>
            <td>{item.id}</td>
            <td>{item.floor}</td>
            <td>{item.street}</td>
            <td>{item.landmark}</td>
            <td>{item.area}</td>
            <td>{item.city}</td>
            <td>{item.pincode}</td>
            <td>
                <div>
                    <button>Edit</button>
                    <button onClick={deleteHandler}>Delete</button>
                </div>
            </td>

        </tr>

    )
}
