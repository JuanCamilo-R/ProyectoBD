import React from 'react';
import './styles/Badge.css'
import Button from 'react-bootstrap/Button'
import ReactDOM from "react-dom";
import Card from './Cards';
import logo from '../images/choclitos.jpg';
import Form from 'react-bootstrap/Form'
class Forms extends React.Component{

render(){

    return  (
        <div className = "Form">
            <div className = "container">
            <Card/>
            </div>
        </div>
        
    )
    
}

}

export default Forms;