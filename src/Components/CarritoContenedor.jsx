import React from "react";
import Carrito from "./Carrito";
import ScriptTag from "react-script-tag/lib/ScriptTag";


import { Link } from "react-router-dom";


const Carritof = props => (
    <ScriptTag type="text/javascript" src="/carritof.js" />
    )
    const Compra = props => (
        <ScriptTag type="text/javascript" src="/compra.js" />
        )

class CarritoContenedor extends React.Component {
    render(){
        return (
            <>
             
             <Carrito />
             <Link to="/about2">About2</Link>

             

            </>
        );
    }
}
 export default CarritoContenedor;