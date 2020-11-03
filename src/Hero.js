import React from 'react';
import './css/login.css';
import { imgFunction } from './imgFunction';

const Hero = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Bem-Vindo!</h2>
                <button
                    onClick={handleLogout}
                >Sair</button>
            </nav>
            <body>
                <div className="layoutB">
                    {imgFunction()}
                </div>
            </body>
        </section>

    );

};
export default Hero;


