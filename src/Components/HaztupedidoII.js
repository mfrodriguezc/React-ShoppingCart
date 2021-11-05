import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

class HaztupedidoII extends Component {

    constructor(props){
        super(props);
    }

    

    render(){
        return(
        <>
         <main className="container" >
        <section>
          <h1 className="display-3" style={{height: '250px', paddingTop: '70px'}}><strong>Haz tu pedidoo</strong></h1>
        </section>
        <div className="container" id="lista-productos">
          <div className="card-deck mb-1 ">
            <div className="card mb-12 shadow-sm">
              <section className="row" id="siete" style={{paddingBottom: '30px'}}>
                <div className="media col-sm-9">
                  <img src="insumos/Mejillones.jpg" alt="Mejillones oscuros en salsa de mantequilla y vino." style={{paddingRight: '40px'}} width="240px" height="150px" />
                  <div className="media-body">
                    <h4 className="display-5"><strong>Mejillones oscuros en salsa de mantequilla y vino</strong></h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit fugit ad delectus at 
                      consequuntur quas ullam quisquam, unde architecto necessitatibus deleniti ea quaerat facilis? 
                      Expedita neque quia magnam omnis!</p>
                    <h3 className="card-title pricing-card-title precio">$<span className>45000</span></h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h5>CANTIDAD</h5>
                  <div className="counter">
                    <div className="counter-inner">
                      <button className="btn" onclick="productCount(false)">-</button>
                      <input type="number" className="cantidad" defaultValue={1} id="input1" />
                      <button className="btn" onclick="productCount(true)">+</button>
                      <br />
                    </div>
                  </div>
                  <a href className="btn btn-warning btn-outline-light agregar-carrito" data-id={7} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                </div>
              </section>
            </div>
          </div>
          <div className="card-deck mb-1 ">
            <div className="card mb-12 shadow-sm">
              <section className="row" id="ocho" style={{paddingBottom: '30px'}}>
                <div className="media col-sm-9">
                  <img src="insumos/Risotto de setas.jpg" alt="Risotto de Setas" style={{paddingRight: '40px'}} width="240px" height="150px" />
                  <div className="media-body">
                    <h4 className="display-5"><strong>Risotto de Setas</strong></h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit fugit ad delectus at 
                      consequuntur quas ullam quisquam, unde architecto necessitatibus deleniti ea quaerat facilis? 
                      Expedita neque quia magnam omnis!</p>
                    <h3 className="card-title pricing-card-title precio">$<span className>40000</span></h3>
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
                  <a href className="btn btn-warning btn-outline-light agregar-carrito" data-id={8} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                </div>
              </section>
            </div>
          </div>
          <div className="card-deck mb-1 ">
            <div className="card mb-12 shadow-sm">
              <section className="row" id="nueve" style={{paddingBottom: '30px'}}>
                <div className="media col-sm-9">
                  <img src="insumos/Paella.jpg" alt="Paella Española" style={{paddingRight: '40px'}} width="240px" height="150px" />
                  <div className="media-body">
                    <h4 className="display-5"><strong>Paella Española</strong></h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit fugit ad delectus at 
                      consequuntur quas ullam quisquam, unde architecto necessitatibus deleniti ea quaerat facilis? 
                      Expedita neque quia magnam omnis!</p>
                    <h3 className="card-title pricing-card-title precio">$<span className>36500</span></h3>
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
                  <a href className="btn btn-warning btn-outline-light agregar-carrito" data-id={9} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                </div>
              </section>
            </div>
          </div>
          <div className="card-deck mb-1 ">
            <div className="card mb-12 shadow-sm">
              <section className="row" id="diez" style={{paddingBottom: '30px'}}>
                <div className="media col-sm-9">
                  <img src="insumos/Solomillo con espárragos.jpg" alt="Solomillo Agridulce" style={{paddingRight: '40px'}} width="240px" height="150px" />
                  <div className="media-body">
                    <h4 className="display-5"><strong>Solomillo Agridulce</strong></h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit fugit ad delectus at 
                      consequuntur quas ullam quisquam, unde architecto necessitatibus deleniti ea quaerat facilis? 
                      Expedita neque quia magnam omnis!</p>
                    <h3 className="card-title pricing-card-title precio">$<span className>45000</span></h3>
                  </div>
                </div>
                <div className="col-sm-3">
                  <h5>CANTIDAD</h5>
                  <div className="counter">
                    <div className="counter-inner">
                      <button className="btn" onclick="">-</button>
                      <input type="number" className="cantidad" defaultValue={1} id="input4" />
                      <button className="btn" onclick="productCount4(true)">+</button>
                      <br />
                    </div>
                  </div>
                  <a href className="btn btn-warning btn-outline-light agregar-carrito" data-id={10} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                </div>
              </section>
            </div>
          </div>
          <div className="card-deck mb-1 ">
            <div className="card mb-12 shadow-sm">
              <section className="row" id="once" style={{paddingBottom: '30px'}}>
                <div className="media col-sm-9">
                  <img src="insumos/Pasta pesto.jpg" alt="Pasta en Pesto" style={{paddingRight: '40px'}} width="240px" height="150px" />
                  <div className="media-body">
                    <h4 className="display-5"><strong>Pasta en Pesto</strong></h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit fugit ad delectus at 
                      consequuntur quas ullam quisquam, unde architecto necessitatibus deleniti ea quaerat facilis? 
                      Expedita neque quia magnam omnis!</p>
                    <h3 className="card-title pricing-card-title precio">$<span className>22000</span></h3>
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
                  <a href className="btn btn-warning btn-outline-light agregar-carrito" data-id={11} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                </div>
              </section>
            </div>
          </div>
          <div className="card-deck mb-1 ">
            <div className="card mb-12 shadow-sm">
              <section className="row" id="doce" style={{paddingBottom: '30px'}}>
                <div className="media col-sm-9">
                  <img src="insumos/Langostino.jpg" alt="Langostino" style={{paddingRight: '40px'}} width="240px" height="150px" />
                  <div className="media-body">
                    <h4 className="display-5"><strong>Langostino</strong></h4>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit fugit ad delectus at 
                      consequuntur quas ullam quisquam, unde architecto necessitatibus deleniti ea quaerat facilis? 
                      Expedita neque quia magnam omnis!</p>
                    <h3 className="card-title pricing-card-title precio">$<span className>65000</span></h3>
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
                  <a href className="btn btn-warning btn-outline-light agregar-carrito" data-id={12} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                </div>
              </section>
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
                <Link to="/menu" style={{color: 'black', fontSize: '18px', float: 'right'}}><ion-icon name="arrow-back-outline" style={{color: '#c215ab'}} /><strong>ANTERIOR</strong></Link>
                </div>
                <div className="col-sm-2" />
                <div className="col-sm-2 align-self-center">
                  <a href="#" style={{color: 'black', fontSize: '18px'}} className="not-active"><strong>SIGUIENTE</strong><ion-icon name="arrow-forward-outline" style={{color: '#c215ab'}} /></a>
                </div>
                <div className="col-sm-3" />
              </div>
            </div>
          </div>
        </aside>
        {/*CONTENIDO*/}

        <Helmet>
       <script src="/path/to/carritof.js" type="text/javascript" />
       <script src="/path/to/casillascount.js" type="text/javascript" />
       <script src="/path/to/pedido.js" type="text/javascript" />
       </Helmet>
      </main>
       
        
        
        
        </>
        );
    }
}

export default HaztupedidoII;