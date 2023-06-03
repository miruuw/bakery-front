import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/bc-bakery/v1/pengguna/daftar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama: name,
          email,
          kataSandi: password,
        }),
      });

      if (response.ok) {
        // Setelah registrasi berhasil, lakukan redirect ke halaman login
        navigate('/login');
      } else {
        const errorData = await response.json();
        setRegisterError(errorData.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {registerError && <div className="text-red-500 mb-4">{registerError}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="mr-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mr-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="mr-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
      <p className="mt-4">
        Sudah punya akun? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
