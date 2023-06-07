import React from 'react';
import Category from '../components/products/Category';
import FeaturedProduk from '../components/products/FeaturedProduk';
import RecentProduk from '../components/products/RecentProduk';
import Carousel from '../components/products/Carousel';
import ServiceUnggulan from '../components/products/ServiceUnggulan';


const Home = () => {
  return (
    <div>
      <Carousel/>
      <ServiceUnggulan/>
      <Category/>
      <FeaturedProduk/>
      <RecentProduk/>
    </div>
  );
};

export default Home;
