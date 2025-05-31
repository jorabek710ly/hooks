import React from 'react';
import { useStateValue } from '../../context';
import ProductCards from '../../components/ProductCards';
import { useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";

const Liked = () => {
  const [state] = useStateValue();
  const data = state.likedItems;
  const navigate = useNavigate();

  return (
    <>
      {data.length > 0 ? (
        <ProductCards data={data} />
      ) : (
        <section className="w-full h-[92vh] bg-gradient-to-b from-white to-gray-100 flex items-center justify-center">
          <div className="text-center px-4 py-10 max-w-md mx-auto bg-white shadow-md rounded-2xl border border-gray-200">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
              <IoMdHeartEmpty className="text-blue-500 w-8 h-8" />
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Your liked list is empty
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Tap the ♡ icon on any product to save it here.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="px-5 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
            >
              Browse Products
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default React.memo(Liked);
