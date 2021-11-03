import React from "react";
import Servicios from "./Servicios";
import cumpleaños from "../img/cumpleaños.jpg";
import aniversario from "../img/aniversario.jpg";
import fiesta from "../img/fiesta.jpg";
import declaracion from "../img/declaracion.jpg";
import despedida from "../img/despedida.jpg";
import cena from "../img/cena.jpg";



class Servicioscontenedor extends React.Component{
    render(){
return (
    <>
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