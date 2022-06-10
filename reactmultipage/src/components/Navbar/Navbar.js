import React from 'react'
import { Link } from 'react-router-dom'
import pmind from '../../Assets/pmind.gif'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
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