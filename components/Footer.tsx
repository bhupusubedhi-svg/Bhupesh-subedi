
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Subedi Finance Solution</h3>
            <p className="text-gray-300">Empowering SMEs with seamless financial solutions. From bookkeeping to tax compliance, we handle it all.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a onClick={() => navigateTo('about')} className="cursor-pointer text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a onClick={() => navigateTo('services')} className="cursor-pointer text-gray-300 hover:text-white transition">Services</a></li>
              <li><a onClick={() => navigateTo('resources')} className="cursor-pointer text-gray-300 hover:text-white transition">Resources</a></li>
              <li><a onClick={() => navigateTo('contact')} className="cursor-pointer text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@subedifinance.com</li>
              <li>Phone: +977 123 456 7890</li>
              <li>Address: Kathmandu, Nepal</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-2">Get SME finance tips straight to your inbox.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 rounded-l-md text-gray-800 focus:outline-none" />
              <button type="submit" className="bg-[#00A651] hover:bg-green-700 text-white px-4 py-2 rounded-r-md transition">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Subedi Finance Solution. All Rights Reserved.</p>
          <p className="mt-1">GDPR Compliance Note: We value your privacy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
