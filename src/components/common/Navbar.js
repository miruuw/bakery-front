import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8080/bc-bakery/v1/kategori');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDropdownClose);
    return () => {
      document.removeEventListener('click', handleDropdownClose);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="logo">
        <Link to="/" className="text-xl font-bold text-white">Logo</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">Beranda</Link>
        </li>
        <li>
          <Link to="/produklist" className="text-white hover:text-gray-300">Produk</Link>
        </li>
        <li>
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
              <button
                type="button"
                className={`text-white hover:text-gray-300 focus:outline-none ${isDropdownOpen ? 'rotate-0' : ''}`}
                id="kategori-menu"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={handleDropdownToggle}
              >
                <span className="mr-2">Kategori</span>
                <svg className="h-5 w-5 transition-transform duration-300 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300" role="menu" aria-orientation="vertical" aria-labelledby="kategori-menu">
                <div className="py-1" role="none">
                  {categories.map((category) => (
                    <Link key={category._id} to={`/kategori/${category._id}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{category.nama}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </li>
        <li>
          <Link to="/cart" className="text-white hover:text-gray-300">Keranjang</Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-gray-300">Masuk</Link>
        </li>
        <li>
          <Link to="/signup" className="text-white hover:text-gray-300">Daftar</Link>
        </li>
        <li>
          <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
