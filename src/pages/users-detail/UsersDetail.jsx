import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

// Icons (heroicons)
import { UserCircleIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, IdentificationIcon } from '@heroicons/react/24/outline';

const UsersDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error } = useFetch(`/users/${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    navigate("*");
    console.error(error);
  }

  return (
    <section className='py-10 bg-gray-50 min-h-screen'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-bold text-gray-800'>User Profile Details</h2>
          <p className='text-gray-500 text-sm'>ID: {id}</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {/* Full Name */}
          <div className='bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center'>
            <UserCircleIcon className='w-8 h-8 text-blue-500 mb-2' />
            <p className='text-sm text-gray-500'>Full Name</p>
            <p className='text-base font-semibold text-gray-800 capitalize'>
              {data?.name?.firstname} {data?.name?.lastname}
            </p>
          </div>

          {/* Username */}
          <div className='bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center'>
            <IdentificationIcon className='w-8 h-8 text-purple-500 mb-2' />
            <p className='text-sm text-gray-500'>Username</p>
            <p className='text-base font-semibold text-gray-800'>@{data?.username}</p>
          </div>

          {/* Email */}
          <div className='bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center'>
            <EnvelopeIcon className='w-8 h-8 text-green-500 mb-2' />
            <p className='text-sm text-gray-500'>Email</p>
            <a href={`mailto:${data?.email}`} className='text-blue-600 hover:underline text-sm'>{data?.email}</a>
          </div>

          {/* Phone */}
          <div className='bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center'>
            <PhoneIcon className='w-8 h-8 text-red-500 mb-2' />
            <p className='text-sm text-gray-500'>Phone</p>
            <p className='text-base font-semibold text-gray-800'>{data?.phone}</p>
          </div>

          {/* Address */}
          <div className='bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center'>
            <MapPinIcon className='w-8 h-8 text-yellow-500 mb-2' />
            <p className='text-sm text-gray-500'>Address</p>
            <p className='text-sm text-gray-700'>
              {data?.address?.number}, {data?.address?.street},<br />
              {data?.address?.city}, {data?.address?.zipcode}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(UsersDetail);
