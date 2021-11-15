import React, { Component } from "react";

class About extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
        <>
        
        {/* <img src={this,this.props.bandera} alt="Imagen de una bandera"  />
        <h1>{ this.props.titulo } </h1>
        <label> {this.props.Population}  </label>     */}
        <div className="container-fluid">
        <div className="col">
          <div className="col-sm">
            <div className="row">
              <div className="col-sm" id="pimg">
                <img src={this,this.props.aboutimg1} className="img-fluid" alt="Responsive image" /> 
              </div>
              <div className="col-sm" id="historia">
                <a name="NuestraHistoria" />
                <h4>NUESTRA</h4>
                <h1>Historia</h1>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem, deserunt vero officiis dignissimos possimus tempore assumenda pariatur debitis autem inventore maxime obcaecati libero natus nesciunt numquam modi sequi odit. Quisquam quidem, deserunt vero officiis dignissimos possimus tempore assumenda pariatur.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam ullam maxime vel? Corrupti quaerat molestias error, necessitatibus odio pariatur architecto aut ducimus expedita dolor maiores, nulla deserunt veniam a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt eveniet nesciunt eius id corrupti? Autem magnam modi sint accusantium quisquam in cum, omnis harum distinctio sit quos porro deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatem! Qui voluptatem fugit unde, repudiandae ipsum nemo exercitationem dolor illum, debitis, repellendus eos! Amet cum nostrum deserunt, dolorum accusantium error!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt dolor officiis pariatur deleniti error minus ea. Modi aperiam, autem quis ipsum alias, fugit quisquam fugiat, excepturi dolorem voluptatem consequatur?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur atque sint quae autem, eius reprehenderit? Repudiandae, voluptate? Totam tempora velit ducimus dolorum autem, sequi, veritatis laborum fugiat neque facilis molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laboriosam neque iure maiores illo dolore commodi eius recusandae omnis veritatis sunt voluptate excepturi asperiores architecto, quaerat tenetur in deserunt aut! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus architecto qui tenetur expedita adipisci sit nulla saepe officiis amet quis alias provident.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md" >
            <div className="row row-cols-md-3" id="second">
              <div className="col-4" align="center">
                <a name="PlantillaColaboradores" />
                <img src={this,this.props.personal1} className="img-fluid" alt="" id="colab" width="200px" height="200px" />
                <center>
                  <br />
                  <br />
                  <h6>Juan Manuel Gomez B.</h6>
                  <hr />
                  <h6>Chef Ejecutivo</h6>
                </center>
              </div>
              <div className="col-4" align="center">
                <img src={this, this.props.personal2} className="img-fluid" alt="" id="colab" width="300px" height="200px" />
                <center>
                  <br />
                  <br />
                  <h6>Ana Isabel Casallas B.</h6>
                  <hr />
                  <h6>Chef Pastelera</h6>
                </center>
              </div>
              <div className="col-4" align="center">
                <img src={this, this.props.personal3} className="img-fluid" alt="" id="colab" width="200px" height="200px" />
                <center>
                  <br />
                  <br />
                  <h6>Maria Paulina Veloza G.</h6>
                  <hr />
                  <h6>Administradora</h6>
                </center>
              </div>
              <div className="col-4" align="center">
                <img src={this, this.props.personal3}  className="img-fluid" alt="" id="colab" width="200px" height="200px" />
                <center>
                  <br />
                  <br />
                  <h6>Nombre Apellido</h6>
                  <hr />
                  <h6>Cargo</h6>
                </center>
              </div>
              <div className="col-4" align="center">
                <img src={this, this.props.personal1} className="img-fluid" alt="" id="colab" width="200px" height="200px"  />
                <center>
                  <br />
                  <br />
                  <h6>Nombre Apellido</h6>
                  <hr />
                  <h6>Cargo</h6>
                </center>
              </div>
              <div className="col-4" align="center">
                <img src={this, this.props.personal2} className="img-fluid" alt="" id="colab" width="200px" height="200px" />
                <center>
                  <br />
                  <br />
                  <h6>Nombre Apellido</h6>
                  <hr />
                  <h6>Cargo</h6>
                </center>
              </div>
            </div>
          </div>
        </div></div>
        
        
        </>
        );
    }
}

export default About;