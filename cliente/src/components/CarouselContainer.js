import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import FormTemplate from './FormTemplate';
import { render } from 'react-dom';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="containerForm" >
            <div className="carousel">
                <Carousel activeIndex={index} onSelect={handleSelect} autoPlay={false}>
                    <Carousel.Item>
                        <FormTemplate />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h1>HOLA</h1>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h1>HOLA</h1>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}
export default ControlledCarousel;