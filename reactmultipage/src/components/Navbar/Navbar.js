import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
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