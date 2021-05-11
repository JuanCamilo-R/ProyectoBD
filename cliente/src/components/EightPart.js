import React, { Component } from 'react';
import './styles/Badge.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export class EigthPart extends Component {
   
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values, inputChange } = this.props;
        return (
            <div className="form-container">
                <div>
                <h1 className="h1">Categoría de Evento</h1>
                <p className = "remainder"> Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta </p>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="peliculasFrecuencia">
                        En que mes le gustaria que se realizara el evento
                    </label>
                    <div className="radio">
                        <RadioGroup row arial-label="peliculasFrecuencia" name="peliculasFrecuencia" value={values.peliculasFrecuencia} onChange={inputChange('peliculasFrecuencia')}>
                            <FormControlLabel type="number" value="1" control={<Radio />} label="Enero" />
                            <FormControlLabel type="number" value="2" control={<Radio />} label="Febrero" />
                            <FormControlLabel type="number" value="3" control={<Radio />} label="Marzo" />
                            <FormControlLabel type="number" value="4" control={<Radio />} label="Abril" />
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Mayo" />
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Junio" />
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Julio" />
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Agosto" />
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Septiembre" />
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Octubre" />
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Noviembre" />
                            <FormControlLabel type="number" value="5" control={<Radio />} label="Diciembre" />
                        </RadioGroup>
                    </div>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="deporteFrecuencia">
                      ¿Cuáles son los medios por los cuales regularmente recibe información del evento?
                    </label>
                    <RadioGroup row arial-label="deporteFrecuencia" name="deporteFrecuencia" value={values.deporteFrecuencia} onChange={inputChange('deporteFrecuencia')}>
                        <FormControlLabel type="text" value="1" control={<Radio />} label="Periódico" />
                        <FormControlLabel type="text" value="2" control={<Radio />} label="Radio" />
                        <FormControlLabel type="text" value="3" control={<Radio />} label="TV" />
                        <FormControlLabel type="text" value="4" control={<Radio />} label="Internet" />
                        <FormControlLabel type="text" value="5" control={<Radio />} label="Volante" />
                    </RadioGroup>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="sector">
                        Le gustaria llevar a su mascota al evento
                    </label>
                    <div className="radio">
                        <RadioGroup row arial-label="sector" name="sector" /*value={values.sector}*/ onChange={inputChange('sector')}>
                            <FormControlLabel  value="1" control={<Radio />} label="Si"/>
                            <FormControlLabel  value="2" control={<Radio />} label="No" />
                        </RadioGroup>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-primary" onClick={this.back}>
                            Atrás.
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EigthPart