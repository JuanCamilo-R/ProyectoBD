import React, { Component } from 'react';
import './styles/Badge.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export class SecondPart extends Component {
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
                <h1 className="h1">Datos generales</h1>
                <div className="form-group">
                    <label htmlFor="cedula">
                        Cedula:
                    </label>
                    <input type="text" className="form-control" name="cedula" onChange={inputChange('nombre')} value={values.cedula} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">
                        Nombre:
                    </label>
                    <input type="text" className="form-control" name="nombre" onChange={inputChange('nombre')} value={values.nombre} />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">
                        Apellido:
                    </label>
                    <input type="text" className="form-control" name="apellido" onChange={inputChange('apellido')} value={values.apellido} />
                </div>
                <div className="form-group">
                    <label htmlFor="edad">
                        Edad:
                    </label>
                    <input type="text" className="form-control" name="edad" onChange={inputChange('edad')} value={values.edad} />
                </div>
                <div className="form-group">
                    <label htmlFor="genero">
                        Genero:
                    </label>
                    <div className="radio">
                        <RadioGroup aria-label="gender" name="gender1" value={values.genero} onChange={inputChange('genero')}>
                            <FormControlLabel value="Femenino" control={<Radio />} label="Femenino" />
                            <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
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

export default SecondPart