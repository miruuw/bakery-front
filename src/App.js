import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/users/Login';
import Register from './components/users/Register';
import ProdukDetail from './components/products/ProdukDetail';
import ProdukList from './components/products/ProdukList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> <Route path="/produk/:id" element={<ProdukDetail />} />
        <Route path="/produklist" element={<ProdukList />} /> 
      </Routes>
    </Router>
  );
};

export default App;
