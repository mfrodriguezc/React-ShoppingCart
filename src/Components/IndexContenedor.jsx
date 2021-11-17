import React from "react";
import Sabor from "./Sabor";
import Propuesta from "./Propuesta";
import Recomendado from "./Recomendado";
import Evento from "./Evento";
import Testimonios from "./AboutTestimonios.js";
import Testimonio1 from "../insumos/testimonio1@2x.png";
import menu from "../insumos/menu@2x.png";
import icono1 from "../insumos/icono1@2x.png";
import icono2 from "../insumos/icono2@2x.png";
import icono3 from "../insumos/icono3@2x.png";
import icono4 from "../insumos/icono4@2x.png";
import logo from "../insumos/logo@2x.png";
import "./styles/iniciobrayan.css";



class IndexContenedor extends React.Component{
    render(){
return (
    <>
    
    <Sabor imagen={logo} texto="Sabores que exaltan tus sentidos" texto1="Sabores que" Span="exaltan" texto2="tus sentidos"/>
    <Propuesta  titulo="NUESTRA PROPUESTA" parrafo="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Nulla at maximus magna, ornare posuere augue. Vivamus convallis libero sit amet est efficitur, in condimentum urna consequat.
    Sed mi turpis, laoreet id ex id, eleifend imperdiet justo. Quisque pretium at purus nec fermentum. Aliquam nec eros eu est tincidunt pharetra sed vitae quam. Sed quis pulvinar enim. 
    Donec pulvinar rhoncus diam et auctor. Pellentesque eget quam cursus, placerat libero et, iaculis massa. Morbi pretium sem in libero malesuada vestibulum. Vestibulum sed ornare ipsum.
    Sed vestibulum, felis at pellentesque congue, nulla massa rhoncus mauris, vitae egestas erat tortor vitae libero. Nullam interdum viverra nibh at tempor. Cras at nisi id metus congue placerat. 
    Sed venenatis lectus vel justo ornare convallis. Curabitur feugiat, odio non dictum efficitur, diam felis sagittis sem, eu ullamcorper sem tellus et ante. Fusce blandit lobortis facilisis." />
    <Recomendado titulo="Los Recomendados del chef" caja=" "  menu={menu} boton="Consultar Menu"/>
    <Evento titulo="Organizamos tu evento" imagen1={icono1} subtitulo="Fiestas Tematicas" p="Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit.Nulla fermentum sit amet 
    dolor et dictum.Nulla volutpat
    condimentum nisi et porttitor.Donec sit 
    amet enim at turpis varius pellentesque ut a metus" 
     imagen2={icono2} subtitulo1="Matrimonios" imagen3={icono3} subtitulo2="Cenas Empresariales" imagen4={icono4} subtitulo3="Cumpleaños" />
                 <Testimonios testimonio1={Testimonio1} />
    </>
)
}
}

export default IndexContenedor;