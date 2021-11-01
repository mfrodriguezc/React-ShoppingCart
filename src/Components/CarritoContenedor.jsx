import React from "react";
import Carrito from "./Carrito";



import { Link } from "react-router-dom";


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