import React, { useEffect } from 'react'
import { SetGetApi } from '../JS/SetGetApi';
import { Table } from './Table';
import styles from '../CSS/Form.module.css';

export const Form = () => {
    const [formData, setFormData] = React.useState({ name: "", age: "", address: "", dept: "", salary: "", married: "Not Married" });
    const [page, setPage] = React.useState(1);

    const { getAPI, setAPI, loading, data, error } = SetGetApi();

    function onChangeHandler(event) {
        let { name, value, type, checked } = event.target;
        // console.log(name, value, type, checked);
         let status = checked ? 'Married' : 'Not Married';
        // console.log(checked , status)
        let checkValue = type === 'checkbox' ? status : value;
        // console.log(checkValue)

        setFormData({
            ...formData,
            [name]: checkValue
        });

        // setData([...data, formData]);
        // console.log(data, formData);
    }

    function onClickHandler(event) {
        event.preventDefault();
        // setData([...data, formData]);
        if (formData.name === '' || formData.age === null || formData.address === '' || formData.dept === null || formData.salary === null || formData.married === null) {
            alert('Please Fill all the sections...')
        } else {
            setAPI(fetch("http://localhost:3000/formData", {
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
        getAPI(fetch(`http://localhost:3000/formData?_page=${page}&_limit=5`));
        // return () => {            
        // };
    }, [page]);

    // console.log(page)

    return (
        <div>
            <form onSubmit={onClickHandler}>
                <div>
                    <label>Name: </label>
                    <input type="text" placeholder="Enter your name..." name="name" value={formData.name} onChange={onChangeHandler} />
                </div>
                <div>
                    <label>Age: </label>
                    <input type="number" placeholder="Enter your age..." name="age" value={formData.age} onChange={onChangeHandler} />
                </div>
                <div>
                    <label>Address: </label>
                    <input type="text" placeholder="Enter your address.." name="address" value={formData.address} onChange={onChangeHandler} />
                </div>
                <div>
                    <label>Department: </label>
                    <select name="dept" value={formData.dept} onChange={onChangeHandler} >
                        <option>Select</option>
                        <option>IT</option>
                        <option>Media</option>
                        <option>Analyst</option>
                    </select>
                </div>
                <div>
                    <label>Salary: </label>
                    <input type="number" placeholder="Enter your salary..." name="salary" value={formData.salary} onChange={onChangeHandler} />
                </div>
                <div>
                    <label>Marital status: </label>
                    <input type="checkbox" name="married" value={formData.married} onChange={onChangeHandler} />
                </div>
                <input type="submit" value="submit" />
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
