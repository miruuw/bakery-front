import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-lg font-bold">Informasi Kontak</h4>
            <p>Alamat: Jalan Contoh No. 123, Kota Contoh</p>
            <p>Telepon: 0123456789</p>
            <p>Email: info@example.com</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Tautan Sosial Media</h4>
            <div className="flex space-x-4">
              <button className="text-white hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </button>
              <button className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="text-white hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
