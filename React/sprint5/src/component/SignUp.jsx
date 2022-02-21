import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';

export const SignUp = () => {

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
        if (userData.attend && userData.laptop) {
            navigate("info");
        } else {
            alert("Please be prepare and select both..!")
        }
    }

    return (
        <div>
            <form action="">
                <div>
                    <input type="checkbox" name="attend" onChange={checkboxChangeHandler} />
                    <label>Can you attend 90% of the classes?</label>
                </div>
                <div>
                    <input type="checkbox" name="laptop" onChange={checkboxChangeHandler} />
                    <label>Do you have a laptop?</label>
                </div>
                <input type="submit" value="Contine" onClick={onSubmitCheckbox} />
            </form>
        </div>
    )
}
