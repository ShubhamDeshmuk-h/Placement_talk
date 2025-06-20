import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link

const Navbar = () => {
  return (
    <nav className='border-b-4 border-green-700 text-center fixed top-0 bg-green-600 font-bold w-full text-white'>
      <ul>
        <li className='inline-block py-4'>
          <Link to="/" className='pl-6 pr-8'>Home</Link>
        </li>
        <li className='inline-block py-4'>
          <Link to="/article-list" className='pl-6 pr-8'>Articles</Link>
        </li>
        <li className='inline-block py-4'>
          <Link to="/about" className='pl-6 pr-8'>About</Link>
        </li>
        <li className='inline-block py-4'>
          <Link to="/account" className='pl-6 pr-8'>Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
