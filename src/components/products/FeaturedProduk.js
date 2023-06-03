import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FeaturedProduk = () => {
  const [featuredProduk, setFeaturedProduk] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/bc-bakery/v1/produk')
      .then((response) => response.json())
      .then((data) => {
        const featuredProduk = data.filter((produk) => produk.isFeatured === true);
        setFeaturedProduk(featuredProduk);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Featured Produk</h2>
      <div className="grid grid-cols-2 gap-4">
        {featuredProduk.map((produk) => (
          <div key={produk._id} className="bg-gray-200 p-4">
            <Link to={`/produk/${produk._id}`}> {/* Menambahkan link ke halaman detail produk */}
              <img src={produk.gambar} alt={produk.nama} className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-semibold">{produk.nama}</h3>
              <p className="text-gray-700">{produk.deskripsi}</p>
              <p className="text-gray-700">Harga: Rp {produk.harga}</p>
              <p className="text-gray-700">Stok: {produk.stok}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduk;
