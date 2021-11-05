import React, { Component } from "react";
import { Link } from "react-router-dom";
import HaztupedidoI from "./haztupedidoI";

//import Pedido from "./pedido.js";
import Menu1 from "../insumos/menu1@2x.png";




class MenuContenedor extends React.Component {
    
    render(){            
        return (
            <>            
             <HaztupedidoI menu1={Menu1} />
             
            </>
        );
    }
}
 export default MenuContenedor;