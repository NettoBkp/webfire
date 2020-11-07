import React from 'react';
import { imgFunction } from './imgFunction';
import Nav from './nav';
import Footer from './Footer';
//<button className="black " onClick={handleLogout} > Logout </button>

const Hero = ({ handleLogout }) => {
    return (
        <section className="hero">
            <Nav handleLogout={handleLogout}/>
           
            <body className="row">
                <div className="col s5">
                 
                 </div>
                <div className="col s5 ">
                    {imgFunction()}
                   
                </div>
            </body>
            <footer>
                <Footer/>
            </footer>            
        </section>
    );
};
export default Hero;


