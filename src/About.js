import React, { Fragment } from 'react';
import img1 from './img/layout3.png';

// <img className="col s2" src={img1} />

const About = () => {
    return (
        <Fragment>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

<div className="row">
            <div className="col s12">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img className="col s2" src={img1} alt="img Card" />
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>A vida é uma grande estrada com muitos sinais. Então, quando você estiver pedalando pelos sulcos, não complique sua mente. Fugi do ódio, maldade e inveja. Não enterre seus pensamentos, coloque sua visão em realidade. Acorde e VIVA! 
- Domingos Netto</p>
                        </div>
                        <div className="card-action">
                            <a href="#home">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
        </Fragment>
    );
};

export default About;