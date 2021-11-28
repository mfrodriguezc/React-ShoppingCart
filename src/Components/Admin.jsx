import React from "react";


import { Link } from "react-router-dom";


class Admin extends React.Component {
    render(){
        return (
            <>
            <div class="row">
                <h1>Integrantes: </h1>
            </div>
            <div class="row">
                <h4> Shelsy Lorena Rodriguez Piñeros</h4>
            </div>
            <div class="row">
                                <h4> Brayan Esteban Ramirez Soto </h4>
            </div>
            <div class="row">
                <h4> Martin Felipe Rodriguez Caraballo</h4>
            </div>
            
            <div class="row">
                <h2><Link to="/empleado">Empleados</Link></h2>
            </div>
            <div class="row">
                <h2><Link to="/comentario">Comentarios</Link></h2>
            </div>
            <div class="row">
                <h2><Link to="/cliente">Clientes</Link></h2>
            </div>
            <div class="row">
                <h2><Link to="/plato">Platos</Link></h2>
            </div>
           
            

            </>
        );
    }
}
 export default Admin;