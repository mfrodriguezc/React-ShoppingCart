import React, { Component } from "react";
import {Helmet} from "react-helmet";

class Carrito extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
        <>
        
        <div>
        <div>
          <div className="container">
            <section>
              <h1 className="display-5" style={{height: '250px', paddingTop: '70px'}}><strong>Carrito de Compra</strong></h1>
            </section>
            <div className="row">
              <div className="col-md-8">   
                <div id="carrito" className="form-group table-responsive">
                  <table className="form-group table" id="lista-compra">
                    <thead>
                      <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Sub Total</th>
                        <th scope="col">Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </div>
                <div align="center">
                  <div className="col-md-4 mb-2">
                    <a href="haztupedido.html" className="btn btn-warning btn-outline-light">Seguir comprando</a>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div className="col-md-4">
                <h2 className="d-flex justify-content-center mb-3">Total: </h2>
                <div id="carrito" className="form-group table-responsive">
                  <table className="form-group table" id="lista-compra">
                    <tbody><tr style={{display: 'none'}}>
                        <th colSpan={4} scope="col" className="text-right" />
                        <th scope="col">
                          <p id="subtotal" />
                        </th>
                        {/* <th scope="col"></th> */}
                      </tr>
                      <tr style={{display: 'none'}}>
                        <th colSpan={4} scope="col" className="text-right" />
                        <th scope="col">
                          <p id="igv" />
                        </th>
                        {/* <th scope="col"></th> */}
                      </tr>
                      <tr>
                        <th colSpan={4} scope="col" className="text-right">TOTAL: </th>
                        <th scope="col">
                          <input id="total" name="monto" className="font-weight-bold border-0" readOnly style={{backgroundColor: 'white'}} />
                        </th>
                        {/* <th scope="col"></th> */}
                      </tr>
                    </tbody></table>
                  <div align="center">
                    <div className="col-xs-12 col-md-4">
                      <button className="btn btn-warning btn-outline-light" data-toggle="modal" data-target="#formularioc"><ion-icon name="cart" />FINALIZAR COMPRA</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="modal fade" id="formularioc" tabIndex={-1} role="dialog" aria-labelledby="tituloVentana" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content" style={{width: '100%'}}>
                <div className="col-sm">
                  <h1 id="cont" className="text-center">Finalizar Compra</h1>
                </div>
                <div className="modal-header">
                  <button className="close" data-dismiss="modal" aria-label="cerrar">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="alert alert-success">
                    <div className="row mt-3">
                      <div className="col">
                        <h2 className="d-flex justify-content-center mb-3">Realizar Compra</h2>
                        <form id="procesar-pago">
                          <div className="form-group row">
                            <label htmlFor="cliente" className="col-12 col-md-2 col-form-label h2">Cliente:</label>
                            <div className="col-12 col-md-10">
                              <input type="text" className="form-control" id="cliente" placeholder="Ingresa nombre cliente" name="destinatario" />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="email" className="col-12 col-md-2 col-form-label h2">Correo:</label>
                            <div className="col-12 col-md-10">
                              <input type="text" className="form-control" id="correo" placeholder="Ingresa tu correo" name="cc_to" />
                            </div>
                          </div>
                          {/*  */}
                          <div id="carrito" className="form-group table-responsive">
                            <table className="form-group table" id="lista-compra">
                              <thead>
                                <tr>
                                  <th scope="col">Imagen</th>
                                  <th scope="col">Nombre</th>
                                  <th scope="col">Precio</th>
                                  <th scope="col">Cantidad</th>
                                  <th scope="col">Sub Total</th>
                                  <th scope="col">Eliminar</th>
                                </tr>
                              </thead>
                              <tbody>
                              </tbody>
                            </table>
                          </div>
                          {/* detalles de compra */}
                          {/*  <div class="form-group row">
                                            <label for="detalleCompra" class="col-12 col-md-2 col-form-label h2">Detalles:</label>
                                            <div class="col-12 col-md-10">
                                                <textarea name="detalleCompra" id="detalleCompra" cols="60" rows="10" ></textarea>
                                            </div>
                                        </div> */}
                          <div id="carrito2" className="form-group table-responsive">
                            <table className="form-group table" id="lista-compra2">
                              <thead>
                                <tr>
                                  <th scope="col">Imagen</th>
                                  <th scope="col">Nombre</th>
                                  <th scope="col">Precio</th>
                                  <th scope="col">Cantidad</th>
                                  <th scope="col">Sub Total</th>
                                  <th scope="col">Eliminar</th>
                                </tr>
                              </thead>
                              <tbody>
                              </tbody>
                            </table>
                          </div>
                          <div className="row justify-content-center" id="loaders">
                            <img id="cargando" src="insumos/cargando.gif" alt="cargando" width={220} />
                          </div>
                          <div className="row justify-content-between">
                            <div className="col-md-4 mb-2">
                              <a href="haztupedido.html" className="btn btn-success btn-block">Seguir comprando</a>
                            </div>
                            <div className="col-xs-12 col-md-4">
                              <button type="submit" className="btn btn-warning btn-outline-light" id="procesar-compra">Realizar compra</button>
                            </div>
                          </div>                                       
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* aqui finaliza el modal */}
        </div>
        <Helmet>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
       <script src="/path/to/carritof.js" type="text/javascript" />
       <script src="/path/to/compra.js" type="text/javascript" />
       </Helmet>
      </div>
        
        </>
        );
    }
}

export default Carrito;