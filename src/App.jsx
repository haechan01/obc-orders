import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Reset from './pages/Auth/Reset';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </Router>
  );
}

export default App;
