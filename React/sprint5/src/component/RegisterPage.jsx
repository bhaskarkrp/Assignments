import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';
import { SetGetApi } from '../JS/SetGetApi';

export const RegisterPage = () => {

    const { userData, setUserData } = useContext(Context);

    const { setAPI } = SetGetApi();

    // console.log(userData, setUserData);

    const navigate = useNavigate();

    const checkboxChangeHandler = (event) => {
        const { name, value } = event.target;
        // console.log(name, checked)
        setUserData({
            ...userData,
            [name]: value
        });
    }

    const onSubmitCheckbox = (event) => {
        event.preventDefault();
        // console.log(userData)
        // console.log(JSON.stringify(userData));
        if (userData.fName && userData.email && userData.password) {
            setAPI(fetch("http://localhost:3000/data", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(userData)
            }))
            // navigate("info");
        } else {
            alert("Please be prepare and select both..!")
        }
    }
    return (
        <div>Register Here with the Information
            <form action="">
                <div>
                    <label>Full Name</label>
                    <input type="text" name="fName" onChange={checkboxChangeHandler} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" onChange={checkboxChangeHandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={checkboxChangeHandler} />
                </div>
                <input type="submit" value="Register" onClick={onSubmitCheckbox} />
            </form>
        </div>
    )
}
