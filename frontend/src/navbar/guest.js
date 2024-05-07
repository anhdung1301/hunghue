import { Routes, Route, Link } from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';

import React from "react";

function Guest() {
    return (
        <>
            <div className="container-fluid">
                <div className="menu-top">
                    <div className="btnHome">
                        <Link to="/"
                              style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-menu-top.png'})`}}></Link>
                    </div>
                    <div className="menu">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Guest;