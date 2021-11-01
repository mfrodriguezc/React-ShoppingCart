import React, { Component } from "react";
import { Link } from "react-router-dom";

class HaztupedidoI extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
        <>
         
       <main className="container-fluid" >
       <div className="container-fluid">
        <section>
          <h1 className="display-3" style={{height: '250px', paddingTop: '70px'}}><strong>Haz tu pedido</strong></h1>
        </section>
        <div className="container" id="lista-productos">
          <div className="card-deck mb-1 ">
            <div className="card mb-12 shadow-sm">
              <section className="row" id="uno" style={{paddingBottom: '30px'}}>
                <div className="media col-sm-9">
                  <img src="insumos/menu1@2x.png" alt="Costillas Kosher" style={{paddingRight: '40px'}} width="240px" height="150px" />
                  <div className="media-body">
                    <h4 className="display-5"><strong>Costillas Kosher</strong></h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit fugit ad delectus at 
                      consequuntur quas ullam quisquam, unde architecto necessitatibus deleniti ea quaerat facilis? 
                      Expedita neque quia magnam omnis!</p>
                    <h3 className="card-title pricing-card-title precio">$<span className>5000</span></h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h5>CANTIDAD</h5>
                  <div className="counter">
                    <div className="counter-inner">
                      <button className="btn" onclick="productCount(false)">-</button>
                      <input type="Number" className="cantidad" defaultValue={1} id="input1" /> 
                      <button className="btn" onclick="productCount(true)">+</button>
                      <br />
                    </div>
                  </div>
                  <a href className="btn btn-warning btn-outline-light agregar-carrito" data-id={1} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                </div>
              </section>
            </div>
          </div>
          <div className="card-deck mb-1 ">
            <div className="card mb-12 shadow-sm">
              <section className="row" id="dos" style={{paddingBottom: '30px'}}>
                <div className="media col-sm-9">
                  <img src="insumos/menu2@2x.png" alt="Arroz Mansaf" style={{paddingRight: '40px'}} width="240px" height="150px" />
                  <div className="media-body">
                    <h4 className="display-5"><strong>Arroz Mansaf</strong></h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit fugit ad delectus at 
                      consequuntur quas ullam quisquam, unde architecto necessitatibus deleniti ea quaerat facilis? 
                      Expedita neque quia magnam omnis!</p>
                    <h3 className="card-title pricing-card-title precio">$<span className>28000</span></h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h5>CANTIDAD</h5>
                  <div className="counter">
                    <div className="counter-inner">
                      <button className="btn" onclick="productCount2(false)">-</button>
                      <input type="number" className="cantidad" defaultValue={1} id="input2" />
                      <button className="btn" onclick="productCount2(true)">+</button>
                      <br />
                    </div>
                  </div>
                  <a href className="btn btn-warning btn-outline-light agregar-carrito" data-id={2} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                </div>
              </section>
            </div>
          </div>
          <div className="card-deck mb-1 ">
            <div className="card mb-12 shadow-sm">
              <section className="row" id="tres" style={{paddingBottom: '30px'}}>
                <div className="media col-sm-9">
                  <img src="insumos/menu3@2x.png" alt="Cocido Haifa" style={{paddingRight: '40px'}} width="240px" height="150px" />
                  <div className="media-body">
                    <h4 className="display-5"><strong>Cocido Haifa</strong></h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit fugit ad delectus at 
                      consequuntur quas ullam quisquam, unde architecto necessitatibus deleniti ea quaerat facilis? 
                      Expedita neque quia magnam omnis!</p>
                    <h3 className="card-title pricing-card-title precio">$<span className>22500</span></h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h5>CANTIDAD</h5>
                  <div className="counter">
                    <div className="counter-inner">
                      <button className="btn" onclick="productCount3(false)">-</button>
                      <input type="number" className="cantidad" defaultValue={1} id="input3" />
                      <button className="btn" onclick="productCount3(true)">+</button>
                      <br />
                    </div>
                  </div>
                  <a href className="btn btn-warning btn-outline-light agregar-carrito" data-id={3} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                </div>
              </section>
            </div>
          </div>
          <div className="card-deck mb-1 ">
            <div className="card mb-12 shadow-sm">
              <section className="row" id="cuatro" style={{paddingBottom: '30px'}}>
                <div className="media col-sm-9">
                  <img src="insumos/menu4@2x.png" alt="Tentaculo de Parrilla" style={{paddingRight: '40px'}} width="240px" height="150px" />
                  <div className="media-body">
                    <h4 className="display-5"><strong>Tentaculo de Parrilla</strong></h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit fugit ad delectus at 
                      consequuntur quas ullam quisquam, unde architecto necessitatibus deleniti ea quaerat facilis? 
                      Expedita neque quia magnam omnis!</p>
                    <h3 className="card-title pricing-card-title precio">$<span className>30000</span></h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h5>CANTIDAD</h5>
                  <div className="counter">
                    <div className="counter-inner">
                      <button className="btn" onclick="productCount4(false)">-</button>
                      <input type="number" className="cantidad" defaultValue={1} id="input4" />
                      <button className="btn" onclick="productCount4(true)">+</button>
                      <br />
                    </div>
                  </div>
                  <a href className="btn btn-warning btn-outline-light agregar-carrito" data-id={4} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                </div>
              </section>
            </div>
          </div>
          <div className="card-deck mb-1 ">
            <div className="card mb-12 shadow-sm">
              <section className="row" id="cinco" style={{paddingBottom: '30px'}}>
                <div className="media col-sm-9">
                  <img src="insumos/foto1@2x.png" alt="Brochetas Sal&Salsa" style={{paddingRight: '40px'}} width="240px" height="150px" />
                  <div className="media-body">
                    <h4 className="display-5"><strong>Brochetas Sal&amp;Salsa</strong></h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit fugit ad delectus at 
                      consequuntur quas ullam quisquam, unde architecto necessitatibus deleniti ea quaerat facilis? 
                      Expedita neque quia magnam omnis!</p>
                    <h3 className="card-title pricing-card-title precio">$<span className>20000</span></h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h5>CANTIDAD</h5>
                  <div className="counter">
                    <div className="counter-inner">
                      <button className="btn" onclick="productCount5(false)">-</button>
                      <input type="number" className="cantidad" defaultValue={1} id="input5" />
                      <button className="btn" onclick="productCount5(true)">+</button>
                      <br />
                    </div>
                  </div>
                  <a href className="btn btn-warning btn-outline-light agregar-carrito" data-id={5} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                </div>
              </section>
            </div>
          </div>
          <div className="card-deck mb-1 ">
            <div className="card mb-12 shadow-sm">
              <section className="row" id="seis" style={{paddingBottom: '30px'}}>
                <div className="media col-sm-9">
                  <img src="insumos/menu5@2x.png" alt="Camarones BBQ" style={{paddingRight: '40px'}} width="240px" height="150px" />
                  <div className="media-body">
                    <h4 className="display-5"><strong>Camarones BBQ</strong></h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit fugit ad delectus at 
                      consequuntur quas ullam quisquam, unde architecto necessitatibus deleniti ea quaerat facilis? 
                      Expedita neque quia magnam omnis!</p>
                    <h3 className="card-title pricing-card-title precio">$<span className>35000</span></h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h5>CANTIDAD</h5>
                  <div className="counter">
                    <div className="counter-inner">
                      <button className="btn" onclick="productCount6(false)">-</button>
                      <input type="number" className="cantidad" defaultValue={1} id="input6" />
                      <button className="btn" onclick="productCount6(true)">+</button>
                      <br />
                    </div>
                  </div>
                  <a href className="btn btn-warning btn-outline-light agregar-carrito" data-id={6} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                </div>
              </section>
            </div>
          </div>
        </div>
        </div>

        <aside>
          
          {/*BOTONES ANTERIOR - SIGUIENTE */}
          <div className="container-fluid">
            <div className="container">
              <div className="row" style={{height: '150px'}}>
                <div className="col-sm-3" />
                <div className="col-sm-2 align-self-center">
                  <a href="#" style={{color: 'black', fontSize: '18px', float: 'right'}} className="not-active"><ion-icon name="arrow-back-outline" style={{color: '#c215ab'}} /><strong>ANTERIOR</strong></a>
                </div>
                <div className="col-sm-2" />
                <div className="col-sm-2 align-self-center">
                
                  <Link to="/menu2" style={{color: 'black', fontSize: '18px'}}><strong>SIGUIENTE</strong><ion-icon name="arrow-forward-outline" style={{color: '#c215ab'}} /></Link>
                </div>
                <div className="col-sm-3" />
              </div>
            </div>
            
          </div>
        </aside>
        {/*CONTENIDO*/}
       
      </main>
        
        
        
        </>
        );
    }
}

export default HaztupedidoI;