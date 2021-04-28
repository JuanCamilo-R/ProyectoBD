import React, { Component } from 'react';
import './styles/Badge.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';


export class ForthPart extends Component {
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
                <h1 className="h1">Categoría de Lectura</h1>
                <p className = "remainder"> Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta </p>
                </div>
                <div className="form-group form-design">
                    <label htmlFor="sector">
                        ¿Cuantas veces lee a la semana?
                    </label>
                    <div className="radio">
                        <RadioGroup row arial-label="sector" name="sector" /*value={values.sector}*/ onChange={inputChange('sector')}>
                            <FormControlLabel  value="1" control={<Radio />} label="1" />
                            <FormControlLabel  value="2" control={<Radio />} label="2" />
                            <FormControlLabel  value="3" control={<Radio />} label="3" />
                            <FormControlLabel  value="4" control={<Radio />} label="4" />
                            <FormControlLabel  value="5" control={<Radio />} label="5" />
                        </RadioGroup>
                    </div>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="leerFrecuencia">
                        ¿Cuál es su genero de lectura favorito?
                    </label>
                    <FormGroup row arial-label="deporteFrecuencia" name="deporteFrecuencia" value={values.deporteFrecuencia} onChange={inputChange('deporteFrecuencia')}>
                        <FormControlLabel control={<Checkbox  />} label="Fantasía"/>
                        <FormControlLabel control={<Checkbox />} label="Ciencia ficción"/>
                        <FormControlLabel control={<Checkbox  />} label="Aventuras"/>
                        <FormControlLabel control={<Checkbox  />} label="Didácticos"/>
                        <FormControlLabel control={<Checkbox  />} label="Paranormal"/>
                        <FormControlLabel control={<Checkbox  />} label="Misterio"/>
                        <FormControlLabel control={<Checkbox  />} label="Distopía"/>
                        <FormControlLabel control={<Checkbox  />} label="Historia"/>
                        <FormControlLabel control={<Checkbox  />} label="Biografía"/>
                        <FormControlLabel control={<Checkbox  />} label="Religión"/>
                        <FormControlLabel control={<Checkbox  />} label="Educación"/>
                        <FormControlLabel control={<Checkbox  />} label="Poesía"/>
                        <FormControlLabel control={<Checkbox  />} label="Desarrollo personal"/>
                        <FormControlLabel control={<Checkbox  />} label="otro"/>
                 </FormGroup>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="deporteFrecuencia">
                         ¿Cada cuanto adquiere nuevos libros?
                    </label>
                    <RadioGroup row arial-label="deporteFrecuencia" name="deporteFrecuencia" value={values.deporteFrecuencia} onChange={inputChange('deporteFrecuencia')}>
                        <FormControlLabel type="text" value="1" control={<Radio />} label="Cada semana" />
                        <FormControlLabel type="text" value="2" control={<Radio />} label="Cada mes" />
                        <FormControlLabel type="text" value="3" control={<Radio />} label="Una vez al año" />
                        <FormControlLabel type="text" value="4" control={<Radio />} label="No aplica" />
                    </RadioGroup>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="leerFrecuencia">
                        De los ultimos libros que has leído ¿en qué idioma estaban escritos?
                    </label>
                    <FormGroup row arial-label="deporteFrecuencia" name="deporteFrecuencia" value={values.deporteFrecuencia} onChange={inputChange('deporteFrecuencia')}>
                        <FormControlLabel control={<Checkbox />} label="Español"/>
                        <FormControlLabel control={<Checkbox  />} label="Portugués"/>
                        <FormControlLabel control={<Checkbox  />} label="Alemán"/>
                        <FormControlLabel control={<Checkbox  />} label="Inglés"/>
                        <FormControlLabel control={<Checkbox  />} label="Frances"/>
                        <FormControlLabel control={<Checkbox  />} label="Italiano"/>
                        <FormControlLabel control={<Checkbox  />} label="Otros"/>
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

export default ForthPart