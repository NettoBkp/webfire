/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import img1 from './img/layout1.png';
import 'materialize-css/dist/css/materialize.min.css';
import './loginPg/style.css';
import './css/lg.css';

// <p className="errorMsg">{emailError}</p>

const LoginPg = (props) => {
    
    const {
        sign_in_btn = document.querySelector("#sign-in-btn"),
        sign_up_btn = document.querySelector("#sign-up-btn"),
        container = document.querySelector(".container"),
        
    } = props;
    
    return (
        <Fragment> 
            <body>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
           
                <div className="container">
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form action="#" className="sign-in-form">
                                <h2 className="title">Sign in</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <input type="submit" value="Login" className="btn solid" />
                                <p className="social-text">Or Sign in with social platforms</p>
                                <div className="social-media">
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-google"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </form>
                            <form action="#" className="sign-up-form">
                                <h2 className="title">Sign up</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" required name="password"
                                        value="sign-up-mode"
                                        onChange={(e) => container(e.target.value)} />

                                </div>
                                <input autoFocus name="username"
                                    required type="submit" className="btn" value="sign-up-mode"
                                    onChange={(e) => container(e.target.value)} />


                                <p className="social-text">Or Sign up with social platforms</p>
                                <div className="social-media">
                                    <a href="#d" className="social-icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#c" className="social-icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#b" className="social-icon">
                                        <i className="fab fa-google"></i>
                                    </a>
                                    <a href="#a" className="social-icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>New here ok?</h3>
                                <p>
                                A vida é uma grande estrada com muitos sinais. Então, quando você estiver pedalando pelos sulcos, não complique sua mente. Fugi do ódio, maldade e inveja.
                                Não enterre seus pensamentos, coloque sua visão em realidade. Acorde e VIVA! 
            </p>
                                <button className="btn transparent" id="sign-up-btn" value="sign-up-mode"                                                             
               
                                 
                            >
                                    Cadastrar
            </button>
                            </div>
                            <img src={img1} className="image" alt="" />
                        </div>
                        <div className="panel right-panel">
                            <div className="content">
                                <h3>One of us ?</h3>
                                <p>
                                A vida é uma grande estrada com muitos sinais. Então, quando você estiver pedalando pelos sulcos, não complique sua mente. Fugi do ódio, maldade e inveja.
                                Não enterre seus pensamentos, coloque sua visão em realidade. Acorde e VIVA! 
          
            </p>
                                <button className="btn transparent" id="sign-in-btn">
                                    Sign in
            </button>
                            </div>
                            <img src={img1} className="image" alt="" />
                        </div>
                    </div>
                </div>

            </body>
        </Fragment>
    )
}

export default LoginPg;