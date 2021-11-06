import React from "react";
import About from "./About.js";
import Testimonios from "./AboutTestimonios.js";
import Germany from "../insumos/react.png";
import Testimonio1 from "../insumos/testimonio1@2x.png";
import Aboutimg1 from "../insumos/foto4@2x.png";
import Personal1 from "../insumos/personal1@2x.png";
import Personal2 from "../insumos/personal2@2x.png";
import Personal3 from "../insumos/personal3@2x.png";

import { Link } from "react-router-dom";


class AboutContenedor extends React.Component {
    render(){
        return (
            <>
              <style dangerouslySetInnerHTML={{__html: " \n@media (min-width: 576px){}\n.container-fluid{\n    display: flex; /* or inline-flex */\n  }\n\n*{\n    padding: 0;\n    margin:0;\n}\n.titulo{\n    display:flex;\n    align-items:center;\n    justify-content:space-around;\n    background:rgba(57, 61, 63, 0.993);\n    color:#ffff;\n    padding:10px;\n}\n.titulo .bar a{\n    font-size:11px;\n    margin:0 15px;\n    text-decoration:none;\n    color:#ffff;\n}\n\n\n\n.sticky-container{\n    position:fixed;\n    right:-120px;\n    top:150px;\n    width:170px;\n    z-index: 1100;\n}\n.sticky li{\n    list-style-type:none;\n    background-color:orange;\n    height:43px;\n    padding:0px;\n    margin:0px 0px 1px 0px;\n    -webkit-transition:all 0.25s ease-in-out;\n    -moz-transition:all 0.25s ease-in-out;\n    -o-transition:all 0.25s ease-in-out;\n    transition:all 0.25s ease-in-out;\n    cursor:pointer;\n}\n.sticky li:hover{\n    margin-left:-115px;\n}\n.sticky li img{\n    float:left;\n    margin:6px 10px;\n}\n.sticky li p{\n    margin:0px;\n}\n\n\n\n#pimg{\n    margin-top: 70px;\n}\n\nh1{\n    margin-top: 0px;\n    font-size: 80px;\n}\nh4{\n    color: rgb(168, 17, 17);\n    margin-left: 160px;\n    margin-bottom: 0px;\n}\n\n#historia{\n    margin-top: 100px;\n}\n\n#second{\n    margin-top: 70px;\n    background-color: rgb(190, 188, 188);\n}\n\n.col-4{\n    padding: 100px;\n}\n\n#colab{\n    border-radius: 300px;\n    background-color: grey;\n    border: rgb(168, 166, 166) 5px solid;\n}\n\n.carousel-inner{\n    padding: 100px 120px;\n}\n\n#cont{\n    margin-top: 100px;\n    margin-bottom: 70px;\n    color: rgb(168, 17, 17);\n}\n#bcont{\n    margin-bottom: 60px;\n}\n.form{\n    margin-top: 10px;\n}\n\n" }} />
             <About aboutimg1={Aboutimg1} personal1={Personal1} personal2={Personal2} personal3={Personal3} />
             <Testimonios testimonio1={Testimonio1} />
             

            </>
        );
    }
}
 export default AboutContenedor;