import React from 'react';
import './css/login.css';

const Footer = () => {
    return (
        <section>
            <footer className="footer">
            <p className="footer__title">Domingos Netto</p>
            <div className="footer__social">

                <a href="https://www.facebook.com/artsystemti" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                <a href="https://br.pinterest.com/artsystemti/" className="footer__icon"><i className='bx bxl-pinterest' ></i></a>
                <a href="https://www.linkedin.com/in/domingos-netto/" className="footer__icon"><i className='bx bxl-linkedin' ></i></a>
                <a href="https://www.instagram.com/artsystemti/" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
                <a href="https://twitter.com/artsystemti" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
            </div>
            <p>&#169; 2020 copyright all right reserved</p>
            </footer> <script src="https://artsystemti.com/"></script>
        </section>
    );
};
export default Footer;


