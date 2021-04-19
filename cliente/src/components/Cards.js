import React from 'react';
import FirstPart from './FirstPart';

class Card extends React.Component{

    state = {
        step: 1,
        nombre: '',
        apellido: '',
        email: ''
    };

    nextStep = () =>{
        const {step } = this.state;
        this.setState({step: step + 1})
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({step: step - 1});
    };

    inputChange = input => e =>{
        this.setState({
            [input] : e.target.value
        })
    };

     render(){

        const { step } = this.state;
        const {nombre, apellido, email} = this.state;
        const values = {nombre, apellido, email};
         switch(step){
             case 1:
                 return(
                    <FirstPart nextStep = {this.nextStep} inputChange = {this.inputChange} values = {values} />
                 );
         }
     }
}

export default Card;