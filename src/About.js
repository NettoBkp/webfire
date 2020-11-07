import React, { Fragment } from 'react';
import img1 from './img/layout3.png';
// <img className="col s2" src={img1} />

const About = () => {
    return (
        <Fragment>
<div className="row">
            <div className="col s12">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img className="col s2" src={img1} />
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>A vida é uma grande estrada com muitos sinais. Então, quando você estiver pedalando pelos sulcos, não complique sua mente. Fugi do ódio, maldade e inveja. Não enterre seus pensamentos, coloque sua visão em realidade. Acorde e VIVA! 
- Domingos Netto</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    );
};

export default About;