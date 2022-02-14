import React from 'react'
import { TableElement } from '../component/TableElement';

export const SetGetApi = () => {

    const [loading, setLoading] = React.useState(false);

    const [data, setData] = React.useState([]);

    const [error, setError] = React.useState(null);


    const getAPI = (api) => {
        setLoading(true);
        api
        .then((response) => {
            return response.json();
            // console.log(response)
        })
        .then((r) => {
            setData(r);
            // console.log(r)
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false);
            setError(null);
            // window.onload()
        });
    }

    const setAPI = (api) => {
        setLoading(true);
        api
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
            <TableElement/>
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
            setError(null);
        });
        alert('Product Added Successfully!');
        window.location.reload();
    }

    const deleteAPI = (api) => {
        api
        .then((response) => response.json())
        .then((d) => setData(d))
        .finally(() => {
            alert('Product Deleted Successfully!');
            window.location.reload()
        });
    }

    
  return {getAPI, loading, setAPI, data, deleteAPI, setData, error};
}
