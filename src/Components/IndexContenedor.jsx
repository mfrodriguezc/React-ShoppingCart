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
     <style dangerouslySetInnerHTML={{__html: " \n\n\n  .carrousel h1{\n    font-size: 56px;\n    text-align: center;\n  }\n  /* imagen con carrousel */\n  \n  main p{\n    margin:16px 0;\n    color: #fff;\n    text-decoration: none;\n  }\n  main h1{\n    padding:13% 0;\n    font-size:56px;\n  }\n  .logo{\n    width: 320px;\n    height: 280px;\n    margin-left:450px;\n  }\n  /* descripcion de la propuesta */\n  .propuesta{\n    display:flex;\n    justify-content: space-around;\n  }\n  .articulo-caja{\n    display:grid;\n    grid-template-columns: 50% 50%;\n  }\n  .caja{\n    background:#3f1106;\n    width: 210px;\n    height:210px;\n    margin:5px 15px;\n    }\n  .propuesta img{\n    width:300px;\n    height:420px;\n  }\n   .recomendado{\n  font-size:56px;\n  color:#a52a2a;\n  }\n  .propuesta .menu button{\n    background:#ff4500;\n    width:137px;\n    height: 38px;\n    margin: 7px 30%;\n  }\n  .propuesta .menu button a{\n    text-decoration: none;\n    color:#fff;\n    font-size: 16px;\n  }\n  /* menu recomendacionnes del chef  */\n  section img{\n    width: 140px;\n    height: 140px;\n  }\n  .evento1{\n    display: flex;\n    justify-content: space-between;\n    color:#fff;\n  }\n  \n  .evento h2{\n    font-size:28px;\n  }\n  .evento svg{\n    display: block;\n    color:blue;\n    margin:auto;\n    \n  }\n  .evento p{\n    color:#fff;\n  }\n  .evento h1{\n    font-size: 56px;\n  }\n  \n  /* eventos */\n  .servicio{\n    font-size: 40px;\n  }\n  .servicio, .subtitulo,p{\n    color:black;\n    margin:20px 0;\n  }\n  .celebracion{\n    display: grid;\n    grid-template-columns:50% 50%;\n    background:#443355;\n    margin:10px 10px;\n  }\n  .section1{\n    display: grid;\n    grid-template-columns:50% 50%;\n    margin:15px 0;\n    padding:0 13px;\n  }\n  .section2{\n    display: grid;\n    grid-template-columns:50% 50%;\n  }\n  .celebracion img{\n    width:300px;\n    height:420px;\n  }\n  .celebracion h2{\n    font-size: 28px;\n    margin:0 0 8px;\n  }\n  .celebracion p{\n    font-size:16px;\n    margin:0 0 26px;}\n  .boton{\n    width:90%;\n    background:#17a2b8;\n    margin:0 50px ;\n    padding:10px 12px;\n    border:none;\n  }\n  .boton a{\n    text-decoration: none;\n    color:#fff;\n    text-align: center;\n    font-size:16px;\n  }\n  .contactanos{\n    background:#ff4500;\n    color:#fff;\n  }\n  /* pagina servicios */\n  .carousel {\n    position: relative;\n  }\n  \n  .carousel.pointer-event {\n    touch-action: pan-y;\n  }\n  \n  .carousel-inner {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n  }\n  \n  .carousel-item {\n    position: relative;\n    display: none;\n    float: left;\n    width: 100%;\n    margin-right: -100%;\n    backface-visibility: hidden;\n    transition:(carousel-transition);\n  }\n  \n  .carousel-item.active,\n  .carousel-item-next,\n  .carousel-item-prev {\n    display: block;\n  }\n\n" }} />
    <Sabor imagen={logo} texto="Sabores que exaltan tus sentidos"/>
    <Propuesta  titulo="NUESTRA PROPUESTA" parrafo="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Nulla at maximus magna, ornare posuere augue. Vivamus convallis libero sit amet est efficitur, in condimentum urna consequat.
    Sed mi turpis, laoreet id ex id, eleifend imperdiet justo. Quisque pretium at purus nec fermentum. Aliquam nec eros eu est tincidunt pharetra sed vitae quam. Sed quis pulvinar enim. 
    Donec pulvinar rhoncus diam et auctor. Pellentesque eget quam cursus, placerat libero et, iaculis massa. Morbi pretium sem in libero malesuada vestibulum. Vestibulum sed ornare ipsum.
    Sed vestibulum, felis at pellentesque congue, nulla massa rhoncus mauris, vitae egestas erat tortor vitae libero. Nullam interdum viverra nibh at tempor. Cras at nisi id metus congue placerat. 
    Sed venenatis lectus vel justo ornare convallis. Curabitur feugiat, odio non dictum efficitur, diam felis sagittis sem, eu ullamcorper sem tellus et ante. Fusce blandit lobortis facilisis." />
    <Recomendado titulo="Los Recomendados del chef" caja=" "  menu={menu} boton="Consultar Menu"/>
    <Evento titulo="Organizamos tu evento" icono1={icono1} subtitulo="Fiestas Tematicas" p="Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit.Nulla fermentum sit amet 
    dolor et dictum.Nulla volutpat
    condimentum nisi et porttitor.Donec sit 
    amet enim at turpis varius pellentesque ut a metus" 
     icono2={icono2} subtitulo1="Matrimonios" icono3={icono3} subtitulo2="Cenas Empresariales" icono4={icono4} subtitulo3="Cumpleaños" />
                 <Testimonios testimonio1={Testimonio1} />
    </>
);
}
}

export default IndexContenedor;