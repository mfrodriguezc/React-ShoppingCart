import React, { Component } from "react";

class Empleado extends Component {
  constructor(props) {
    super(props);
    this.state = { datos: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://localhost:5001/api/empleado") 
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  borrarEmpleado(id) {
    fetch("https://localhost:5001/api/empleado/" + id, {
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
        <div>Empleado</div>
        <li key={data.id}>
          Nombre: <i>{data.nombre}</i>   Descripcion:  <i>{data.descripcion} </i> 
           Restaurante_id:  <i>{data.Restaurante_id} </i> 
           Imagen: <i>{data.imagen} </i> {" "}
          <button onClick={() => this.borrarEmpleado(data.id)}>Eliminar</button>
        </li>
        </>
      );
    });
  }
}

export default Empleado;
