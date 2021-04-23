import React from 'react';
import './styles/Badge.css'
import Forms from './Forms';
import TheNavbar from './Navbar';

class PaginaForm extends React.Component {

    render() {

        return (
            <div className = "h-100">
                <TheNavbar/>
                <div className="Form">
                    <div className="container">
                        <Forms/>
                    </div>
                </div>
            </div>

        )

    }

}

export default PaginaForm;