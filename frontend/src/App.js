import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
function App() {
  return (
      <div className="container-fluid">

        <Router>
          <div className="menu-top">
            <div className="btnHome">
              <Link to="/" style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/bg-menu-top.png'})`}}></Link>
            </div>
            <div className="menu">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="login" element={<Login />} />
            <Route path="Register" element={<Register />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
