import {Routes, Route,} from 'react-router-dom';
import React from "react";
import Home from "../components/Home";
import AuthUser from "../components/AuthUser";


function Auth() {

    const {token,logout} = AuthUser();
    const handleLogout = () => {
        if(token != undefined){
            logout();
        }
    };
    return (
        <>
            <div className="container-fluid">
                <div className="menu-top">
                    <div className="menu">
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </>
    )
}

export default Auth;