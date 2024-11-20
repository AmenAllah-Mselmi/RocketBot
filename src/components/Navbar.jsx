import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/rocketbot_logo.jpg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800 fixed top-0 left-0 z-20">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none flex items-center">
            <img src={Logo} alt="Logo" className='w-9 h-9 mr-2' />
            RocketBot 2.0
          </Link>
          <button
            className="md:hidden rounded-lg focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!open ? (
                <>
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                </>
              ) : (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
        <nav className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${open ? 'flex' : 'hidden'}`}>
          <Link to="/" className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 hover:bg-gray-200">
            Home
          </Link>
          <Link to="/about" className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark:bg-transparent md:mt-0 md:ml-4 hover:bg-gray-200">
            About
          </Link>
          <Link to="/team" className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark:bg-transparent md:mt-0 md:ml-4 hover:bg-gray-200">
            Team
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex flex-row items-center w-full px-3 py-2  text-sm font-semibold text-left rounded-lg dark:bg-transparent hover:bg-gray-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>Challenges</span>
              <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30">
                <div className="px-2 py-2 bg-white rounded-md shadow dark:bg-gray-800">
                  <Link to="/ToutTerrain" className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200">
                    Tout-Terrain
                  </Link>
                  <Link to="/Suiveur" className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200">
                    Suiveur
                  </Link>
                  <Link to="/Junior" className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200">
                    Junior
                  </Link>
                  <Link to="/RocketLeague" className="block px-4 py-2 mt-2 text-sm font-semibold hover:bg-gray-200">
                    RocketLeague
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/contact" className="px-1 py-2 mt-2 text-sm font-semibold rounded-lg dark:bg-transparent md:mt-0 md:ml-4 hover:bg-gray-200">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
