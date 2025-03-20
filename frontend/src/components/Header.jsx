import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && (
        <ChevronLeft
          className="absolute left-[3vh] mt-[0.9vh] cursor-pointer"
          onClick={() => window.history.back()}
        />
      )}
      <nav className="mb-16 md:mb-16">
        <div
          className="text-2xl font-bold text-gray-800 cursor-pointer"
          onClick={() => (window.location.href = '/')}
        >
          Prati<span className="text-[#5BB89D]">Shat</span>
        </div>
      </nav>
    </>
  );
};

export default Header;
