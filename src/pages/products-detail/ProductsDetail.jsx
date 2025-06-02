import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToLikedItems } from '../../redux/features/liked.slice';

const ProductsDetail = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products/${id}`);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const baseUrl = "https://your-api-domain.com/images/";
  const imageUrl = data?.images?.[0]
    ? data.images[0].startsWith("http")
      ? data.images[0]
      : baseUrl + data.images[0]
    : "/placeholder.png";

  if (!data) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT - IMAGE */}
          <div className="relative w-full aspect-[4/3] rounded-lg border border-gray-200 overflow-hidden flex items-center justify-center bg-gray-50">
            <img
              src={imageUrl}
              alt={data?.title || "Product Image"}
              className="w-auto h-auto max-w-full max-h-full object-contain"
              onError={(e) => e.currentTarget.src = "/placeholder.png"}
            />
            <button
              onClick={() => dispatch(addToLikedItems(data))}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
            >
              <IoMdHeartEmpty className="text-xl text-blue-600" />
            </button>
          </div>

          {/* RIGHT - DETAILS */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold text-gray-900">{data?.title}</h1>

            <p className="text-gray-600 leading-relaxed text-base">{data?.description}</p>

            <div className="text-2xl font-bold text-blue-600">${data?.price}</div>

            <ul className="text-sm text-gray-500 space-y-1">
              <li><span className="font-medium text-gray-700">Rating:</span> {data?.rating?.rate} / 5</li>
              <li><span className="font-medium text-gray-700">Reviews:</span> {data?.rating?.count}</li>
              <li><span className="font-medium text-gray-700">Stock:</span> {data?.stock}</li>
              <li><span className="font-medium text-gray-700">Brand:</span> {data?.brand || "Not Found"}</li>
              <li><span className="font-medium text-gray-700">Availability:</span> {data?.availabilityStatus || "In Stock"}</li>
              <li><span className="font-medium text-gray-700">Shipping:</span> {data?.shippingInformation || "Free"}</li>
              <li><span className="font-medium text-gray-700">Warranty:</span> {data?.warrantyInformation || "Not Found"}</li>
              <li><span className="font-medium text-gray-700">Return Policy:</span> {data?.returnPolicy || "Unavailable"}</li>
            </ul>

            <button className="mt-4 px-6 py-3 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              +
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductsDetail);
