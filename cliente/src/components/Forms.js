import React from 'react';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
class Forms extends React.Component {

    state = {
        step: 1,
        cedula: '',
        nombre: '',
        apellido: '',
        edad: '',
        genero: '',
        comuna: '',
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

    render() {

        const { step } = this.state;
        const { cedula, nombre, apellido, edad, genero, comuna, barrio } = this.state;
        const values = { cedula, nombre, apellido, edad, genero, comuna, barrio };
        switch (step) {
            case 1:
                return (
                        <FirstPart nextStep={this.nextStep} inputChange={this.inputChange} values={values} />
                );
            case 2:
                return(
                    <SecondPart nextStep = {this.nextStep} prevStep = {this.prevStep} inputChange = {this.inputChange} values = {values}/>
                );
        }
    }
}

export default Forms;