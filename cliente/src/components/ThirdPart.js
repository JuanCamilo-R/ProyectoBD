import React, { Component } from 'react';
import './styles/Badge.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


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
        const { values, inputChange } = this.props;
        return (
            <div className="form-container">
                <div>
                <h1 className="h1">Categoría de Deportes</h1>
                <p className = "remainder"> Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta </p>
                </div>
                <div className="form-group form-design">
                
                <label htmlFor="Frecuencia Deportivos">
                        ¿Con qué frecuencia practica algún deporte?
                    </label>        
                    <div className="radio">           
                        <RadioGroup row  aria-label="deportivosFrecuencia" name="deportivosFrecuencia" value={values.deportivosFrecuencia} onChange={inputChange('deporteFrecuencia')}>
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
                    <label htmlFor="Eventos Deportivos">
                    Independientemente de su respuesta arriba, ¿cuál es su deporte favorito?
                    </label>
                    <div className="radio">
                        <RadioGroup row  aria-label="deporte_Favorito" name="deporte_Favorito" value={values.deporte_Favorito} onChange={inputChange('deporte_Favorito')}>
                            <FormControlLabel type="number" value="1" control={<Radio />} label="Fútbol"/>
                            <FormControlLabel type="number" value="2" control={<Radio />} label="Baloncesto"/>
                            <FormControlLabel type="number" value="3" control={<Radio />} label="Crossfit"/>
                            <FormControlLabel type="number" value="4" control={<Radio />} label="Voleibol"/>
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Patinaje"/>
                            <FormControlLabel type="number" value="6" control={<Radio />} label="Natación"/>
                            <FormControlLabel type="number" value="7" control={<Radio />} label="Ciclismo"/>
                            <FormControlLabel type="number" value="8" control={<Radio />} label="Ping Pong"/>
                            <FormControlLabel type="number" value="9" control={<Radio />} label="Tenis"/>
                            <FormControlLabel type="number" value="10" control={<Radio />} label="Rugby"/>
                            <FormControlLabel type="number" value="11" control={<Radio />} label="Otro"/>
                            <FormControlLabel type="number" value="12" control={<Radio />} label="Ninguno"/>
                            <FormControlLabel type="number" value="13" control={<Radio />} label="Ajedrez"/>
                        </RadioGroup>
                    </div>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="razon_deporte">
                    ¿Cuál es la razón por la que practica deporte? 
                    </label>
                    <div className="radio">           
                        <RadioGroup row  aria-label="razon_deporte" name="razon_deporte" value={values.razon_deporte} onChange={inputChange('razon_deporte')}>
                            <FormControlLabel type="number" value="1" control={<Radio />} label="Lo disfruto"/>
                            <FormControlLabel type="number" value="2" control={<Radio />} label="Por salud"/>
                            <FormControlLabel type="number" value="3" control={<Radio />} label="Para verme bien"/>
                            <FormControlLabel type="number" value="4" control={<Radio />} label="Otra"/>
                            <FormControlLabel type="number" value="5" control={<Radio />} label="No aplica"/>
                        </RadioGroup>
                    </div>
                </div>
                <br />
                <div className="form-group form-design">
                    <label htmlFor="razon_no_deporte">
                    ¿Cuál es la razón por la que NO practica deporte? 
                    </label>
                    <div className="radio">           
                        <RadioGroup row  aria-label="razon_no_deporte" name="razon_no_deporte" value={values.razon_no_deporte} onChange={inputChange('razon_no_deporte')}>
                            <FormControlLabel type="number" value="1" control={<Radio />} label="Falta de tiempo"/>
                            <FormControlLabel type="number" value="2" control={<Radio />} label="Falta de iniciativa"/>
                            <FormControlLabel type="number" value="3" control={<Radio />} label="Falta de compañía"/>
                            <FormControlLabel type="number" value="4" control={<Radio />} label="No le gusta"/>
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Otra"/>
                            <FormControlLabel type="number" value="6" control={<Radio />} label="No aplica"/>
                        </RadioGroup>
                    </div>
                </div>
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