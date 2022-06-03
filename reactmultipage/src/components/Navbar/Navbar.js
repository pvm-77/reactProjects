import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className='navbar-nav'>
              {/* <li className='brand-logo'><Link to="/">someName</Link></li> */}
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






      {/* <nav>
        <ul className='menu'>
          <li className='brand-logo'><Link to="/">someName</Link></li>
          <li className='navigation-item' ><Link className='navigation-link' to="/">Home</Link></li>
          <li className='navigation-item'><Link className='navigation-link' to="/about">About</Link></li>
          <li className='navigation-item'><Link className='navigation-link' to="/contact">Contact</Link></li>
          <li className='navigation-item'><Link className='navigation-link' to="/resume">Resume</Link></li>
          <li className='navigation-item'><Link className='navigation-link' to="/project">Project</Link></li>
        </ul>

      </nav> */}

    </>
  )
}

export default Navbar