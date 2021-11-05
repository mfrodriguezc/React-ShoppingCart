import React, {component} from "react";

class Propuesta extends React.Component{
render(props){
    return(
        <>
        <main>
            <h1>{this.props.titulo}</h1>
            <p>{this.props.parrafo}</p>
        </main>
        </>

    );
}
}

export default Propuesta;