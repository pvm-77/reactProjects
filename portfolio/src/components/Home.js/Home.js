import React from "react";
import Particle from '../../components/Particle';

import mainImage from "../../components/img.jpg";
import sampledev from "../../components/sampledev.jpeg";
import hand from "../../components/hand.gif";
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
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <h1 style={{ color: 'white' }}>Hi EveryBody
                            <span> <img src={hand} width="40" height={40} /></span>
                        </h1>

                        <h1 style={{ color: 'white' }}>
                            I am
                            <strong style={{ color: '#244535' }}> Sarfaraz </strong>
                        </h1>
                        <div style={{ fontSize: "40px" }}>
                            <Typewriter options={typewriterConfig} />
                        </div>
                        {/*  */}
                        <div style={{ fontFamil: "" }} className="mt-3">
                            <p style={{
                                fontSize: '40px',
                                // multiple font familys

                                fontFamily: '"Parisienne", cursive',
                            }} className="text-white"> i   design website for fun</p>
                            <h2 style={{ color: '#244535' }}>i am learning mern stack </h2>
                            <h2>i am learning react</h2>


                        </div>
                    </div>
                    <div className="col-5">
                        {/* <img style={{ opacity: "0.2" }} src={sampledev} className='responsive' alt="mainImage" /> */}
                    </div>
                </div>
            </div>


        </div>


    );
};

export default Home;
