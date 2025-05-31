import React from 'react';
import { useNavigate } from 'react-router-dom';

import LoadingProductCards from "./LoadingProductCards";
import { useStateValue } from "../context/index";

import { IoAdd } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductCards = ({ data, loading }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();

  const handleLikedItem = (product) => {
    dispatch({ type: "ADD_TO_LIKED_ITEMS", payload: product });
  };

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <section className="bg-white py-10 min-h-screen">
      <div className="container mx-auto px-4">
        {loading && <LoadingProductCards />}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data?.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div
                className="relative h-52 flex items-center justify-center bg-white cursor-pointer overflow-hidden rounded-t-xl"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-full object-contain transition-transform duration-300 hover:scale-105"
                />
                {/* Like button inside image */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikedItem(product);
                  }}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white text-blue-600 hover:bg-blue-100 transition"
                >
                  <IoMdHeartEmpty className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-3 mb-4 capitalize">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold text-sm">${product.price}</span>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                  >
                    <IoAdd className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductCards);
