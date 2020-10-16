import React from 'react';
import { Link } from 'react-router-dom';
import logo from '.././../../images/logos/logo.png'
const Navbar = () => {
    return (
        <div class='container'>
           <nav class="navbar navbar-expand-lg navbar-light pt-4">
           <Link to="/" ><img src={logo} style={{width:"150px"}} alt=""/> </Link>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link mr-4" to="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-4" href="#portfolio">Our Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-4" href="#services">Our Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-4" href="#contactUs">Contact Us</a>
      </li>
       
     
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      
      <Link to="/login"><button class="btn btn-dark my-2 my-sm-0" type="submit">Login</button></Link>
    </form>
  </div>
</nav> 
        </div>
    );
};

export default Navbar;