import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';
import { SetGetApi } from "../JS/SetGetApi";

export const LoginForm = () => {

    const [loginData, setloginData] = React.useState({});

    const { getAPI, data } = SetGetApi();

    const navigate = useNavigate();

    const { afterLogin, setAfterLogin } = useContext(Context);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        // console.log(name, checked)
        setloginData({
            ...loginData,
            [name]: value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (loginData.email && loginData.password) {
            // navigate("info");
            getAPI(fetch("http://localhost:3000/data"));

            data.forEach(data => {
                // console.log(data.email, loginData.email);
                if (data.password == loginData.password && data.email == loginData.email) {
                    // console.log(data)
                    setAfterLogin(data);
                }
            })
            console.log(afterLogin)
            if (afterLogin.fName) {
                navigate("dashboard");
            } else {
                alert("Please enter current credentials");
            }
        } else {
            alert("Please be prepare and select both..!")
        }
    }
    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="">Username</label>
                    <input type="email" placeholder="Enter Username...." name="email" onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter Password...." name="password" onChange={changeHandler} />
                </div>
                <input type="submit" value="Login" onClick={onSubmit} />
            </form>
        </div>
    )
}
