import React, { Fragment } from 'react';
import Nav from './nav';
import Footer from './Footer';
import LoginPg from './LoginPg1';
//<button className="black " onClick={handleLogout} > Logout </button>

const Hero = ({ handleLogout }) => {
    
    return (
        <Fragment>
            <header>
            <Nav handleLogout={handleLogout} />
            </header>
            <body>
                <LoginPg/>
            </body>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    );
};
export default Hero;


