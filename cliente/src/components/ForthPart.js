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
        const { values, inputChange ,inputChangeArray } = this.props;
        return (
            <div className="form-container">
                <div>
                <h1 className="h1">Categoría de Lectura</h1>
                <p className = "remainder"> Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta </p>
                </div>
                <div className="form-group form-design">
                    <label htmlFor="frecuencia_lectura">
                        ¿Cuantas veces lee a la semana?
                    </label>
                    <div className="radio">
                        <RadioGroup row arial-label="frecuencia_lectura" name="frecuencia_lectura" value={values.frecuencia_lectura} onChange={inputChange('frecuencia_lectura')}>
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
                    <label htmlFor="genero_favorito_lectura">
                        ¿Cuál es su genero de lectura favorito?
                    </label>
                    <FormGroup row arial-label="genero_favorito_lectura" name="genero_favorito_lectura" value={values.genero_favorito_lectura} onChange={inputChangeArray('genero_favorito_lectura')}>
                        <FormControlLabel value="1" control={<Checkbox  />} label="Fantasía"/>
                        <FormControlLabel value="2" control={<Checkbox />} label="Ciencia ficción"/>
                        <FormControlLabel value="3" control={<Checkbox  />} label="Aventuras"/>
                        <FormControlLabel value="4" control={<Checkbox  />} label="Didácticos"/>
                        <FormControlLabel value="5" control={<Checkbox  />} label="Paranormal"/>
                        <FormControlLabel value="6" control={<Checkbox  />} label="Misterio"/>
                        <FormControlLabel value="7" control={<Checkbox  />} label="Distopía"/>
                        <FormControlLabel value="8" control={<Checkbox  />} label="Historia"/>
                        <FormControlLabel value="9" control={<Checkbox  />} label="Biografía"/>
                        <FormControlLabel value="10" control={<Checkbox  />} label="Religión"/>
                        <FormControlLabel value="11" control={<Checkbox  />} label="Educación"/>
                        <FormControlLabel value="12" control={<Checkbox  />} label="Poesía"/>
                        <FormControlLabel value="13" control={<Checkbox  />} label="Desarrollo personal"/>
                        <FormControlLabel value="14" control={<Checkbox  />} label="otro"/>
                 </FormGroup>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="adquiere_frecuencia_lectura">
                         ¿Cada cuanto adquiere nuevos libros?
                    </label>
                    <RadioGroup row arial-label="adquiere_frecuencia_lectura" name="adquiere_frecuencia_lectura" value={values.adquiere_frecuencia_lectura} onChange={inputChange('adquiere_frecuencia_lectura')}>
                        <FormControlLabel type="text" value="1" control={<Radio />} label="Cada semana" />
                        <FormControlLabel type="text" value="2" control={<Radio />} label="Cada mes" />
                        <FormControlLabel type="text" value="3" control={<Radio />} label="Una vez al año" />
                        <FormControlLabel type="text" value="4" control={<Radio />} label="No aplica" />
                    </RadioGroup>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="idiomas_lectura">
                        De los ultimos libros que has leído ¿en qué idioma estaban escritos?
                    </label>
                    <FormGroup row arial-label="idiomas_lectura" name="idiomas_lectura" value={values.idiomas_lectura} onChange={inputChangeArray('idiomas_lectura')}>
                        <FormControlLabel value="1" control={<Checkbox />} label="Español"/>
                        <FormControlLabel value="2" control={<Checkbox  />} label="Portugués"/>
                        <FormControlLabel value="3" control={<Checkbox  />} label="Alemán"/>
                        <FormControlLabel value="4" control={<Checkbox  />} label="Inglés"/>
                        <FormControlLabel value="5" control={<Checkbox  />} label="Frances"/>
                        <FormControlLabel value="6" control={<Checkbox  />} label="Italiano"/>
                        <FormControlLabel value="7" control={<Checkbox  />} label="Otros"/>
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