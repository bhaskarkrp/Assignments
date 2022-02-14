import React, { useEffect } from 'react'
import { SetGetApi } from '../JS/SetGetApi';
import { Table } from './Table';
import styles from '../CSS/Form.module.css';

export const Form = () => {
    const [formData, setFormData] = React.useState({ title: "", cost: "", category: "", image: null});
    const [page, setPage] = React.useState(1);

    const { getAPI, setAPI, loading, data, error } = SetGetApi();

    function onChangeHandler(event) {
        let { name, value, type } = event.target;
        // console.log(name, value, type);
        let finalValue = (event.target.files && event.target.files[0]) ? URL.createObjectURL(event.target.files[0]) : value;
        console.log(finalValue)
        setFormData({
            ...formData,
            [name]: finalValue
        });

        // setData([...data, formData]);
        // console.log(data, formData);
    }

    function onClickHandler(event) {
        event.preventDefault();
        // setData([...data, formData]);
        if (formData.title === '' || formData.cost === null || formData.category === null ) {
            alert('Please Fill all the sections...')
        } else {
            setAPI(fetch("http://localhost:3000/productData", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(formData)
            }))
            // setPage(1);
        }

        // console.log(data)
    }

    useEffect(() => {
        getAPI(fetch(`http://localhost:3000/productData?_page=${page}&_limit=5`));
        // return () => {            
        // };
    }, [page]);

    // console.log(page)

    return (
        <div>
            <form onSubmit={onClickHandler}>
                <div>
                    <label>Product Name: </label>
                    <input type="text" placeholder="Enter Product name..." name="title" value={formData.title} onChange={onChangeHandler} />
                </div>
                <div>
                    <label>Product Cost: </label>
                    <input type="number" placeholder="Enter Product cost..." name="cost" value={formData.cost} onChange={onChangeHandler} />
                </div>
                <div>
                    <label>category: </label>
                    <select name="category" value={formData.category} onChange={onChangeHandler} >
                        <option>Select</option>
                        <option>Vegetables</option>
                        <option>Fruits</option>
                        <option>Provisions</option>
                    </select>
                </div>
                <div>
                    <input type="file" name="image" onChange={onChangeHandler}/>
                </div>
                <input type="submit" value="submit"/>
            </form>

            {/* {error === null ? error : ( */}
                {loading ? "Loading...." : data.length > 0 ?
                <Table data_array={data}
                /> : null}
            {/* )} */}
            <div>
                <button onClick={() => {
                    if (page > 1) {
                        // console.log(page)
                        return setPage(page - 1)
                    } else {
                        return setPage(1)
                    }
                }}>Prev</button>
                <button>{data.length > 0 ? page : null}</button>
                <button onClick={() => {
                    console.log(page, data.length)
                    if (page <= page+Math.ceil(data.length/5) && data.length>0) {
                        return setPage(page + 1);
                    }
                }}>Next</button>
            </div>
        </div>
    )
}
