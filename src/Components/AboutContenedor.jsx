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
             
             <About aboutimg1={Aboutimg1} personal1={Personal1} personal2={Personal2} personal3={Personal3} />
             <Testimonios testimonio1={Testimonio1} />
             

            </>
        );
    }
}
 export default AboutContenedor;