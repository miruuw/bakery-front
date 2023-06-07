import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProdukDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [produk, setProduk] = useState(null);
  const [jumlah, setJumlah] = useState(1);

  useEffect(() => {
    const fetchProdukDetail = async () => {
      try {
        const response = await fetch(`http://localhost:8080/bc-bakery/v1/produk/${id}`);
        if (!response.ok) {
          throw new Error('Produk tidak ditemukan');
        }
        const data = await response.json();
        setProduk(data);
      } catch (error) {
        console.error('Error:', error);
        setProduk(null);
      }
    };

    fetchProdukDetail();
  }, [id]);

  const handleJumlahChange = (event) => {
    setJumlah(parseInt(event.target.value));
  };

  const tambahJumlah = () => {
    setJumlah(jumlah + 1);
  };

  const kurangiJumlah = () => {
    if (jumlah > 1) {
      setJumlah(jumlah - 1);
    }
  };

  const masukkanKeKeranjang = () => {
    navigate(`/keranjang?produk=${produk.nama}&jumlah=${jumlah}`);
  };

  const beliLangsung = () => {
    navigate(`/pembayaran?produk=${produk.nama}&jumlah=${jumlah}`);
  };

  if (!produk) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Produk Detail</h2>
      <div className="flex items-center mb-4">
        <img src={produk.gambar} alt={produk.nama} className="w-48 h-auto object-cover mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{produk.nama}</h3>
          <p className="text-gray-700">{produk.deskripsi}</p>
          <p className="text-gray-700">Harga: {produk.harga}</p>
          <div className="flex items-center mt-4">
            <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded-l" onClick={kurangiJumlah}>
              -
            </button>
            <input
              type="number"
              className="w-16 py-1 px-2 text-center border border-gray-300 rounded"
              min="1"
              value={jumlah}
              onChange={handleJumlahChange}
            />
            <button className="bg-gray-200 text-gray-700 py-1 px-2 rounded-r" onClick={tambahJumlah}>
              +
            </button>
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
            onClick={masukkanKeKeranjang}
          >
            Masukkan ke Keranjang
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 ml-4 mt-4 rounded"
            onClick={beliLangsung}
          >
            Beli Langsung
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdukDetail;
