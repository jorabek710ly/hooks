// src/components/Footer.jsx
import React, { useState } from 'react';
import { footerData } from '../static'; // yoki '../../static' agar papkalar farqli bo‘lsa
import { FaTelegramPlane, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim() === '') {
      alert('Email manzilingizni kiriting');
      return;
    }
    alert(`Rahmat, ${email} uchun obuna bo'lganingiz uchun!`);
    setEmail('');
  };

  return (
    <footer className='site_footer py-[30px] sm:py-[45px] border-t border-[#3d444d] bg-[#02040a]'>
      <div className='footer_wrapper container mx-auto grid grid-cols-1 gap-[20px] sm:gap-[30px] lg:gap-[40px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

        {/* 1-ustun: Storé */}
        <div className='text-white flex flex-col gap-[8px] sm:gap-[14px]'>
          <p className='text-[12px] sm:text-[16px] font-semibold'>{footerData[0].title}</p>
          <ul className='flex flex-col items-start gap-[6px] sm:gap-[8px]'>
            {
              footerData[0].links.map((item, idx) => (
                <li key={idx} className='text-[11px] sm:text-[14px] text-[#9198a1] hover:text-[#3b82f6] cursor-pointer'>
                  {item}
                </li>
              ))
            }
          </ul>
        </div>

        {/* 2-ustun: Kontaktlar + Email obuna */}
        <div className='text-white flex flex-col gap-[12px] sm:gap-[20px]'>
          <p className='text-[12px] sm:text-[16px] font-semibold'>Contacts Us</p>
          <ul className='flex flex-col gap-[12px]'>
            <li className='flex items-center gap-3 text-[#9198a1] hover:text-[#3b82f6] cursor-pointer text-[14px] sm:text-[16px]'>
              <FaPhoneAlt size={18} />
              <a href="tel:+998949398596" className='underline'>+998 94 939 85 96</a>
            </li>
            <li className='flex items-center gap-3 text-[#9198a1] hover:text-[#3b82f6] cursor-pointer text-[14px] sm:text-[16px]'>
              <FaTelegramPlane size={18} />
              <a href="https://t.me/baxad1rovich710lv" target="_blank" rel="noopener noreferrer" className='underline'>@baxad1rovich710lv</a>
            </li>
            <li className='flex items-center gap-3 text-[#9198a1] hover:text-[#3b82f6] cursor-pointer text-[14px] sm:text-[16px]'>
              <FaInstagram size={18} />
              <a href="https://instagram.com/jorabek710lv" target="_blank" rel="noopener noreferrer" className='underline'>@jorabek710lv</a>
            </li>
          </ul>

          <div>
            <p className='text-[#9198a1] text-[14px] sm:text-[16px] mb-2'>Subscribe to our newsletter:</p>
            <div className='flex gap-2'>
              <input 
                type="email" 
                placeholder="Enter your email " 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='flex-grow px-3 py-2 rounded-md bg-[#02040a] border border-[#3b82f6] text-white placeholder:text-[#9198a1] focus:outline-none focus:border-[#60a5fa]'
              />
              <button
                onClick={handleSubscribe}
                className='px-4 py-2 bg-[#3b82f6] hover:bg-[#2563eb] rounded-md text-white font-semibold transition-colors'
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* 3-ustun: Payment */}
        <div className='text-white flex flex-col gap-[8px] sm:gap-[14px]'>
          <p className='text-[12px] sm:text-[16px] font-semibold'>{footerData[1].title}</p>
          <ul className='flex flex-col items-start gap-[6px] sm:gap-[8px]'>
            {
              footerData[1].links.map((item, idx) => (
                <li key={idx} className='text-[11px] sm:text-[14px] text-[#9198a1] hover:text-[#3b82f6] cursor-pointer'>
                  {item}
                </li>
              ))
            }
          </ul>
        </div>

        {/* 4-ustun: Products */}
        <div className='text-white flex flex-col gap-[8px] sm:gap-[14px]'>
          <p className='text-[12px] sm:text-[16px] font-semibold'>{footerData[2].title}</p>
          <ul className='flex flex-col items-start gap-[6px] sm:gap-[8px]'>
            {
              footerData[2].links.map((item, idx) => (
                <li key={idx} className='text-[11px] sm:text-[14px] text-[#9198a1] hover:text-[#3b82f6] cursor-pointer'>
                  {item}
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default React.memo(Footer);
