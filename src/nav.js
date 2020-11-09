/* eslint-disable no-use-before-define */
/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css';

//*              <button onClick={handleLogout} >Sair</button>         *//

const Nav = ({ handleLogout }) => {
    
    return (
        <Fragment>
             <button onClick={handleLogout} >Sair</button>            
        </Fragment>
    );
};
export default Nav;