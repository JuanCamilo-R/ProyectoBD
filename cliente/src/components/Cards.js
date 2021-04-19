import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import { useState } from 'react';

class Card extends React.Component{
    
    static get CONTAINER_STYLE(){
        return {
            position: "relative",
            height: "100vh",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle"
        };
     }
    
     static get CARD_STYLE(){
         return {
             height: "750px",
             width: "750px",
             paddingTop: "80px",
             textAlign: "center",
             background: "#52C0F5",
             color: "#FFF",
             frontFamily: "sans-serif",
             fontSize: "12px",
             textTransform: "uppercase",
             borderRadius: "10px",
             boxSizing: "border-box"
         };
     }
    
     render(){
        const settings = {
         infinite: true,
         lazyLoad: true,
         speed: 300,
         slidesToShow: 3,
         centerMode: true,
         centerPadding: 0,
        };
         return(
             <div className = "App" style = {Card.CONTAINER_STYLE}>
                 <ReactCardCarousel autoplay = {false}>
                    <div style = {Card.CARD_STYLE} onKeyDown>FIRST QUERY</div>
                    <div style = {Card.CARD_STYLE}>SECOND QUERY</div>
                    <div style = {Card.CARD_STYLE}>THIRD QUERY</div>
                    <div style = {Card.CARD_STYLE}>FORTH QUERY</div>
                    <div style = {Card.CARD_STYLE}>FITH QUERY</div>
                </ReactCardCarousel>
             </div>
             /*
            <div style = {Card.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay = {false}>
                <div style = {Card.CARD_STYLE} onKeyDown>FIRST QUERY</div>
                <div style = {Card.CARD_STYLE}>SECOND QUERY</div>
                <div style = {Card.CARD_STYLE}>THIRD QUERY</div>
                <div style = {Card.CARD_STYLE}>FORTH QUERY</div>
                <div style = {Card.CARD_STYLE}>FITH QUERY</div>
            </ReactCardCarousel>
        </div>
        */
         )
     }
}

export default Card;