import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6 text-gray-500">Kechirasiz, bu sahifa topilmadi.</p>

      <img
        src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt="404 not found"
        className="w-64 h-auto mb-6"
      />

      <button
        onClick={() => navigate('/')}
        className="px-6 py-2 border border-gray-400 rounded-md hover:bg-gray-100 transition"
      >
        ⬅ Bosh sahifaga qaytish
      </button>
    </div>
  );
};

export default NotFound;
