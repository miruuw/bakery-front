import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecentProduk = () => {
  const [recentProduk, setRecentProduk] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/bc-bakery/v1/produk')
      .then((response) => response.json())
      .then((data) => {
        const sortedProduk = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const recentProduk = sortedProduk.slice(0, 8);
        setRecentProduk(recentProduk);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Produk Terbaru</h2>
      <div className="grid grid-cols-4 gap-4">
        {recentProduk.map((produk) => (
          <Link key={produk._id} to={`/produk/${produk._id}`}>
            <div className="bg-gray-200 p-4">
              <img src={produk.gambar} alt={produk.nama} className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-semibold">{produk.nama}</h3>
              <p className="text-gray-700">{produk.deskripsi}</p>
              <p className="text-gray-700">Harga: Rp {produk.harga}</p>
              <p className="text-gray-700">Stok: {produk.stok}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentProduk;
