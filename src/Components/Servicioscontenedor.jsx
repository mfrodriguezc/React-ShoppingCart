import React from "react";
import Servicios from "./Servicios";
import cumpleaños from "../insumos/cumpleaños.jpg";
import aniversario from "../insumos/aniversario.jpg";
import fiesta from "../insumos/fiesta.jpg";
import declaracion from "../insumos/aniversario.jpg";
import despedida from "../insumos/despedida.jpg";
import cena from "../insumos/cena.jpg";



class Servicioscontenedor extends React.Component{
    render(){
return (
    <>
    <style dangerouslySetInnerHTML={{__html: " \n\n\n  .carrousel h1{\n    font-size: 56px;\n    text-align: center;\n  }\n  /* imagen con carrousel */\n  \n  main p{\n    margin:16px 0;\n    color: #fff;\n    text-decoration: none;\n  }\n  main h1{\n    padding:13% 0;\n    font-size:56px;\n  }\n\n  /* descripcion de la propuesta */\n  .propuesta{\n    display:flex;\n    justify-content: space-around;\n  }\n  .articulo-caja{\n    display:grid;\n    grid-template-columns: 50% 50%;\n  }\n  .caja{\n    background:#3f1106;\n    width: 210px;\n    height:210px;\n    margin:5px 15px;\n    }\n  .propuesta img{\n    width:300px;\n    height:420px;\n  }\n   .recomendado{\n  font-size:56px;\n  color:#a52a2a;\n  }\n  .propuesta .menu button{\n    background:#ff4500;\n    width:137px;\n    height: 38px;\n    margin: 7px 30%;\n  }\n  .propuesta .menu button a{\n    text-decoration: none;\n    color:#fff;\n    font-size: 16px;\n  }\n  /* menu recomendacionnes del chef  */\n  section img{\n    width: 140px;\n    height: 140px;\n  }\n  .evento1{\n    display: flex;\n    justify-content: space-between;\n    color:#fff;\n  }\n  \n  .evento h2{\n    font-size:28px;\n  }\n  .evento svg{\n    display: block;\n    color:blue;\n    margin:auto;\n    \n  }\n  .evento p{\n    color:#fff;\n  }\n  .evento h1{\n    font-size: 56px;\n  }\n  \n  /* eventos */\n  .servicio{\n    font-size: 40px;\n  }\n  .servicio, .subtitulo,p{\n    color:black;\n    margin:20px 0;\n  }\n  .celebracion{\n    display: grid;\n    grid-template-columns:50% 50%;\n    background:#443355;\n    margin:10px 10px;\n  }\n  .section1{\n    display: grid;\n    grid-template-columns:50% 50%;\n    margin:15px 0;\n    padding:0 13px;\n  }\n  .section2{\n    display: grid;\n    grid-template-columns:50% 50%;\n  }\n  .celebracion img{\n    width:300px;\n    height:420px;\n  }\n  .celebracion h2{\n    font-size: 28px;\n    margin:0 0 8px;\n  }\n  .celebracion p{\n    font-size:16px;\n    margin:0 0 26px;}\n  .boton{\n    width:90%;\n    background:#17a2b8;\n    margin:0 50px ;\n    padding:10px 12px;\n    border:none;\n  }\n  .boton a{\n    text-decoration: none;\n    color:#fff;\n    text-align: center;\n    font-size:16px;\n  }\n  .contactanos{\n    background:#ff4500;\n    color:#fff;\n  }\n  /* pagina servicios */\n  .carousel {\n    position: relative;\n  }\n  \n  .carousel.pointer-event {\n    touch-action: pan-y;\n  }\n  \n  .carousel-inner {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n  }\n  \n  .carousel-item {\n    position: relative;\n    display: none;\n    float: left;\n    width: 100%;\n    margin-right: -100%;\n    backface-visibility: hidden;\n    transition:(carousel-transition);\n  }\n  \n  .carousel-item.active,\n  .carousel-item-next,\n  .carousel-item-prev {\n    display: block;\n  }\n\n" }} />
    <Servicios titulo="SERVICIOS" 
    boton="Realizar una reserva"
    parrafo1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Quam harum maiores quos, vitae deserunt illum ea cumque quidem? Perferendis sunt placeat accusantium 
    commodi deserunt dignissimos quasi? Consectetur sapiente.pernatur sapiente veritatis."
    parrafo2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. quis placeat qui voluptatem, pariatur reprehenderit debitis nulla laborum facilis blanditiis"
    evento1={cumpleaños}
    subtitulo1="Celebración de cumpleaños"
    evento2={aniversario}
    subtitulo2="Aniversarios"
    evento3={fiesta}
    subtitulo3="Fiestas infantiles"
    evento4={declaracion}
    subtitulo4="Declaraciones o propuestas"
    evento5={despedida}
    subtitulo5="Despedidas"
    evento6={cena}
    subtitulo6="Cena con amigos"
    parrafo3="Lorem ipsum dolor sit amet consectetur,
    adipisicing elit. Quam harum maiores 
    quos, vitae deserunt illum dolorem iusto 
    ea cumque quidem? Perferendis sunt 
    placeat accusantium commodi nulla 
    deserunt dignissimos quasi? Consectetur.
    A nisi distinctio vel.
    " contactanos="¿PREGUNTAS? CONTÁCTANOS"
    />
    </>
);
}
}

export default Servicioscontenedor;