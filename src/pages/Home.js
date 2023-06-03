import React from 'react';
import { Route } from 'react-router-dom';
import Category from '../components/products/Category';
import FeaturedProduk from '../components/products/FeaturedProduk';
import RecentProduk from '../components/products/RecentProduk';
import Navbar from '../components/common/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Category/>
      <FeaturedProduk/>
      <RecentProduk/>
    </div>
  );
};

export default Home;
