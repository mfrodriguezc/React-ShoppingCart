import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
    <>
    <div className="nav-bar">
<Link to="/Nav"><span>Sal&Salsa</span></Link>
<Link to="/about">NOSOTROS</Link>
<Link to="/menu">EL MENÚ</Link>
<Link to="/Servicios">SERVICIOS</Link>
<Link to="/contacto">CONTACTÁNOS</Link>
<Link to="/carrito"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 
1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2
2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg></Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <Link to="carrito" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg></Link>
              <div id="carrito" className="dropdown-menu" aria-labelledby="navbarCollapse">
                <table id="lista-carrito" className="table">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      {/*  <th>Descripcion</th> */}
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody />
                </table>
                <a href="#" id="vaciar-carrito" className="btn btn-primary btn-block">Vaciar Carrito</a>
                <a href="#" id="procesar-pedido" className="btn btn-danger btn-block">Ir al carrito</a>
              </div>
            </li>
          </ul>
        </div>
    </div>
    
    </>
    );
}

export default Navbar;