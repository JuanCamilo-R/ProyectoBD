import React from 'react';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
import ForthPart from './ForthPart';
import FifthPart from './FifthPart';
import SixthPart from './SixthPart';
import SeventhPart from './SeventhPart';
import EightPart from './EightPart';

class Forms extends React.Component {

    state = {
        step: 1,
        cedula: '',
        nombre: '',
        apellido: '',
        edad: '',
        genero: '',
        hijos_si_no: '',
        color: '',
        comuna: '',
        frecuencia_pelicula: '',
        genero_favorito_pelicula: [],
        atractivoPelicula: [],
        comida_favorita_pelicula: [],
        frecuencia_deporte: '',
        deporte_favorito: [],
        razon_deporte: [],
        razon_no_deporte: [],
        frecuencia_lectura: '',
        genero_favorito_lectura: [],
        adquiere_frecuencia_lectura: '',
        idiomas_lectura: [],
        frecuencia_cocina: '',
        comida_favorita_cocina: '',
        dificultades_cocina: [],
        ocasiones_cocina: [],
        frecuencia_musica: '',
        nivel_gusto_concierto: '',
        genero_musica: [],
        frecuencia_videojuegos: '',
        juego_videojuegos: '',
        consola_videojuegos: '',
        categoria_videojuegos: [],
        mes_datos_eventos: '',
        medio_datos_eventos: '',
        mascota_si_no: '',
        barrio: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 })
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    };


    inputChangeArray = category => event => {
        const target = event.target;
        var value = target.value;

        console.log(category);
        if(target.checked){
            this.state[category].push(value);
        }else{
            var index = this.state[category].indexOf(value);
            this.state[category].splice(index, 1);
        };
    }

    render() {

        const { step } = this.state;
        const {cedula, nombre, apellido, edad, genero, hijos_si_no, color, comuna, frecuencia_pelicula, 
              genero_favorito_pelicula, atractivoPelicula, comida_favorita_pelicula, frecuencia_deporte,
              deporte_favorito, razon_deporte, razon_no_deporte, frecuencia_lectura, genero_favorito_lectura,
              adquiere_frecuencia_lectura, idiomas_lectura, frecuencia_cocina, comida_favorita_cocina,
              ocasiones_cocina, frecuencia_musica, nivel_gusto_concierto, genero_musica,
              frecuencia_videojuegos, juego_videojuegos, consola_videojuegos, categoria_videojuegos,
              mes_datos_eventos, medio_datos_eventos, mascota_si_no, barrio
        } = this.state;
        const values = {
            cedula, nombre, apellido, edad, genero, hijos_si_no, color, comuna, frecuencia_pelicula, 
              genero_favorito_pelicula, atractivoPelicula, comida_favorita_pelicula, frecuencia_deporte,
              deporte_favorito, razon_deporte, razon_no_deporte, frecuencia_lectura, genero_favorito_lectura,
              adquiere_frecuencia_lectura, idiomas_lectura, frecuencia_cocina, comida_favorita_cocina,
              ocasiones_cocina, frecuencia_musica, nivel_gusto_concierto, genero_musica,
              frecuencia_videojuegos, juego_videojuegos, consola_videojuegos, categoria_videojuegos,
              mes_datos_eventos, medio_datos_eventos, mascota_si_no, barrio
        };
        switch (step) {
            case 1:
                return (
                    <FirstPart nextStep={this.nextStep} inputChange={this.inputChange} values={values} />
                );
            case 2:
                return (
                    <SecondPart nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} values={values} inputChangeArray = {this.inputChangeArray}/>
                );
            case 3:
                return(
                    <ThirdPart nextStep = {this.nextStep} prevStep = {this.prevStep} inputChange = {this.inputChange} values = {values} inputChangeArray = {this.inputChangeArray}/>
                 );
            case 4:
                return (
                    <ForthPart nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} values={values} inputChangeArray = {this.inputChangeArray}/>
               );

               case 5:
                return (
                    <FifthPart nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} values={values} inputChangeArray = {this.inputChangeArray}/>
               );
               case 6:
                return (
                    <SixthPart nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} values={values} inputChangeArray = {this.inputChangeArray} />
               );

               case 7:
                return (
                    <SeventhPart nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} values={values} inputChangeArray = {this.inputChangeArray} />
               );
               case 8:
                return (
                    <EightPart nextStep={this.nextStep} prevStep={this.prevStep} inputChange={this.inputChange} values={values} inputChangeArray = {this.inputChangeArray} />
               );

        }
    }
}

export default Forms;