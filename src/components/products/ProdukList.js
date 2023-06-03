import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProdukList = () => {
  const [kategori, setKategori] = useState([]);
  const [selectedKategori, setSelectedKategori] = useState('');
  const [produkList, setProdukList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/bc-bakery/v1/kategori')
      .then((response) => response.json())
      .then((data) => {
        setKategori(data);
        if (data.length > 0) {
          setSelectedKategori(data[0]._id);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    const fetchProdukList = async () => {
      try {
        let url = 'http://localhost:8080/bc-bakery/v1/produk';
        if (selectedKategori) {
          url += `?kategori=${selectedKategori}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setProdukList(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProdukList();
  }, [selectedKategori]);

  const handleKategoriChange = (event) => {
    setSelectedKategori(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Produk List</h2>
      <div className="flex items-center mb-4">
        <label htmlFor="kategori" className="mr-2">
          Pilih Kategori:
        </label>
        <select
          id="kategori"
          className="p-2 border border-gray-300 rounded"
          value={selectedKategori}
          onChange={handleKategoriChange}
        >
          {kategori.map((item) => (
            <option key={item._id} value={item._id}>
              {item.nama}
            </option>
          ))}
        </select>
      </div>
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

export default ProdukList;
