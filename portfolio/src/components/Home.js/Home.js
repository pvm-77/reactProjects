import React from "react";
import Particle from '../../components/Particle';

import mainImage from "../../components/img.jpg";
import pro from "../../components/pro.jpg";
import hand from "../../components/hand.gif";
import proj from "../../components/proj.gif";
import Typewriter from "typewriter-effect";
import typewriterConfig from "../../config/typewriter-config";
const Home = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="container-fluid">
                <div className="row mx-auto">
                    <div className="col-6">
                        <h1 style={{ color: 'white',fontFamily:'"Parisienne", cursive' }}>Hi EveryBody
                            <span> &#128075;
                                 {/* <img style={{opacity:'1'}} src={hand} width="40" height={40} /> */}
                                 </span>
                        </h1>

                        <h1 style={{ color: 'white',fontFamily:'"Parisienne", cursive' }}>
                            I am 
                            <strong style={{ color: '#244535',fontFamily:'"Parisienne", cursive' }}> Sarfaraz </strong>
                        </h1>
                        <div style={{ fontSize: "40px",fontFamily:'"Parisienne", cursive' }}>
                            <Typewriter options={typewriterConfig} />
                        </div>
                        {/*  */}
                        {/* <div style={{ fontFamil: "" }} className="mt-3">
                            <p style={{
                                fontSize: '40px',
                                // multiple font familys

                                fontFamily: '"Parisienne", cursive',
                            }} className="text-white"> i   design website for fun</p>
                            <h2 style={{ color: '#244535' }}>i am learning mern stack </h2>
                            <h2>i am learning react</h2>


                        </div> */}
                    </div>
                    <div className="col-6 ">
                        <img  style={{ opacity: "0.6",zIndex:'1' }} src={proj} className='responsive' alt="mainImage" />
                    </div>
                </div>
            </div>


        </div>


    );
};

export default Home;
