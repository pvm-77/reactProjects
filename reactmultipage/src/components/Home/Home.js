
import React from "react";
import Particle from '../../components/Particle';
import mainImage from "../../Assets/img.jpg";
import pro from "../../Assets/pro.jpg";
import hand from "../../Assets/hand.gif";
import proj from "../../Assets/proj.gif";
import Typewriter from "typewriter-effect";
import typewriterConfig from "../../configAndContents/typewriter-config";
const Home = () => {
    return (
    
        <div>
       
            
            <div className="container-fluid mt-3">
                <div className="row mx-auto">
                    <div className="col-4">
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
                    <div className="col-8 ">
                        <img  style={{ border:'none', opacity: "0.2",zIndex:'1' }} src={proj} className='responsive' alt="mainImage" />
                    </div>
                </div>
            </div>


        </div>


    );
};

export default Home;
