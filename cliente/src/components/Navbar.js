import React from 'react';
import './styles/Badge.css'
import Navbar from 'react-bootstrap/Navbar'  

//Imgs
import logo_bichoclo from '../images/LOGO-BICHOCLO.png';

class TheNavbar extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo_bichoclo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                        <div className="d-inline-block align-down">
                            <h2>BiChoclo</h2>
                        </div>
                    
                </Navbar.Brand>
            </Navbar>
        )
    }

}

export default TheNavbar;
