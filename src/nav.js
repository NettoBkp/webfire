import React from 'react';
import './css/login.css';
import './css/styles.css';
import './main';
import './Hero';
import './Footer';
import Hero from './Hero';
import Footer from './Footer';
//*              <button onClick={handleLogout} >Sair</button>         *//
const Nav = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav className="nav ">
                <div>
                    <a href="#home" className="nav__logo">Art System Ti</a>
                </div>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                        <li className="nav__item"><a href="#home" onClick={handleLogout} className="nav__link">Logout</a></li>
                    </ul>
                </div>
                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
            <body>
                <Hero />
            </body>
            <footer>
                <Footer />
            </footer>
        </section>
    );

};
export default Nav;


