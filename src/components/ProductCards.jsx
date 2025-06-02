import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// Loading Product Cards
import LoadingProductCards from "./LoadingProductCards";
// Icons
import { IoAdd } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

// Redux hooks and actions
import { useDispatch, useSelector } from 'react-redux';
import { addToLikedItems } from '../redux/features/liked.slice';


const ProductCards = ({ data, loading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likedItems = useSelector(state => state.likedSlice.likedItemsList);
  const [isClicked, setIsClicked] = useState(null);

  const handleLikedItem = (product) => {
    dispatch(addToLikedItems(product));
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setIsClicked(product.id);
    setTimeout(() => setIsClicked(null), 450);
  }

  return (
    <section className="bg-white py-10 min-h-screen">
      <div className="container mx-auto px-4">
        {loading && <LoadingProductCards />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data?.map(product => (
            <div
              key={product.id}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div
                className="relative h-52 flex items-center justify-center bg-white cursor-pointer overflow-hidden rounded-t-xl"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <img
                  src={product.images?.[0] || product.image || "/placeholder.png"}
                  alt={product.title}
                  loading="lazy"
                  className="h-full object-contain transition-transform duration-300 hover:scale-105"
                />
                <button
                  onClick={e => {
                    e.stopPropagation();
                    handleLikedItem(product);
                  }}
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white text-blue-600 hover:bg-blue-100 transition"
                >
                  {(likedItems.some(item => item.id === product.id)) ? 
                    <IoMdHeart className="w-5 h-5" /> : 
                    <IoMdHeartEmpty className="w-5 h-5" />
                  }
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
                    className={`w-8 h-8 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition ${isClicked === product.id ? "animate-pulse" : ""}`}
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
  )
}

export default React.memo(ProductCards);
