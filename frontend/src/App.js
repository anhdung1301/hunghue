import React from 'react';
import './App.css';
import Guest from './navbar/guest';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from './navbar/auth';
import Login from './components/Login';
import Register from './components/Register';
import AuthUser from './components/AuthUser';
function App() {
  const {getToken} = AuthUser();
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      )

}

export default App;
