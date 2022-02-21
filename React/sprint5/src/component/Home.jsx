import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginForm } from './LoginForm'
// import { SignUp } from './SignUp'

export const Home = () => {
    const navigate = useNavigate();
    return (
        <div>Masai School
            <LoginForm />

            <div>
                <p>Do not have an account?</p>
                <button onClick={() => navigate("signup")}>Sign Up</button>
            </div>
        </div>
    )
}
