import React, {component} from "react";



   
class Sabor extends React.Component{
render(props){
    return(
        <>
        <header className="carrousel"  >
        <img className="logo" src={this.props.imagen}/>
        <h1>{this.props.texto}</h1>
        </header>
        </>
    );
}}


export default Sabor;