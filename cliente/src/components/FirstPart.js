import React, { Component } from 'react';
import './styles/Badge.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export class FirstPart extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    show = value => {
        console.log(value.genero)
    }

    render() {
        const { values, inputChange } = this.props;
        return (
            <div className="form-container">
                <h1 className="h1">Datos generales</h1>
                <div className="form-group">
                    <label htmlFor="cedula">
                        Cedula
                    </label>
                    <input type="text" className="form-control" name="cedula" onChange={inputChange('cedula')} value={values.cedula} />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">
                        Nombre
                    </label>
                    <input type="text" className="form-control" name="nombre" onChange={inputChange('nombre')} value={values.nombre} />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido">
                        Apellido
                    </label>
                    <input type="text" className="form-control" name="apellido" onChange={inputChange('apellido')} value={values.apellido} />
                </div>
                <div className="form-group">
                    <label htmlFor="edad">
                        Edad
                    </label>
                    <input type="text" className="form-control" name="edad" onChange={inputChange('edad')} value={values.edad} />
                </div>
                <div className="form-group">
                    <label htmlFor="genero">
                        Genero
                    </label>
                    <div className="radio">
                        <RadioGroup aria-label="gender" name="gender1" value={values.genero} onChange={inputChange('genero')}>
                            <FormControlLabel value="Femenino" control={<Radio/>} label="Femenino" />
                            <FormControlLabel value="Masculino" control={<Radio/>} label="Masculino"/>
                        </RadioGroup>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="barrio">
                        Barrio
                    </label>
                    <input type="text" className="form-control" name="barrio" onChange={inputChange('barrio')} value={values.barrio} />
                </div>
                <br />

                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>
                        Continuar
                    </button>
                </div>
            </div>
        )
    }
}

export default FirstPart