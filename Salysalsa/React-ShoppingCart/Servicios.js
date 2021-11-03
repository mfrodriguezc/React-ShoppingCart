import React, {component} from "react";
import { Link } from "react-router-dom";


class Servicios extends React.Component{
render(props){
    return(
        <>
        <h1 className="servicio">{this.props.titulo}</h1>
        <button class="boton"><Link  to="/Contacto">{this.props.boton}</Link></button>
        <article className="section1">
            <div>
        <p>{this.props.parrafo1}</p>
        <br/>
        <p>{this.props.parrafo2}</p>
        </div>
        <div>
        <p>{this.props.parrafo1}</p>
        <br/>
        <p>{this.props.parrafo2}</p>
        </div>
        </article>
        <section className="section2">
        <article className="celebracion">
        <div>
        <img src={this.props.evento1} />
        </div>
        <div className="articulo1">
        <h2 className="subtitulo">{this.props.subtitulo1}</h2>
        <p>{this.props.parrafo3}</p>
        <p className="contactanos">{this.props.contactanos}</p>
        </div>
        </article>
        <article className="celebracion">
        <div>
        <img src={this.props.evento2} />
        </div>
        <div className="articulo1">
        <h2 className="subtitulo">{this.props.subtitulo2}</h2>
        <p>{this.props.parrafo3}</p>
        <p className="contactanos">{this.props.contactanos}</p>
        </div>
        </article>
        <article className="celebracion">
        <div>
        <img src={this.props.evento3} />
        </div>
        <div className="articulo1">
        <h2 className="subtitulo">{this.props.subtitulo3}</h2>
        <p>{this.props.parrafo3}</p>
        <p className="contactanos">{this.props.contactanos}</p>
        </div>
        </article>
        <article className="celebracion">
        <div>
        <img src={this.props.evento4} />
        </div>
        <div className="articulo1">
        <h2 className="subtitulo">{this.props.subtitulo4}</h2>
        <p>{this.props.parrafo3}</p>
        <p className="contactanos">{this.props.contactanos}</p>
        </div>
        </article>
        <article className="celebracion">
        <div>
        <img src={this.props.evento5} />
        </div>
        <div className="articulo1">
        <h2 className="subtitulo">{this.props.subtitulo5}</h2>
        <p>{this.props.parrafo3}</p>
        <p className="contactanos">{this.props.contactanos}</p>
        </div>
        </article>
        <article className="celebracion">
        <div>
        <img src={this.props.evento6} />
        </div>
        <div className="articulo1">
        <h2 className="subtitulo">{this.props.subtitulo6}</h2>
        <p>{this.props.parrafo3}</p>
        <p className="contactanos">{this.props.contactanos}</p>
        </div>
        </article>
        </section>
        </>

    );
}
}

export default Servicios;