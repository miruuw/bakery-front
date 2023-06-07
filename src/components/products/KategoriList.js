import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const KategoriList = () => {
  const [produkList, setProdukList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProdukList = async () => {
      try {
        const response = await fetch(`http://localhost:8080/bc-bakery/v1/kategori/${categoryId}/produk`);
        if (!response.ok) {
          throw new Error('Failed to fetch product list');
        }
        const data = await response.json();
        setProdukList(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProdukList();
  }, [categoryId]);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Produk List</h2>
      <div className="grid grid-cols-4 gap-4">
        {produkList.map((produk) => (
          <Link key={produk._id} to={`/produk/${produk._id}`}>
            <div className="bg-gray-200 p-4">
              <img
                src={produk.gambar}
                alt={produk.nama}
                className="w-full h-48 object-cover mb-2"
              />
              <h3 className="text-lg font-semibold">{produk.nama}</h3>
              <p className="text-gray-700">{produk.deskripsi}</p>
              <p className="text-gray-700">Harga: {produk.harga}</p>
              <p className="text-gray-700">Stok: {produk.stok}</p>
              <p className="text-gray-700">Kategori: {produk.kategori.nama}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default KategoriList;
