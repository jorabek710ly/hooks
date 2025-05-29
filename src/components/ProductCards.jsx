import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlinePlus } from 'react-icons/hi2';
import LoadingProductCards from './LoadingProductCards';

const ProductCards = ({ data, loading }) => {
  const navigate = useNavigate();

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
                className="h-52 flex items-center justify-center bg-gray-100 cursor-pointer overflow-hidden rounded-t-xl"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-3 mb-4">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold text-sm">${product.price}</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
                    <HiOutlinePlus className="w-5 h-5" />
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
