import React from 'react'
import { Link } from 'react-router-dom'
import pmind from '../../Assets/pmind.gif'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
<<<<<<< HEAD
      <nav style={{background:'#0a401d'}} class="navbar navbar-expand-lg  sticky-top ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img className='logo' width={30} height={24} src={pmind} alt="logo" />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse  justify-content-center" id="navbarNav">
            <ul className='navbar-nav custom'>
=======
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className='navbar-nav'>
              {/* <li className='brand-logo'><Link to="/">someName</Link></li> */}
>>>>>>> b05a241c96da689af1f06831c5f930f0e1456286
              <li className='nav-item' ><Link className='nav-link' to="/">Home</Link></li>
              <li className='nav-item'><Link className='nav-link' to="/about">About</Link></li>
              <li className='nav-item'><Link className='nav-link' to="/contact">Contact</Link></li>
              <li className='nav-item'><Link className='nav-link' to="/resume">Resume</Link></li>
              <li className='nav-item'><Link className='nav-link' to="/project">Project</Link></li>
              <li className='nav-item'><Link className='nav-link' to="/blogs">Blogs</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar