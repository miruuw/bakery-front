import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/users/Login';
import Register from './components/users/Register';
import ProdukDetail from './components/products/ProdukDetail';
import ProdukList from './components/products/ProdukList';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Keranjang from './components/orders/Keranjang';
import KategoriList from './components/products/KategoriList';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/produklist" element={<ProdukList />} />
        <Route path="/kategoriDetail" element={<KategoriList/>}/>
        <Route path="/produk/:id" element={<ProdukDetail />} />
        <Route path="/keranjang" element={<Keranjang />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
