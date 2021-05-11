import React, { Component } from 'react';
import './styles/Badge.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';


export class SixthPart extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values, inputChange,inputChangeArray } = this.props;
        return (
            <div className="form-container">
                <div>
                <h1 className="h1">Categoría de Musica</h1>
                <p className = "remainder"> Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta </p>
                </div>
                <div className="form-group form-design">
                    <label htmlFor="frecuencia_musica">
                        Con qué frecuencia escucha musica al día
                    </label>
                    <div className="radio">
                        <RadioGroup row arial-label="frecuencia_musica" name="frecuencia_musica" value={values.frecuencia_musica} onChange={inputChange('frecuencia_musica')}>
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
                    <label htmlFor="nivel_gusto_concierto">
                         ¿Qué tanto le gusta ir a conciertos?
                    </label>
                    <div className="radio">
                        <RadioGroup row arial-label="nivel_gusto_concierto" name="nivel_gusto_concierto" value={values.nivel_gusto_concierto} onChange={inputChange('nivel_gusto_concierto')}>
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
                    <label htmlFor="genero_musica">
                     Generos de musica favoritos
                    </label>
                    <FormGroup row arial-label="genero_musica" name="genero_musica" value={values.genero_musica} onChange={inputChangeArray('genero_musica')}>
                        <FormControlLabel control={<Checkbox />} label="Clásica"/>
                        <FormControlLabel control={<Checkbox  />} label="Salsa"/>
                        <FormControlLabel control={<Checkbox  />} label="Vallenato"/>
                        <FormControlLabel control={<Checkbox  />} label="Bachata"/>
                        <FormControlLabel control={<Checkbox  />} label="Popular"/>
                        <FormControlLabel control={<Checkbox  />} label="Electrónica"/>
                        <FormControlLabel control={<Checkbox  />} label="Merengue"/>
                        <FormControlLabel control={<Checkbox  />} label="Rock"/>
                        <FormControlLabel control={<Checkbox  />} label="Balada"/>
                        <FormControlLabel control={<Checkbox  />} label="Pop"/>
                        <FormControlLabel control={<Checkbox  />} label="Trap"/>

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

export default SixthPart