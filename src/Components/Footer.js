import React, { Component } from "react";


class Footer extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
        <>
        <div className="container-fluid">
        <footer style={{backgroundColor: '#3F1106'}}>
        <br /><br />
        <div className="row" align="center">
          <div className="col-md-3">
            <a href="index.html"> <img src={this, this.props.Logo} alt="logo" className="logo" width="100%" height="100%" /></a>
          </div>
          <div className="col-md-6">
            <div className="info" id="textosBlanco" align="left">
              <nav>
                <div className="row">
                  <div className="col-md-4"><a id="textosBlanco" href="MapaSitio.html">MAPA DEL SITIO</a></div>
                  <div className="col-md-4"><a id="textosBlanco" href="Contacto.html">CONTÁCTANOS</a></div>
                  <div className="col-md-4"><a id="textosBlanco" href="#">RESERVAS</a></div>
                </div>
              </nav>
              <br /><br /><br />
              <p>Restaurante sal y salsa Ltda</p>
              <p>Calle 19 No. 7-30.Bogotá</p>
              <p>reservas@salysalsa.com</p>
              <p>312 325 25 321</p>
              <br />
              <p>© Copyright 2020.</p>
            </div>
          </div>
          <div className="col-md-3" align="left">   
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9342643317805!2d-74.07400248705444!3d4.605791896654018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a1f30307cf%3A0xf863232d4608bc5b!2zQ2wuIDE5ICM3LTMwLCBCb2dvdMOh!5e0!3m2!1ses-419!2sco!4v1631466195287!5m2!1ses-419!2sco" style={{border: 0}} allowFullScreen loading="lazy" width="95%" height="100%" />
          </div>
        </div>
        <br /><br />
      </footer>
        </div>
        
        
        </>
        );
    }
}

export default Footer;