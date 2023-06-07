import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Keranjang = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [produk, setProduk] = useState(null);
  const [jumlah, setJumlah] = useState(1);
  const [gambar, setGambar] = useState('');
  const [harga, setHarga] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const namaProduk = searchParams.get('produk');
    const jumlahProduk = parseInt(searchParams.get('jumlah'));
    const gambarProduk = searchParams.get('gambar');
    const hargaProduk = searchParams.get('harga');

    if (!namaProduk || isNaN(jumlahProduk) || !gambarProduk || !hargaProduk) {
      navigate('/');
      return;
    }

    setProduk(namaProduk);
    setJumlah(jumlahProduk);
    setGambar(gambarProduk);
    setHarga(hargaProduk);
  }, [location.search, navigate]);

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

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:8080/bc-bakery/v1/pesanan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pesananItem: [
            {
              kuantitas: jumlah,
              produk: produk,
            },
          ],
          alamatPengiriman1: 'Alamat Pengiriman 1',
          alamatPengiriman2: 'Alamat Pengiriman 2',
          telepon: 'Nomor Telepon',
          kota: 'Kota',
          status: 'Status',
          pengguna: 'ID Pengguna',
        }),
      });

      if (!response.ok) {
        throw new Error('Gagal membuat pesanan');
      }

      navigate('/pembayaran');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!produk) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Keranjang</h2>
      <div className="flex items-center mb-4">
        <img src={gambar} alt={produk} className="w-48 h-auto object-cover mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{produk}</h3>
          <p className="text-gray-700">Harga: {harga}</p>
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
          <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keranjang;
