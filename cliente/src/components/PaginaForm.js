import React from 'react';
import './styles/Badge.css'
import Forms from './Forms';
import TheNavbar from './Navbar';

class PaginaForm extends React.Component {

    render() {

        return (
            <div>
                <TheNavbar/>
                <div className="Form" style={{marginTop:'40px'}}>
                    <div className="container">
                        <Forms/>
                    </div>
                </div>
            </div>

        )

    }

}

export default PaginaForm;