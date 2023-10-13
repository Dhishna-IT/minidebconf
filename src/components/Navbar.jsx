import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
      <div>
        <nav className="border-gray-200 bg-gray-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <img src="https://debian.org.in/images/logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl text-rose-800 font-semibold whitespace-nowrap ">MiniDebConf'23</span>
            </a>
            <button
                onClick={toggleMobileMenu}
                data-collapse-toggle="navbar-solid-bg"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-solid-bg"
                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`} id="navbar-solid-bg">
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white bg-rose-800 rounded md:bg-transparent md:text-rose-800 md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-800 md:p-0">About</a>
                </li>
                <li>
                  <a href="#register" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover-bg-transparent md:border-0 md:hover:text-rose-800 md:p-0">Register</a>
                </li>
                <li>
                  <a href="#footer" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:border-0 md:hover:text-rose-800 md:p-0">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
