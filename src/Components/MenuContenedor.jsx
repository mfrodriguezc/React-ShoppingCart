import React, { Component } from "react";
import { Link } from "react-router-dom";
import HaztupedidoI from "./haztupedidoI";

//import Pedido from "./pedido.js";
import Menu1 from "../insumos/menu1@2x.png";
import Menu2 from "../insumos/menu2@2x.png";
import Menu3 from "../insumos/menu3@2x.png";
import Menu4 from "../insumos/menu4@2x.png";
import Menu5 from "../insumos/menu5@2x.png";
import Menu6 from "../insumos/menu5@2x.png";






class MenuContenedor extends React.Component {
    
    render(){            
        return (
            <>            
             <HaztupedidoI menu1={Menu1} menu2={Menu2} menu3={Menu3} menu4={Menu4} menu5={Menu5} menu6={Menu6} />
             
            </>
        );
    }
}
 export default MenuContenedor;