import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataKategori() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/bc-bakery/v1/kategori');
        setData(response.data);
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    }

    fetchData();
  }, []);

  const [jumlahProduk, setJumlahProduk] = useState({});

  useEffect(() => {
    async function fetchJumlahProduk() {
      try {
        const promises = data.map(async (kategori) => {
          const response = await axios.get(`http://localhost:8080/bc-bakery/v1/kategori/${kategori._id}/jumlah-produk`);
          return {
            kategoriId: kategori._id,
            jumlah: response.data.jumlahProduk,
          };
        });

        const jumlahProdukMap = await Promise.all(promises);
        const jumlahProdukObj = jumlahProdukMap.reduce((acc, curr) => {
          acc[curr.kategoriId] = curr.jumlah;
          return acc;
        }, {});

        setJumlahProduk(jumlahProdukObj);
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    }

    fetchJumlahProduk();
  }, [data]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Kategori</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((kategori) => (
          <div key={kategori._id} className="border border-gray-300 rounded p-4">
            <h2 className="text-xl font-semibold mb-2">{kategori.nama}</h2>
            <p className="text-gray-600 mb-2">Jumlah Produk: {jumlahProduk[kategori._id] || 0}</p>
            <img src={kategori.gambar} alt={kategori.nama} className="object-contain h-48 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataKategori;
