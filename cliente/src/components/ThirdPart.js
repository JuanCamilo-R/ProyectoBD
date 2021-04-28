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
                <h1 className="h1">Preguntas</h1>
                <div className="form-group">
                <label htmlFor="Eventos Culturales">
                        ¿Cuántas veces al mes asiste a eventos culturales? <br></br>
                        (entiéndase eventos culturales como teatro, cine, día del libro, danzas, etc.):
                    </label>        
                    <div className="radio">
                        
                        <RadioGroup row  aria-label="cultural" name="cultural1" value={values.culturalFrecuencia} onChange={inputChange('Cultural')}>
                            <FormControlLabel type="number" value="1" control={<Radio />} label="1"/>
                            <FormControlLabel type="number" value="2" control={<Radio />} label="2"/>
                            <FormControlLabel type="number" value="3" control={<Radio />} label="3"/>
                            <FormControlLabel type="number" value="4" control={<Radio />} label="4"/>
                            <FormControlLabel type="number" value="5" control={<Radio />} label="5 o más"/>
                        </RadioGroup>
                    </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="Eventos Deportivos">
                    ¿Cuántas veces al mes asiste a eventos deportivos? <br></br>
                    (entiéndase eventos deportivos como patinaje, fútbol, basketball, etc.)
                    </label>
                    <div className="radio">
                        <RadioGroup row  aria-label="deportivo" name="deportivo1" value={values.deportivosFrecuencia} onChange={inputChange('Deportivos')}>
                            <FormControlLabel type="number" value="1" control={<Radio />} label="1"/>
                            <FormControlLabel type="number" value="2" control={<Radio />} label="2"/>
                            <FormControlLabel type="number" value="3" control={<Radio />} label="3"/>
                            <FormControlLabel type="number" value="4" control={<Radio />} label="4"/>
                            <FormControlLabel type="number" value="5" control={<Radio />} label="5 o más"/>
                        </RadioGroup>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="barrio">
                        Barrio:
                    </label>
                    <input type="text" className="form-control" name="barrio" onChange={inputChange('barrio')} value={values.barrio} />
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

export default ThirdPart