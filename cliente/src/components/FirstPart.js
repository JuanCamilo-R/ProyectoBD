import React , { Component } from 'react';

export class FirstPart extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const {values, inputChange} = this.props;
        return(
            <div className = "form-container">
                <h1 className = "h1">Form</h1>
                <div className = "form-group">
                    <label htmlFor= "name">
                    nombre
                    </label>
                    <input type = "text" className = "form-control" name = "name" onChange = {inputChange('name')} value = {values.name}/>
                </div>
                <div className = "form-group">
                    <label htmlFor= "apellido">
                    apellido
                    </label>
                    <input type = "text" className = "form-control" name = "apellido" onChange = {inputChange('apellido')} value = {values.apellido}/>
                </div>
                <div className = "form-group">
                    <label htmlFor= "email">
                    correo
                    </label>
                    <input type = "text" className = "form-control" name = "email" onChange = {inputChange('email')} value = {values.email}/>
                </div>
                <br/>

                <div className ="text-right">
                    <button className = "btn btn-primary" onClick = {this.continue}>
                        Continuar
                    </button>
                </div>
            </div>
        )
    }
}

export default FirstPart