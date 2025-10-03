import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-white border-b border-gray-200 shadow-sm fixed top-0 w-full z-50'>
      <div className='max-w-7xl mx-auto px-6 sm:px-12 lg:px-24'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to="/" className='flex items-center'>
            <span className='text-2xl font-bold text-indigo-600'>Placement</span>
            <span className='text-2xl font-bold text-gray-900'>Talk</span>
          </Link>
          
          {/* Navigation Links */}
          <ul className='flex items-center space-x-1'>
            <li>
              <Link to="/" className='px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium'>
                Home
              </Link>
            </li>
            <li>
              <Link to="/article-list" className='px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium'>
                Articles
              </Link>
            </li>
            <li>
              <Link to="/about" className='px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium'>
                About
              </Link>
            </li>
            <li>
              <Link to="/account" className='ml-2 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium shadow-sm'>
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;