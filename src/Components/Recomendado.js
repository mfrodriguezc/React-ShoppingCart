import React, {component} from "react";
import { Link } from "react-router-dom";

class Recomendado extends React.Component{
render(props){
    return(
        <>
        <h1 className="recomendado">{this.props.titulo}</h1>
        <div className="propuesta">
        <div className="articulo-caja">
        <article className="caja">{this.props.caja}</article>
        <article className="caja">{this.props.caja}</article>
        <article className="caja">{this.props.caja}</article>
        <article className="caja">{this.props.caja}</article>
        </div>
        <div className="menu">
        <img src={this.props.menu}/><br/>
        <button><Link to="/El menu">{this.props.boton}</Link>
        </button>
        </div>
        </div>
        </>
    );
}
}

export default Recomendado;