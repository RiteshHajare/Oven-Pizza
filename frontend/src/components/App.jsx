import React, { useState } from 'react'
import Register from './Register'
import Homepage from './user/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from './user/CustomPizza';
import Cart from './user/Cart';
import Login from './Login';
import Orders from './user/Orders';
import AdminVeggies from './admin/AdminVeggies';
import AdminPage from './admin/AdminPage';
import AdminCheese from './admin/AdminCheese';
import AdminBases from './admin/AdminBases';
import AdminSauce from './admin/AdminSauce';

function App() {


    return (
        <div>
            <BrowserRouter >
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/base" element={<Base />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/adminbases" element={<AdminBases />} />
                    <Route path="/adminsauce" element={<AdminSauce />} />
                    <Route path="/admincheese" element={<AdminCheese />} />
                    <Route path="/adminveggies" element={<AdminVeggies />} />
                    {/* <Route path="/*" element={<ErrPage />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

// C:\Users\rites\Desktop\Web Development\Level3