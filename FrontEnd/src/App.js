import React from "react";
import Login from "./component/Login";
import Register from './component/Register'
import {  Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Routes>
    <Route element={<Register/>} path="/register"/>
    <Route element={<Login/>} path="/Login"/>
    </Routes>
    </div>
  );
};

export default App;
