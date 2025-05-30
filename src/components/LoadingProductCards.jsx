import React from 'react';

const LoadingProducts = () => {
  const loadingProducts = Array(20).fill("");

  return (
    <div className="grid grid-cols-1 min-[320px]:grid-cols-2 min-[480px]:grid-cols-3 min-[940px]:grid-cols-4 lg:grid-cols-5 gap-x-2.5 gap-y-4 min-[700px]:gap-2">
      {loadingProducts.map((_, index) => (
        <div
          key={index}
          className="bg-gray-50 border border-gray-300 rounded-xl overflow-hidden"
        >
          {/* Image skeleton */}
          <div className="h-[160px] sm:h-[220px] md:h-[289px] bg-gray-200 rounded-t-xl"></div>

          {/* Content skeleton */}
          <div className="p-3 h-[182px] flex flex-col justify-between">
            <div>
              <div className="h-4 w-[90%] bg-gray-300 rounded mb-1.5"></div>
              <div className="h-4 w-[60%] bg-gray-300 rounded mb-3"></div>

              <div className="h-3 w-[90%] bg-gray-200 rounded mb-1"></div>
              <div className="h-3 w-[90%] bg-gray-200 rounded mb-1"></div>
              <div className="h-3 w-[75%] bg-gray-200 rounded mb-7"></div>
            </div>

            <div className="h-5 w-[25%] min-[480px]:w-[35%] lg:w-[25%] bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(LoadingProducts);

