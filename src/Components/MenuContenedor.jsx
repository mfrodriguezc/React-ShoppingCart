import React, { Component } from "react";
import { Link } from "react-router-dom";
import HaztupedidoI from "./haztupedidoI";
import ScriptTag from 'react-script-tag';


const Carrito = props => (
    <ScriptTag type="text/javascript" src="/carritof.js" />
    )
    const CasillasCount = props => (
        <ScriptTag type="text/javascript" src="/casillascount.js" />
        )
        const Pedido = props => (
            <ScriptTag type="text/javascript" src="/pedido.js" />
            )

class MenuContenedor extends React.Component {
    render(){
        return (
            <>
             
             <HaztupedidoI />
             <Pedido />
             <CasillasCount />
             <Carrito />
            </>
        );
    }
}
 export default MenuContenedor;