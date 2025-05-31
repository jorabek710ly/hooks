import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import useFetch from '../../hooks/useFetch';
import { useStateValue } from '../../context';

const ProductsDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error } = useFetch(`/products/${id}`);

  if (error) {
    navigate("*");
    console.error(error);
  }

  const [, dispatch] = useStateValue();
  const handleLikedItem = (product) => {
    dispatch({ type: "ADD_TO_LIKED_ITEMS", payload: product });
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Product Image */}
          <div className="relative w-full aspect-[4/3] rounded-lg border border-gray-200 overflow-hidden flex items-center justify-center bg-gray-50">
            {data?.image && (
              <img
                src={data.image}
                alt={data.title}
                className="w-auto h-auto max-w-full max-h-full object-contain"
              />
            )}
            {/* Like Icon - positioned inside top-right */}
            <button
              onClick={() => handleLikedItem(data)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
            >
              <IoMdHeartEmpty className="text-xl text-blue-600" />
            </button>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-gray-900">{data?.title}</h1>

            <p className="text-gray-600 leading-relaxed text-base">
              {data?.description}
            </p>

            <div className="text-2xl font-bold text-blue-600">${data?.price}</div>

            <ul className="text-sm text-gray-500 space-y-1">
              <li><span className="font-medium text-gray-700">Rating:</span> {data?.rating?.rate} / 5</li>
              <li><span className="font-medium text-gray-700">Reviews:</span> {data?.rating?.count || 0}</li>
              <li><span className="font-medium text-gray-700">Brand:</span> Not Found</li>
              <li><span className="font-medium text-gray-700">Availability:</span> In Stock</li>
              <li><span className="font-medium text-gray-700">Shipping:</span> Free</li>
              <li><span className="font-medium text-gray-700">Warranty:</span> Not Found</li>
            </ul>

            <button className="mt-4 px-6 py-3 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductsDetail);
