import React from 'react';
import './styles/Badge.css';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import logo from '../images/choclitos.jpg';
import _default from 'react-bootstrap/esm/CardColumns';

class Badge extends React.Component{
render(){
   return (
    <div className = "container">
        <div className = "buttonContainer">
            <Link to = "/Form" className = "formButton">Llena el form, rey</Link>
        </div>
    </div>
   
)
   
}

}

export default Badge;