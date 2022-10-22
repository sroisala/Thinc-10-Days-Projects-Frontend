import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='10days__navbar'>
      <div className='10days__navbar-links'>
        <div className='10days__navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar