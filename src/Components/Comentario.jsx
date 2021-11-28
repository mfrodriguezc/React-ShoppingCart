import React, { Component } from "react";

class Comentario extends Component {
  constructor(props) {
    super(props);
    this.state = { datos: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://localhost:5001/api/comentario") 
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  borrarEmpleado(id) {
    fetch("https://localhost:5001/api/comentario/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato eliminado");
      });
  }

  render() {
    return this.state.datos.map((data) => {
      return (
        <>
        <div>Comentario</div>
        <li key={data.id}>
          Id del comentario: <i>{data.id}</i>   Comentario:  <i>{data.comentario} </i> 
           Cliente_id:  <i>{data.Cliente_id} </i> 
            {" "}
          <button onClick={() => this.borrarEmpleado(data.id)}>Eliminar</button>
        </li>
        </>
      );
    });
  }
}

export default Comentario;