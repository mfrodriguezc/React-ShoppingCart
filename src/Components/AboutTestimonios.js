import React, { Component } from "react";

class AboutTestimonios extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
        <>
        
        {/* <img src={this,this.props.bandera} alt="Imagen de una bandera"  />
        <h1>{ this.props.titulo } </h1>
        <label> {this.props.Population}  </label>     */}
      <div className="secciontestimonios">       
        <div className="row">   
          <div className="col-md-12">    
            <div id="demo2" className="carousel slide" data-ride="carousel">
              {/* Indicators */}
              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to={0} className="active" />
                <li data-target="#demo" data-slide-to={1} />
              </ul> 
              <div className="carrusel2">
                <div className="carousel-inner">
                  <br /><br /><br />
                  <div className="carousel-item active" align="center">
                    <div className="row">
                      <div className="col-md-2" />
                      <div className="col-md-2" id="textosBlanco">
                        <img src={this,this.props.testimonio1}  className="rounded-circle" alt="testimonio1_Imagen" width={254} height={186} />
                        <br /><br /><br /></div>
                      <div className="col-md-1" />
                      <div className="col-md-6" align="left">
                        <blockquote>
                          <h3 align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nulla fermentum sit amet dolor et dictum. Nulla volutpat condimentum nisi et 
                            porttitor. Vivamus posuere eros ullamcorper lorem facilisis, non vestibulum
                            felis porttitor. Donec sit amet enim at turpis varius pellentesque ut a metus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nulla fermentum sit amet dolor et dictum. Nulla volutpat condimentum nisi et 
                            porttitor.  <br /><br /> 
                          </h3>
                        </blockquote>
                        <h3 align="center">~Peter F. Drucker</h3>
                      </div>
                      <div className="col-md-2" />
                    </div>
                  </div>
                  <div className="carousel-item" align="center">
                    <div className="row">
                      <div className="col-md-2" />
                      <div className="col-md-2" id="textosBlanco">
                        <img src="https://media.revistagq.com/photos/6155b2a4a30b0a3e336d7d04/16:9/w_2560%2Cc_limit/GettyImages-1229892421.jpg" className="rounded-circle" alt="testimonio1_Imagen" width={254} height={186} />
                        <br /><br /><br /></div>
                      <div className="col-md-1" />
                      <div className="col-md-6" align="left">
                        <blockquote>
                          <h3 align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nulla fermentum sit amet dolor et dictum. Nulla volutpat condimentum nisi et 
                            porttitor. Vivamus posuere eros ullamcorper lorem facilisis, non vestibulum
                            felis porttitor. Donec sit amet enim at turpis varius pellentesque ut a metus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nulla fermentum sit amet dolor et dictum. Nulla volutpat condimentum nisi et 
                            porttitor.  <br /><br /> 
                          </h3>
                        </blockquote>
                        <h3 align="center">~Elon Musk</h3>
                      </div>
                      <div className="col-md-2" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Left and right controls */}
              <a className="carousel-control-prev" href="#demo2" data-slide="prev">
                <span className="carousel-control-prev-icon" />
              </a>
              <a className="carousel-control-next" href="#demo2" data-slide="next">
                <span className="carousel-control-next-icon" />
              </a>
            </div>
          </div> <br /><br /> </div></div>
        
        
        </>
        );
    }
}

export default AboutTestimonios;