import React, { useEffect, useState } from 'react';
import { headerRouteLinks } from "../static";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  // Cart bilan bog'liq state olib tashlandi

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`site_header sticky w-full top-0 left-0 z-20 transition-all duration-300 ${
        scrolled
          ? 'bg-black/30 backdrop-blur-sm'
          : 'bg-primary-bg border-b border-border'
      }`}
    >
      <div className='container mx-auto'>
        <nav className='h-[55px] md:h-[60px] flex items-center justify-center'>
          <ul className='flex items-center gap-[12px]'>
            {
              headerRouteLinks.map((item) => (
                <li key={item.id}>
                  <NavLink
                    className={`${(item.id === 4 || item.id === 5)
                      ? "relative flex items-center gap-1"
                      : ""
                    } header_link text-xs md:text-sm py-[4px] border-b-[.8px] border-b-transparent hover:border-b-[#98a1ae] duration-150 ease-out`}
                    to={`${item.route}`}
                  >
                    <span>{item.title}</span>
                    {/* Cart count ko'rsatiladigan div olib tashlandi */}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
