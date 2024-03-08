import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = () =>{
        const userToken = localStorage.getItem('token');
        return userToken;
    }

    const [token,setToken] = useState(getToken());

    const saveToken = (token) =>{

        localStorage.setItem('token',token);
        setToken(token);
        navigate('/');
    }
    const logout = async () => {
        try {
             await axios.post('http://127.0.0.1:8000/api/users/logout', {}, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            localStorage.removeItem('token');
            navigate("/login");
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }
    return {
        setToken:saveToken,
        token,
        getToken,
        logout,

    }
}