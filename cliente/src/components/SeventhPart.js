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
        const { values, inputChange } = this.props;
        return (
            <div className="form-container">
                <div>
                <h1 className="h1">Categoría de video juego</h1>
                <p className = "remainder"> Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta </p>
                </div>
                <div className="form-group form-design">
                    <label htmlFor="frecuencia_videojuegos">
                        ¿Con qué frecuencia juega video juegos en una semana?
                    </label>
                    <div className="radio">
                        <RadioGroup row arial-label="frecuencia_videojuegos" name="frecuencia_videojuegos" value={values.frecuencia_videojuegos} onChange={inputChange('frecuencia_videojuegos')}>
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
                    <label htmlFor="juego_videojuegos">
                         ¿Escoja el juego que más le gusta o que más le llama la atención?
                    </label>
                    <div className="radio">
                        <RadioGroup row arial-label="juego_videojuegos" name="juego_videojuegos" value={values.juego_videojuegos} onChange={inputChange('juego_videojuegos')}>
                            <FormControlLabel  value="1" control={<Radio />} label="Mario Bros" />
                            <FormControlLabel  value="2" control={<Radio />} label="GTA" />
                            <FormControlLabel  value="3" control={<Radio />} label="FIFA/PES" />
                            <FormControlLabel  value="4" control={<Radio />} label="LOL" />
                            <FormControlLabel  value="5" control={<Radio />} label="Fortnite" />
                            <FormControlLabel  value="6" control={<Radio />} label="Devil May Cry" />
                            <FormControlLabel  value="7" control={<Radio />} label="Minecraft" />
                            <FormControlLabel  value="8" control={<Radio />} label="Candy crush" />
                        </RadioGroup>
                    </div>
                </div>
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="consola_videojuegos">
                    ¿Qué consola utilizas más para jugar a videojuegos?
                    </label>
                    <div className="radio">
                        <RadioGroup row arial-label="consola_videojuegos" name="consola_videojuegos" value={values.consola_videojuegos} onChange={inputChange('consola_videojuegos')}>
                            <FormControlLabel  value="1" control={<Radio />} label="Play Station 2" />
                            <FormControlLabel  value="2" control={<Radio />} label="Play Station 3" />
                            <FormControlLabel  value="3" control={<Radio />} label="Play Station 4" />
                            <FormControlLabel  value="4" control={<Radio />} label="Play Station 5" />
                            <FormControlLabel  value="5" control={<Radio />} label="XBOX 360" />
                            <FormControlLabel  value="6" control={<Radio />} label="XBOX SERIES X" />
                            <FormControlLabel  value="7" control={<Radio />} label="XBOX SERIES S" />
                            <FormControlLabel  value="8" control={<Radio />} label="NINTENDO SWITCH" />
                            <FormControlLabel  value="9" control={<Radio />} label="NINTENDO 64" />
                            <FormControlLabel  value="10" control={<Radio />} label="Play Station 1" />
                            <FormControlLabel  value="11" control={<Radio />} label="Super Nintendo"/>
                            <FormControlLabel  value="12" control={<Radio />} label="PC Gamer" />
                        </RadioGroup>
                    </div>
                </div>
                
                <br/>
                <div className="form-group form-design">
                    <label htmlFor="categoria_videojuegos">
                    ¿Cuál categoría prefieres?
                    </label>
                    <FormGroup row arial-label="categoria_videojuegos" name="categoria_videojuegos" value={values.categoria_videojuegos} onChange={inputChangeArray('categoria_videojuegos')}>
                        <FormControlLabel control={<Checkbox />} label="Juegos de rol"/>
                        <FormControlLabel control={<Checkbox />} label="Juegos individuales"/>
                        <FormControlLabel control={<Checkbox />} label="Juegos Multijugador"/>
                        <FormControlLabel control={<Checkbox />} label="Juegos Deportivos"/>
                        <FormControlLabel control={<Checkbox />} label="Realidad Virtual"/>
                        <FormControlLabel control={<Checkbox />} label="Juegos de aventura"/>
                        <FormControlLabel control={<Checkbox />} label="Juegos de estrategia"/>
                        <FormControlLabel control={<Checkbox />} label="Juegos de mesa"/>
                        <FormControlLabel control={<Checkbox />} label="Juegos de apuesta"/>
                        <FormControlLabel control={<Checkbox />} label="Juegos de memoria"/>
                        <FormControlLabel control={<Checkbox />} label="Juegos de celular"/>
                        <FormControlLabel control={<Checkbox />} label="Juegos de carta"/>

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