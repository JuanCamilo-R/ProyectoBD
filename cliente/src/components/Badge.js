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
import logo_bichoclo from '../images/LOGO-BICHOCLO.png';
class Badge extends React.Component {
    render() {
        return (
            <div >
                <Navbar/>
                <div className="badge">
                    <div className="lema">
                        #Hola
                        <div className="badge3">
                        <p className="texto3"> </p> 
                        <p className="texto3">Organizadores:</p>
                            <p className="texto2">Juan Camilo Randazzo</p>
                            <p className="texto2">Jose David Barona</p>
                            <p className="texto2">Andres Rincon</p>
                            <p className="texto2">Jennyfer Belalcazar</p>
                            <p className="texto3"> </p> 
                        </div>

                    </div>
                   <div >
                        <div className="logoContainer2">
                            <img className="logoStyles center" src={logo_bichoclo}></img>

                        </div>
                    </div>

                    <div >
                                <Link to="/Form" className="formButton">Llena el form, rey</Link>
                    </div>
                    <div >
                    <p className="texto"></p>
                    </div>

                    <div className="badge2">
                    
                    <p className="texto">Somos una empresa en el sector de entretenimiento que desea hacer un estudio de</p>
                    <p className="texto">mercado en la ciudad de Cali,con el propósito de entender las tendencias y gustos</p>
                    <p className="texto">de la población caleña. Al finalizar el estudio se debe tomar la decisión de cuál</p>
                    <p className="texto">evento se ha de realizar</p>
                    </div>
                </div>
    
            </div>

        )

    }

}

/*
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
*/

/*
   <p className="parrafo"></p>
                    <p className="parrafo">Somos una empresa en el sector de entretenimiento que desea hacer un estudio de</p>
                    <p className="parrafo">mercado en la ciudad de Cali,con el propósito de entender las tendencias y gustos</p>
                    <p className="parrafo">de la población caleña. Al finalizar el estudio se debe tomar la decisión de cuál</p>
                    <p className="parrafo">evento se ha de realizar</p>
*/
export default Badge;