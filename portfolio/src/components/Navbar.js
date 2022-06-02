import React from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { CgCodeSlash } from "react-icons/cg";
import brandLogo from './text.gif';
const Navbar = () => {
    return (
        <>
            <nav style={{ opacity: '0.8' }} className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ fontSize: '30px' }}><img src={brandLogo} alt='brand' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul style={{color:'white',  fontsize: '34px',fontFamily:'"Parisienne", cursive' }} className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a style={{color:'white', fontSize:'30px'}} className="nav-link active" href="/">
                                    {/* <AiOutlineHome style={{ marginBottom: '3px' }} /> */}
                                    Home</a>
                            </li>
                            <li className="nav-item">
                                <a style={{color:'white', fontSize:'30px'}} className="nav-link active" href="/projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a style={{color:'white', fontSize:'30px'}} className="nav-link active" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a style={{color:'white', fontSize:'30px'}} className="nav-link active" href="/about">
                                    {/* <CgCodeSlash style={{ marginBottom: '3px' }} />  */}
                                    Resume</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar