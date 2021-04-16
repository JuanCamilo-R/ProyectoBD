import React from 'react';
import './styles/Badge.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import logo from '../images/choclitos.jpg';
import _default from 'react-bootstrap/esm/CardColumns';
import Navbar from '../components/Navbar'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

//Images
import logo_bichoclo from '../images/logo_prueba.png';

class Badge extends React.Component {
    render() {
        return (
            <div className="bg-light">
                <Navbar/>
                <div className="container justify-content-center">

                    <div className="row">
                        <div className="logoContainer">
                            <img className="logoStyles center" src={logo_bichoclo}></img>

                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="buttonContainer">
                                <Link to="/Form" className="formButton">Llena el form, rey</Link>
                            </div>
                        </div>
                    </div>


                </div>

                
            </div>




        )

    }

}

export default Badge;