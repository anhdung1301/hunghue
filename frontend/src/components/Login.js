import React,{useState} from 'react'
import axios from 'axios';
import {Link, Route, Routes, useNavigate, Switch} from 'react-router-dom';
import '../css/LoginForm.css';
import AuthUser from './AuthUser';
import Home from "./Home";
import Register from "./Register";
const Login =() => {
    const [dataForm,setDataForm] = useState({
        "email":"",
        "password":""
    });
    const [error, setError] = useState('');
    const {setToken} = AuthUser();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(dataForm.email !== "" && dataForm.password !== ""){
            const data = {
                email: dataForm.email,
                password: dataForm.password
            };

            try {
                const response = await axios.post(`http://127.0.0.1:8000/api/users/login`,
                    {
                        email: dataForm.email,
                        password: dataForm.password
                    });
                const { token } = response.data;
                setToken(token);
                navigate("/");
            } catch (error) {

                if (error.response && error.response.data && error.response.data.error) {
                    setError(error.response.data.error);
                } else {
                    setError('An error occurred while logging in');
                }
                setTimeout(() => {
                    setError('');
                }, 2000);
            }
        }
    }

    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <h2 className="login-title">Login</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <input
                                type="email"
                                onChange={(e) => setDataForm({...dataForm, "email": e.target.value})}
                                placeholder="Email address"
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                onChange={(e) => setDataForm({...dataForm, "password": e.target.value})}
                                placeholder="Password"
                                required
                                className="input-field"
                            />
                        </div>
                        <button type="submit" className="login-button">Log In</button>
                        {error && <p className="error-message">{error}</p>}
                        <a href="#" className="forgot-password">Forgot password?</a>
                        <hr />
                        <Link to="/register">Tạo tài khoản </Link>
                        <button type="button" className="create-account-button"></button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login
