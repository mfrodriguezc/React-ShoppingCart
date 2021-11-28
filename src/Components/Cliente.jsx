import React, { Component } from "react";

class Cliente extends Component {
  constructor(props) {
    super(props);
    this.state = { datos: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://localhost:5001/api/cliente") 
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  borrarEmpleado(id) {
    fetch("https://localhost:5001/api/cliente/" + id, {
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
        <div>Cliente</div>
        <li key={data.id}>
          Nombre: <i>{data.nombre}</i>   Descripcion:  <i>{data.descripcion} </i> 
           Nombre de Usuario:  <i>{data.nombreusuario} </i>  {" "}
          <button onClick={() => this.borrarEmpleado(data.id)}>Eliminar</button>
        </li>
        </>
      );
    });
  }
}

export default Cliente;