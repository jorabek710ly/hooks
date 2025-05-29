import React from 'react';
import { NavLink } from 'react-router-dom';
import LoadingUserCards from './LoadingUserCards';

// Icons (heroicons)
import { UserIcon } from '@heroicons/react/24/outline';

const UserCards = ({ data, loading }) => {
  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {loading && <LoadingUserCards />}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data?.map((user) => (
            <div
              key={user.id}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-center mb-4">
                <UserIcon className="w-10 h-10 text-blue-600" />
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500">First Name</p>
                <p className="text-base font-semibold text-gray-800 capitalize">
                  {user.name.firstname}
                </p>
              </div>

              <div className="text-center mt-2">
                <p className="text-sm text-gray-500">Last Name</p>
                <p className="text-base font-semibold text-gray-800 capitalize">
                  {user.name.lastname}
                </p>
              </div>

              <div className="text-center mt-4">
                <NavLink
                  to={`/users/${user.id}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  @{user.username}
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(UserCards);
