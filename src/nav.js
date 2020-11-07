import React, { Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './main';
//*              <button onClick={handleLogout} >Sair</button>         *//

const Nav = ({ handleLogout }) => {
    return (
        <Fragment>
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li class="divider"></li>
                <li><a href="#!">three</a></li>
            </ul> 
            <nav>
                <div className="nav-wrapper cyan">
                    <a href="#!" onClick={handleLogout} className="brand-logo">Domingos Netto</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#logout" >Sass</a></li>
                        <li><a href="#logout" onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );

};
export default Nav;


