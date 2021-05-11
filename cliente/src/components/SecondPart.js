import React, { Component } from 'react';
import './styles/Badge.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox, FormGroup } from '@material-ui/core';


export class SecondPart extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    show = () => {
        console.log(this.props.values.atractivoPelicula);
    }

    render() {
        const { values, inputChange, inputChangeArray } = this.props;
        
    
        return (
            <div className="form-container">
                <div>
                    <h1 className="h1">Categoría de Películas</h1>
                    <p className="remainder"> Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta </p>
                </div>
                <div className="form-group form-design">
                    <label htmlFor="sector">
                        ¿Qué tan frecuente ve películas?
                    </label>
                    <div className="radio">
                        <RadioGroup row arial-label="sector" name="sector" /*value={values.sector}*/ onChange={inputChange('sector')}>
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value="4" control={<Radio />} label="4" />
                            <FormControlLabel value="5" control={<Radio />} label="5" />
                        </RadioGroup>
                    </div>
                </div>
                <br />
                <div className="form-group form-design">
                    <label htmlFor="peliculasFrecuencia">
                        Independientemente de su respuesta arriba, ¿cuál es su género favorito?
                    </label>
                    <div className="radio">
                        <RadioGroup row arial-label="peliculasFrecuencia" name="peliculasFrecuencia" value={values.peliculasFrecuencia} onChange={inputChange('peliculasFrecuencia')}>
                            <FormControlLabel type="number" value="1" control={<Radio />} label="Acción" />
                            <FormControlLabel type="number" value="2" control={<Radio />} label="Terror" />
                            <FormControlLabel type="number" value="3" control={<Radio />} label="Ciencia ficción" />
                            <FormControlLabel type="number" value="4" control={<Radio />} label="Comedia" />
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Animadas" />
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Documentales" />
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Otra" />
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Ninguna" />
                        </RadioGroup>
                    </div>
                </div>
                <br />
                <div className="form-group form-design">
                    <label htmlFor="deporteFrecuencia">
                        De las siguientes opciones, ¿qué es lo que más le atrae de una película?
                    </label>
                    <FormGroup row arial-label="atractivoPelicula" name="atractivoPelicula" value={values.atractivoPelicula} onClick={(inputChangeArray('atractivoPelicula'))}>
                        <FormControlLabel control={<Checkbox />} value="1" label="Sinopsis" />
                        <FormControlLabel control={<Checkbox/>} value="2" label="Efectos visuales"/>
                        <FormControlLabel control={<Checkbox />} value="3" label="Actores famosos"/>
                        <FormControlLabel control={<Checkbox />} value="4" label="Otro"/>
                        <FormControlLabel control={<Checkbox />} value="5" label="Ninguno"/>
                    </FormGroup>
                </div>
                <br />
                <div className="form-group form-design">
                    <label htmlFor="deporteFrecuencia">
                        ¿Usualmente con qué acompaña las películas?
                    </label>
                    <FormGroup row arial-label="atractivoPelicula" name="atractivoPelicula" value={values.atractivoPelicula} onClick={(inputChangeArray('atractivoPelicula'))}>
                        <FormControlLabel control={<Checkbox />} value="1" label="Crispetas" />
                        <FormControlLabel control={<Checkbox/>} value="2" label="Nachos"/>
                        <FormControlLabel control={<Checkbox />} value="3" label="Perro caliente"/>
                        <FormControlLabel control={<Checkbox />} value="4" label="Hamburguesa"/>
                        <FormControlLabel control={<Checkbox />} value="5" label="Papas fritas"/>
                        <FormControlLabel control={<Checkbox />} value="5" label="Otro"/>
                        <FormControlLabel control={<Checkbox />} value="5" label="Ninguno"/>
                    </FormGroup>
                </div>
                <br />
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

export default SecondPart