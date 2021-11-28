import React, {Component} from "react";
import {Carousel} from 'react-bootstrap';


class Sabor extends React.Component{
render(props){
    return(
        <>
        
        <div className="Carousel-Sabor" >
        <Carousel   >
  <Carousel.Item  interval={700}>
    <img width="320" height="280" 
      className="d-block w-100"
      src={this.props.imagen}
      
    />

    <Carousel.Caption  >
    <section className="carrousel1" >
      <p >{this.props.texto1}</p>
       <p className="Span" style={{backgroundColor:"red"}}>{this.props.Span}</p>
       <p >{this.props.texto2}</p>
       </section>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img width="320" height="280" 
      className="d-block w-100"
      src={this.props.imagen}
      />

    <Carousel.Caption>
    <section className="carrousel2">
      <p style={{backgroundColor:"red",color:"white"}}>{this.props.texto}</p>
      </section>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1200}>
    <img
      className="d-block w-100" width="320" height="280" 
      src={this.props.imagen}
    />

    <Carousel.Caption>
    <section className="carrousel3">
      <p style={{color:"white"}}>{this.props.texto}</p>
      </section>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        </>
    );
}}


export default Sabor;