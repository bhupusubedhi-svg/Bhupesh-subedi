
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const navLinks: { page: Page; label: string }[] = [
  { page: 'home', label: 'Home' },
  { page: 'about', label: 'About Us' },
  { page: 'services', label: 'Services' },
  { page: 'resources', label: 'Resources' },
  { page: 'contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (page: Page) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a onClick={() => handleLinkClick('home')} className="cursor-pointer text-2xl font-bold text-[#003366]">
              Subedi Finance
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    currentPage === link.page
                      ? 'bg-[#003366] text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-[#003366]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#003366] hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.page}
                onClick={() => handleLinkClick(link.page)}
                className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === link.page
                    ? 'bg-[#003366] text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#003366]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
