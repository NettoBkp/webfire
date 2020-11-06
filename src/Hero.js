import React from 'react';
import './css/login.css';
import { imgFunction } from './imgFunction';

const Hero = () => {
    return (
        <section className="hero">
           
            <body>
                <div className="layoutB">
                    {imgFunction()}
                </div>
            </body>
        </section>

    );

};
export default Hero;


