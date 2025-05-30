import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

const LoadingUserCards = () => {
  const loadingUsers = Array(10).fill("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {loadingUsers.map((_, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
          style={{ cursor: "default" }}
        >
          {/* Icon Placeholder */}
          <div className="flex items-center justify-center mb-4">
            <UserIcon className="w-10 h-10 text-gray-200" />
          </div>

          {/* First Name Placeholder */}
          <div className="text-center space-y-1">
            <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div> {/* Label placeholder */}
            <div className="h-6 bg-gray-300 rounded w-32 mx-auto"></div> {/* Value placeholder */}
          </div>

          {/* Last Name Placeholder */}
          <div className="text-center mt-6 space-y-1">
            <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div> {/* Label placeholder */}
            <div className="h-6 bg-gray-300 rounded w-32 mx-auto"></div> {/* Value placeholder */}
          </div>

          {/* Username Placeholder */}
          <div className="text-center mt-8">
            <div className="h-6 bg-blue-200 rounded w-24 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(LoadingUserCards);

