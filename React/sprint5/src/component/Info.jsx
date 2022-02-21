import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';

export const Info = () => {
    const { userData, setUserData } = useContext(Context);

    // console.log(userData, setUserData);

    const navigate = useNavigate();

    const checkboxChangeHandler = (event) => {
        const { name, checked } = event.target;
        // console.log(name, checked)
        setUserData({
            ...userData,
            [name]: checked
        });
    }

    const onSubmitCheckbox = (event) => {
        event.preventDefault();
        if (userData.one && userData.two && userData.three && userData.four && userData.five) {
            navigate("register");
        } else {
            alert("Please be prepare and select both..!")
        }
    }

    return (
        <div>
            <form action="">
                <div>
                    <input type="checkbox" name="one" onChange={checkboxChangeHandler} />
                    <label>1?</label>
                </div>
                <div>
                    <input type="checkbox" name="two" onChange={checkboxChangeHandler} />
                    <label>2?</label>
                </div>
                <div>
                    <input type="checkbox" name="three" onChange={checkboxChangeHandler} />
                    <label>3?</label>
                </div>
                <div>
                    <input type="checkbox" name="four" onChange={checkboxChangeHandler} />
                    <label>4?</label>
                </div><div>
                    <input type="checkbox" name="five" onChange={checkboxChangeHandler} />
                    <label>5?</label>
                </div>
                <input type="submit" value="Contine" onClick={onSubmitCheckbox} />
            </form>
        </div>
    )
}
