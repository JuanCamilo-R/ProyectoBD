import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import CarouselContainer from './CarouselContainer';

class Card extends React.Component{
      render(){
          return(
              <div className = "content">
                   <CarouselContainer/>
              </div>
           
          );
      }

}

export default Card;