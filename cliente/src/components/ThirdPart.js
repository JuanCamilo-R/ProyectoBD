import React, { Component } from 'react';
import './styles/Badge.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox, FormGroup } from '@material-ui/core';

export class ThirdPart extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values, inputChange, inputChangeArray } = this.props;
        return (
            <div className="form-container">
                <div>
                <h1 className="h1">Categoría de Deportes</h1>
                <p className = "remainder"> Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta </p>
                </div>
                <div className="form-group form-design">
                
                <label htmlFor="frecuencia_deporte">
                        ¿Con qué frecuencia practica algún deporte?
                    </label>        
                    <div className="radio">           
                        <RadioGroup row  aria-label="frecuencia_deporte" name="frecuencia_deporte" value={values.frecuencia_deporte} onChange={inputChange('frecuencia_deporte')}>
                            <FormControlLabel type="number" value="1" control={<Radio />} label="1"/>
                            <FormControlLabel type="number" value="2" control={<Radio />} label="2"/>
                            <FormControlLabel type="number" value="3" control={<Radio />} label="3"/>
                            <FormControlLabel type="number" value="4" control={<Radio />} label="4"/>
                            <FormControlLabel type="number" value="5" control={<Radio />} label="5"/>
                        </RadioGroup>
                    </div>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="deporte_favorito">
                    Independientemente de su respuesta arriba, ¿cuál es su deporte favorito?
                    </label>
                    <FormGroup row arial-label="deporte_favorito" name="deporte_favorito" value={values.deporte_favorito} onChange={inputChangeArray('deporte_favorito')}>
                        <FormControlLabel control={<Checkbox />} value="1" label="Fútbol" />
                        <FormControlLabel control={<Checkbox/>} value="2" label="Baloncesto"/>
                        <FormControlLabel control={<Checkbox />} value="3" label="Crossfit"/>
                        <FormControlLabel control={<Checkbox />} value="4" label="Voleibol"/>
                        <FormControlLabel control={<Checkbox />} value="5" label="Patinaje"/>
                        <FormControlLabel control={<Checkbox />} value="6" label="Natación"/>
                        <FormControlLabel control={<Checkbox />} value="7" label="Ciclismo"/>
                        <FormControlLabel control={<Checkbox />} value="8" label="Ping Pong"/>
                        <FormControlLabel control={<Checkbox />} value="9" label="Tenis"/>
                        <FormControlLabel control={<Checkbox />} value="10" label="Rugby"/>
                        <FormControlLabel control={<Checkbox />} value="11" label="Otro"/>
                        <FormControlLabel control={<Checkbox />} value="12" label="Ninguno"/>
                        <FormControlLabel control={<Checkbox />} value="13" label="Ajedrez"/>
                    </FormGroup>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="razon_deporte">
                    ¿Cuál es la razón por la que practica deporte? 
                    </label>
                    <FormGroup row arial-label="razon_deporte" name="razon_deporte" value={values.razon_deporte} onChange={inputChangeArray('razon_deporte')}>
                        <FormControlLabel control={<Checkbox />} value = "1" label="Lo disfruto" />
                        <FormControlLabel control={<Checkbox/>}  value = "2" label="Por salud"/>
                        <FormControlLabel control={<Checkbox />} value = "3" label="Para verme bien"/>
                        <FormControlLabel control={<Checkbox />} value = "4" label="Otra"/>
                        <FormControlLabel control={<Checkbox />} value = "5" label="No aplica"/>
                    </FormGroup>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="razon_no_deporte">
                    ¿Cuál es la razón por la que NO practica deporte?  
                    </label>
                    <FormGroup row arial-label="razon_no_deporte" name="razon_no_deporte" value={values.razon_no_deporte} onChange={inputChangeArray('razon_no_deporte')}>
                        <FormControlLabel control={<Checkbox />} value = "1" label="Falta de tiempo" />
                        <FormControlLabel control={<Checkbox/>}  value = "2" label="Falta de iniciativa"/>
                        <FormControlLabel control={<Checkbox />} value = "3" label="Falta de compañía"/>
                        <FormControlLabel control={<Checkbox />} value = "4" label="No le gusta"/>
                        <FormControlLabel control={<Checkbox />} value = "5" label="Otra"/>
                        <FormControlLabel control={<Checkbox />} value = "6" label="No aplica"/>
                    </FormGroup>
                </div>
                <br/>
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-primary" onClick={this.back}>
                            Atrás.
                        </button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>
                            Continuar.
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdPart