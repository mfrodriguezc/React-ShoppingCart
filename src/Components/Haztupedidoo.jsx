import React from "react";
import { usePedido } from "../Hooks/usePedido";
import { Link } from "react-router-dom";

import Menu1 from "../insumos/menu1@2x.png";
import Menu2 from "../insumos/menu2@2x.png";
import Menu3 from "../insumos/menu3@2x.png";
import Menu4 from "../insumos/menu4@2x.png";
import Menu5 from "../insumos/menu5@2x.png";
import Menu6 from "../insumos/menu5@2x.png";
import { Helmet } from "react-helmet";

function Haztupedidoo() {

    const { countProduct, sumCountProduct, difCountProduct, 
        countProduct2, sumCountProduct2, difCountProduct2,
        countProduct3, sumCountProduct3, difCountProduct3 ,
        countProduct4, sumCountProduct4, difCountProduct4 ,
        countProduct5, sumCountProduct5, difCountProduct5 ,
        countProduct6, sumCountProduct6, difCountProduct6  } = usePedido();
const estilos = {

};

    return (
        <>
            <style dangerouslySetInnerHTML={{__html: " \n/*VENTANAS MODAL*/\n\n#ms{\n\tcolor: #79546E;\n}\n\n#link a{\n\ttext-decoration: none;\n\tcolor: #79546E;\n}\n\n\n\n\n/*MEDIAQUERY*/\n\n/* @media (min-width: 576px) { ... }\n\n@media (min-width: 768px) { ... }\n\n@media (min-width: 992px) { ... }\n\n@media (min-width: 1200px) { ... } */\n\n/*MEDIAQUERY*/\n\n*{\n    padding: 0;\n    margin:0;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\nh1{\n    margin-top:10px;\n    font-size: 60px;\n    /* color:#3F1106; */\n}\n@media(min-width:768px){\n.titulo{\n    display:flex;\n    align-items:center;\n    justify-content:space-around;\n    background:rgba(57, 61, 63, 0.993);\n    color:#ffff;\n    padding:10px;\n}}\n.titulo{\n    background:rgba(57, 61, 63, 0.993);\n    color:#ffff;\n    padding:10px;\n}\n.titulo h2{\n    font-size:32px;\n}\n.titulo .bar a{\n    font-size:13px;\n    margin:0 15px;\n    text-decoration:none;\n    color:#ffff;\n}\n.titulo .bar a{\n    font-size:13px;\n    margin:0 15px;\n    text-decoration:none;\n    color:#ffff;\n}\n.section{\n    display: grid;\n    grid-template-columns:50% 50%;\n    margin:40px 4px;\n}\n@media (max-width:768px){.section{\n    display:block;\n}}\n@media (max-width:768px){.section .seccion1{\n    display: grid;\n    grid-template-columns:40% 60%;\n    margin:10px 0;\n}\n.img{\n    width:300px;\n    height:400px;\n    }}\n@media (min-width:768px){.section .seccion1{\n    display: grid;\n    grid-template-columns:50% 50%;\n    margin:10px 10px;\n}\n.img{\nwidth:300px;\nheight:400px;\n}}\n.articulo1{\n    background:#435;\n    padding:13px;\n    height:400px;\n}\n\n.seccion1 .articulo1 .p{\ncolor:#fff;\nbackground:orangered;\nborder-radius:4px;\nfont-size:10px;\npadding:10px;\nalign-items: center;\n}\n\n.sticky-container{\n    position:fixed;\n    right:-120px;\n    top:150px;\n    width:170px;\n    z-index: 1100;\n}\n.sticky li{\n    list-style-type:none;\n    background-color:orange;\n    height:43px;\n    padding:0px;\n    margin:0px 0px 1px 0px;\n    -webkit-transition:all 0.25s ease-in-out;\n    -moz-transition:all 0.25s ease-in-out;\n    -o-transition:all 0.25s ease-in-out;\n    transition:all 0.25s ease-in-out;\n    cursor:pointer;\n}\n.sticky li:hover{\n    margin-left:-115px;\n}\n.sticky li img{\n    float:left;\n    margin:6px 10px;\n}\n.sticky li p{\n    margin:0px;\n}\nfooter{\n    background-color: #3F1106;\n    color: white;\n    overflow: hidden;\n    max-height: 320px;\n    max-width: 100%;\n    display: flex;\n    justify-content: space-around;\n    padding: 35px 15px 0 0;\n}\n\nfooter .row1 .col-md-4 a {\n    color:white;\n    text-decoration: none;\n    display:inline-flex;\n    justify-content: space-between;\n    flex-direction: row;\n}\nfooter .map{\n    overflow:hidden;\n    margin: auto;\n}\nfooter .row {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\nsection #uno button:hover{\n    background-color: #440105;\n    color: #eb8d00; \n}\nsection #dos button:hover{\n    background-color: #440105;\n    color: #eb8d00; \n}\nsection #tres button:hover{\n    background-color: #440105;\n    color: #eb8d00; \n}\nsection #cuatro button:hover{\n    background-color: #440105;\n    color: #eb8d00; \n}\nsection #cinco button:hover{\n    background-color: #440105;\n    color: #eb8d00; \n}\nsection #seis button:hover{\n    background-color: #440105;\n    color: #eb8d00; \n}\n.not-active{\n    pointer-events: none;\n    cursor: not-allowed;\n}\nsection #uno \n\n/*PRODUCT COUNTER*/\n\n.counter-inner{\n    border: 1px solid blue;\n\twidth: 260px;\n\tmargin: 0 auto;\n\tbackground-color:#fff;\n\tmargin-top:10px;\n\tborder-radius: 35px;\n}\n.counter-inner input{\n\twidth: 60px;\n\theight:35px;\n\tmargin: 30px 25px;\n\tbox-shadow: 5px 5px 10px grey;\n\tborder: 3px solid transparent;\n\toutline: none;\n\ttext-align: center;\n\tfont-size:20px;\n}\n.counter-inner input:hover{\n\tbox-shadow: 5px 5px 10px grey;\n\tbackground-color:#440105;\n\tcolor: #fff;\n\tborder: 3px solid #fff;\n\toutline: none;\n}\n.counter-inner input::placeholder{\n\tcolor: #000;\n}\n.counter-inner .btn{\n\twidth: 40px;\n\theight: 40px;\n\tbackground-color:#eb8d00;\n\tcolor: #fff;\n\tborder: 3px solid #fff;\n\toutline:none;\n\tbox-shadow: 5px 5px 10px grey;\n\tfont-size:20px;\n\ttext-align: center;\n}\n.counter-inner .btn:hover{\n\tbackground-color: #440105;\n\tcolor: #fff;\n}\n#cont{\n    margin-top: 100px;\n    margin-bottom: 70px;\n    color: rgb(168, 17, 17);\n}\n#bcont{\n    margin-bottom: 60px;\n}\n.form{\n    margin-top: 10px;\n}\n\n" }} />
            <div className="application">
                <div className="container-fluid" >
                    <div className="container-fluid">
                        <section>
                            <h1 className="display-3" style={{ height: '250px', paddingTop: '70px' }}><strong>Haz tu pedido</strong></h1>
                        </section>
                        <div className="container" id="lista-productos">
                            <div className="card-deck mb-1 ">
                                <div className="card mb-12 shadow-sm">
                                    <section className="row" id="uno" style={{ paddingBottom: '30px' }}>
                                        <div className="media col-sm-9">
                                            <img src={Menu1} alt="Costillas Kosher" style={{ paddingRight: '40px' }} width="240px" height="150px" />
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
                                                    <button className="btn" onClick={() =>
                                                        difCountProduct()
                                                    }>-</button>

                                                    <input type="Number" className="cantidad"
                                                        value={countProduct} id="input1" />

                                                    <button className="btn" onClick={() =>
                                                        sumCountProduct()}>+mas</button>
                                                    <br />
                                                </div>
                                            </div>
                                            <a href className="btn btn-warning btn-outline-light agregar-carrito"
                                                data-id={1} onclick="return confirmarCarrito()"><ion-icon name="cart" />Agregar al Carrito</a>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div className="card-deck mb-1 ">
                                <div className="card mb-12 shadow-sm">
                                    <section className="row" id="dos" style={{ paddingBottom: '30px' }}>
                                        <div className="media col-sm-9">
                                            <img src={Menu2} alt="Arroz Mansaf" style={{ paddingRight: '40px' }} width="240px" height="150px" />
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
                                                    <button className="btn" onClick=
                                                    { () => difCountProduct2()} >-</button>
                                                    <input type="number" className="cantidad" 
                                                    value={countProduct2} id="input2" />
                                                    <button className="btn" onClick=
                                                    {() => sumCountProduct2()} >+</button>
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
                                    <section className="row" id="tres" style={{ paddingBottom: '30px' }}>
                                        <div className="media col-sm-9">
                                            <img src={Menu3} alt="Cocido Haifa" style={{ paddingRight: '40px' }} width="240px" height="150px" />
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
                                                    <button className="btn" onClick=
                                                    { () => difCountProduct3()} >-</button>
                                                    <input type="number" className="cantidad" 
                                                    value={countProduct3} id="input3" />
                                                    <button className="btn" onClick=
                                                    { () => sumCountProduct3()} >+</button>
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
                                    <section className="row" id="cuatro" style={{ paddingBottom: '30px' }}>
                                        <div className="media col-sm-9">
                                            <img src={Menu4} alt="Tentaculo de Parrilla" style={{ paddingRight: '40px' }} width="240px" height="150px" />
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
                                                    <button className="btn" onClick=
                                                    { () => difCountProduct4()} >-</button>
                                                    <input type="number" className="cantidad" 
                                                    value={countProduct4} id="input4" />
                                                    <button className="btn" onClick=
                                                    { () => sumCountProduct4()} >+</button>
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
                                    <section className="row" id="cinco" style={{ paddingBottom: '30px' }}>
                                        <div className="media col-sm-9">
                                            <img src={Menu5} alt="Brochetas Sal&Salsa" style={{ paddingRight: '40px' }} width="240px" height="150px" />
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
                                                    <button className="btn" onClick=
                                                    { () => difCountProduct5()} >-</button>
                                                    <input type="number" className="cantidad" 
                                                    value={countProduct5} id="input5" />
                                                    <button className="btn" onClick=
                                                    { () => sumCountProduct5()} >+</button>
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
                                    <section className="row" id="seis" style={{ paddingBottom: '30px' }}>
                                        <div className="media col-sm-9">
                                            <img src={Menu6} alt="Camarones BBQ" style={{ paddingRight: '40px' }} width="240px" height="150px" />
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
                                                    <button className="btn" onClick=
                                                    { () => difCountProduct6()} >-</button>
                                                    <input type="number" className="cantidad" 
                                                    value={countProduct6} id="input6" />
                                                    <button className="btn" onClick=
                                                    { () => sumCountProduct6()} >+</button>
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
                                <div className="row" style={{ height: '150px' }}>
                                    <div className="col-sm-3" />
                                    <div className="col-sm-2 align-self-center">
                                        <a href="#" style={{ color: 'black', fontSize: '18px', float: 'right' }} className="not-active"><ion-icon name="arrow-back-outline" style={{ color: '#c215ab' }} /><strong>ANTERIOR</strong></a>
                                    </div>
                                    <div className="col-sm-2" />
                                    <div className="col-sm-2 align-self-center">

                                        <Link to="/menu2" style={{ color: 'black', fontSize: '18px' }}><strong>SIGUIENTE</strong><ion-icon name="arrow-forward-outline" style={{ color: '#c215ab' }} /></Link>
                                    </div>
                                    <div className="col-sm-3" />
                                </div>
                            </div>

                        </div>
                    </aside>
                    {/*CONTENIDO*/}

                </div>
                <Helmet>



                </Helmet>
            </div>


        </>
    )
}

export default Haztupedidoo;

