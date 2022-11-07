import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <ul className='item'>


      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/people">People</Link>
</ul>
    </>
  );
};

export default Navbar;
