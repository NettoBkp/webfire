import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
//var datas = [];

class Teste extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []            
        }
    }
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {
                fullWidth: true,
                indicators: true,
                duration: 300
            });
            var elemsDrop = document.querySelectorAll('.dropdown-trigger');
            // eslint-disable-next-line no-unused-vars
            instances = M.FormSelect.init(elemsDrop,{
                
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
        if (this.props.prof === "Danielle") {
            datas[0] = "P2- 12/04/2020";
            datas[1] = "P2- 12/04/2020";
            datas[2] = "PF- 12/04/2020";            
        }
        if (this.props.prof === "Simone") {
            datas[0] = "P1- 26/03/2020";
            datas[1] = "P2- 16/05/2020";
            datas[2] = "Trabalho - 12/04/2020";
            datas[3] = "PF- 12/04/2020";            
            console.log('Provas Simone');
        }  
        if (this.props.prof === "Agenda") {
            datas[0] = "Interlobos - 12/04/2020";
            datas[1] = "Recesso das Aulas (Covid-19) - 16/04/2020";
            datas[2] = "Volta as aulas - 1/05/2020";
            datas[3] = "Volta as aulas - 1/05/2020";            
        }      
        return (
        <Fragment>
            <div className="input-field col s12">
                <p/>
                <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai+2:bold600&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <select>
                    <option value="" disabled selected>{this.props.prof}  |  {this.props.rotulo}</option>
                    <option value="1">{datas[0]}</option>
                    <option value="2">{datas[1]}</option>
                    <option value="3">{datas[2]}</option>
                    <option value="4">{datas[3]}</option>                    
                    {this.props.prof}
                    {this.props.rotulo}
                    {this.props.icon}
                </select>                
                <label><i className="material-icons MyIcon1">{this.props.icon}</i>{this.props.rotulo}</label>
            </div>
        </Fragment>
        )
    }
}
export default Teste;
//import { Login } from './Login';

//export const isAuthenticated = () => {};
//export const isAuthenticated = () => true;