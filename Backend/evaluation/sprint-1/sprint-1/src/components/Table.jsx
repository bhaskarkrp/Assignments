import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TableData } from './TableData';

export const Table = () => {
    const [addresses, setAdresses] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch("http://localhost:8000/api/addresses")
            .then((response) => response.json())
            .then((result) => setAdresses(result));
    }, [])

    console.log(addresses)
    return (
        <div style={{ marginTop: "50px" }}>
            <button onClick={() => navigate(`/create/${addresses.length + 1}`)}>Create New</button>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Floor</th>
                            <th>Street</th>
                            <th>Landmark</th>
                            <th>Area</th>
                            <th>City</th>
                            <th>Pincode</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addresses.map(item => <TableData item={item} key={item.id} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
