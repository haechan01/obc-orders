import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Reset from './pages/Auth/Reset';
import Order from './pages/Catalog/Order';
import MyOrder from './pages/Checkout/MyOrder';
import Orders from './pages/Orders';
import Address from './pages/Address'
import { RecoilRoot } from "recoil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<MyOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </Router>
  );
}

export default App;
