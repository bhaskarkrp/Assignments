import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';

export const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { isLogin, setIsLogin, setUser } = React.useContext(Context);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            if (username === "Bhaskar" && password === "123456" || username === "Kumar" && password === "123456") {
                setIsLogin(true);
                setUser(username);
                navigate("/");

            } else {
                alert("Please enter your username and password")
            }
        }
    }

    React.useEffect(() => {
        if (isLogin) {
            // navigate("/");
            // else {
            setIsLogin(false);
            setUser("");
            navigate("/login");
            // }
        }
    })

    return (
        <div>Login
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">username </label>
                    <input type="text" placeholder="Username.." onChange={(e) => setUsername(e.target.value)} />

                </div>
                <div>
                    <label htmlFor="">Password </label>
                    <input type="text" placeholder="Password.." onChange={(e) => setPassword(e.target.value)} />

                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
