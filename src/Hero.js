import React, { Fragment } from 'react';
import Nav from './nav';
import Footer from './Footer';
import About from './About';
//<button className="black " onClick={handleLogout} > Logout </button>

const Hero = ({ handleLogout }) => {
    
    return (
        <Fragment>
            <header>
            <Nav handleLogout={handleLogout} />
            </header>
            <body>
                
            <About/>
            </body>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
};
export default Hero;


