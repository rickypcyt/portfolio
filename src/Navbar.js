import React, { useState, useEffect, useRef } from 'react';
import { FaDownload } from 'react-icons/fa';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  
  // Replace these with your actual CV files
  const cvFiles = {
    spanish: '/path/to/your/spanish-cv.pdf',
    english: '/path/to/your/english-cv.pdf'
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-semibold">Rickypcyt</span>
          </div>
          
          <div className="flex items-center" ref={dropdownRef}>
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                aria-expanded={showDropdown}
                aria-haspopup="true"
              >
                <FaDownload className="h-5 w-5" />
                <span>CV</span>
              </button>
              
              {showDropdown && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-gray-700">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <a
                      href={cvFiles.spanish}
                      download
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      role="menuitem"
                      onClick={() => setShowDropdown(false)}
                    >
                      Descargar CV en Español
                    </a>
                    <a
                      href={cvFiles.english}
                      download
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      role="menuitem"
                      onClick={() => setShowDropdown(false)}
                    >
                      Download CV in English
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;