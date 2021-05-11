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
                        Cédula:
                    </label>
                <input  type = "text" className = "form-control" name = "cedula" onChange = {inputChange('cedula')} value = {values.cedula}/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="nombre">
                        Nombre:
                    </label>
                    <input type="text" className="form-control" name="nombre" onChange={inputChange('nombre')} value={values.nombre} />
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="apellido">
                        Apellido:
                    </label>
                    <input type="text" className="form-control" name="apellido" onChange={inputChange('apellido')} value={values.apellido} />
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="edad">
                        Edad:
                    </label>
                    <input type="text" className="form-control" name="edad" onChange={inputChange('edad')} value={values.edad} />
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="ocupacion">
                        Ocupacion:
                    </label>
                    <div className="radio">
                        <RadioGroup aria-label="ocupacion" name="ocupacion" value={values.ocupacion} onChange={inputChange('ocupacion')}>
                            <FormControlLabel value="1" control={<Radio/>} label="Estudiante" />
                            <FormControlLabel value="2" control={<Radio/>} label="Trabajador"/>
                            <FormControlLabel value="3" control={<Radio/>} label="Desempleado"/>
                        </RadioGroup>
                    </div>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="genero">
                        Genero:
                    </label>
                    <div className="radio">
                        <RadioGroup aria-label="genero" name="genero" value={values.genero} onChange={inputChange('genero')}>
                            <FormControlLabel value="1" control={<Radio/>} label="Masculino" />
                            <FormControlLabel value="2" control={<Radio/>} label="Femenino"/>
                        </RadioGroup>
                    </div>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="genero">
                        ¿Tiene hijos?
                    </label>
                    <div className="radio">
                        <RadioGroup aria-label="gender" name="gender1" value={values.hijos_si_no} onChange={inputChange('hijos_si_no')}>
                            <FormControlLabel value="Si" control={<Radio/>} label="Si" />
                            <FormControlLabel value="No" control={<Radio/>} label="No"/>
                        </RadioGroup>
                    </div>
                </div>
                <br/>

                <div className = "form-group">
                    <label htmlFor="Color">
                        Color favorito:
                    </label>
                    <input type = "text" className = "form-control" name = "color" onChange = {inputChange('color')} value = {values.color}/>
                </div>
                <br />

                <div className = "form-group">
                    <label htmlFor="comuna">
                        Comuna en la que vive: (Digite solo el numero, sin letras)
                    </label>
                    <input type = "number" className = "form-control" name = "comuna" onChange = {inputChange('comuna')} value = {values.comuna}/>
                </div>
                <br />

                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>
                        Continuar.
                    </button>
                </div>
            </div>
        )
    }
}

export default FirstPart