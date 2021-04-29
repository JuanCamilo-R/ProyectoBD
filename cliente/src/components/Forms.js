import React from 'react';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';
class Forms extends React.Component {

    state = {
        step: 1,
        cedula: '',
        nombre: '',
        apellido: '',
        edad: '',
        genero: '',
        comuna: '',
        atractivoPelicula: []
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
            this.state.atractivoPelicula.push(value);
        }else{
            this.state.category.splice(value, 1);
        };
    }

    render() {

        const { step } = this.state;
        const { cedula, nombre, apellido, edad, genero, comuna, barrio, sector, peliculasFrecuencia,
            deporteFrecuencia, leerFrecuencia, cocinarFrecuencia, eventosFrecuencia, conciertoFrecuencia,
            color, mesPreferencia, ocupacion, deportivosFrecuencia, atractivoPelicula } = this.state;
        const values = {
            cedula, nombre, apellido, edad, genero, comuna, barrio,sector, peliculasFrecuencia,
            deporteFrecuencia, leerFrecuencia, cocinarFrecuencia, eventosFrecuencia, conciertoFrecuencia,
            color, mesPreferencia, ocupacion,  deportivosFrecuencia, atractivoPelicula
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
                    <ThirdPart nextStep = {this.nextStep} prevStep = {this.prevStep} inputChange = {this.inputChange} values = {values}/>
                );
        }
    }
}

export default Forms;