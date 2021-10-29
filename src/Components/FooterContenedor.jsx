import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";
import Logo from "../insumos/logo@2x.png";


class FooterContenedor extends React.Component {
    render(){
        return (
            <>
             
             <Footer Logo={Logo} />
             
            </>
        );
    }
}
 export default FooterContenedor;