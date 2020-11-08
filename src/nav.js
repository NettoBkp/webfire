import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css';

//*              <button onClick={handleLogout} >Sair</button>         *//

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        }
    }
    componentDidMount() {
        this.setState({});
        document.addEventListener('DOMContentLoaded', function () {
            var el = document.querySelectorAll('.target');
            var instance = M.Tabs.init(el, {});
            var elemsDrop = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elemsDrop, {

            });
            var elems = document.querySelectorAll('.sidenav');
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function () {
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/5e7406c4eec7650c332149ae/1e3qmhts5';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
            })();
            var instances = M.Sidenav.init(elems, {
                fullWidth: true,
                indicators: true,
                duration: 300
            });
        });
    }
    render() {
        const { datas } = (this.state);
        if (this.props.prof === "Daniel") {
            datas[0] = "P1- 26/03/2020";
            datas[1] = "P2- 12/04/2020";
            datas[2] = "P3- 09/05/2020";
            datas[3] = "PF- 19/05/2020";
        }
        return (
            <Fragment>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

                <ul id="dropdown-trigger" className="dropdown-content">
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li class="divider"></li>
                    <li><a href="#!">three</a></li>
                </ul>

                <nav className="nav-extended blue-text text-darken-2">
                    <div className="nav-wrapper blue-grey lighten-4">
                    <a href="#dropdown-trigger" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"><i className="material-icons">view_list</i></i></a>
                    <ul className="tabNav right hide-on-med-and-down" >
                                       
                                    </ul>
                                
                        <a href="#!" className="brand-logo">Domingos Netto</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#logout" >Sass</a></li>
                            <li><a href="#logout">Logout</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav blue lighten-4" id="mobile-demo">
                            <li>
                                <div className="user-view" >
                                    <div className="background">
                                       ok
                                    </div>
                                </div>
                            </li>
                             <li><a href="#" ><i className="material-icons">logout</i>Sair</a></li>
                        </ul>

            </Fragment>
        )
    };
}
export default Nav;


