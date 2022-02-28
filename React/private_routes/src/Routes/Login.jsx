import React from 'react'
import { AuthContext } from '../context/AutContext';

export const Login = () => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { handleSignIn, isAuth, navigate } = React.useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSignIn({ username, password });
    }

    React.useEffect(() => {
        if (isAuth) {
            navigate("/users");
        }
    }, [isAuth])

    return (
        <div>Login
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your username.." value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="Enter your password.." value={password} onChange={e => setPassword(e.target.value)} />

                <input type="submit" value="Login" />
            </form>
        </div>
    )


}
