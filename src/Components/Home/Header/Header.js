import React from 'react';
import HeaderBody from '../HeaderBody/HeaderBody';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <header>
          <Navbar></Navbar> 
          <HeaderBody></HeaderBody>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon fill="white" points="0,100 100,0 100,100"/>
  </svg> 
        </header>
    );
};

export default Header;