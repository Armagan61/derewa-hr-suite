import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white">
    <Link to="/" className="mr-4">Dashboard</Link>
    <Link to="/login">Login</Link>
  </nav>
);

export default Navbar;