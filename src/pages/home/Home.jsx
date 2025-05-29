import React, { useState, useEffect } from 'react';

import img1 from '../../assets/1.webp';
import img2 from '../../assets/2.avif';
import img3 from '../../assets/3.avif';
import img4 from '../../assets/4.webp';
import img5 from '../../assets/5.jpg';

const images = [img1, img2, img3, img4, img5];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 soniya slayd almashinuvi

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section_home py-12">
      <div className="max-w-3xl mx-auto relative rounded-lg overflow-hidden shadow-lg">
        {/* Slaydlar */}
        <div className="relative h-64 md:h-96">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            />
          ))}
        </div>

        {/* Indicatorlar */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 focus:outline-none
                ${i === index ? 'bg-blue-600 shadow-lg' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Home);

