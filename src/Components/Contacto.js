import './App.css';

import React, { Component } from "react";
import ReactDOM from "react-dom";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import {Grid, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>


class FormContacto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Campos ingresado correctamente: " + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <Container>
        <Row>
          <Container fluid>
            <Row>
              <Col>
                <h1>Contáctanos</h1>
              </Col>
              <br />
            </Row>
          </Container>
        </Row>
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt, corrupti! In at sint odit accusamus esse optio aut
              facilis eum, porro cupiditate omnis iure odio placeat
              nostrum ad, repudiandae ex? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Nostrum obcaecati omnis labore
              impedit harum corporis ex quas sequi. Omnis, molestias amet.
              Unde porro exercitationem, praesentium asperiores cum dolore
              dolorem? Quam!
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis obcaecati saepe voluptatum ut laudantium ad
              laboriosam neque omnis, ullam nisi! Ipsa rem aliquam
              dolores, dolorem necessitatibus voluptatibus vitae possimus
              eos! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Nesciunt, aliquam neque. Vero nemo debitis culpa
              voluptas dolores? Illum veritatis vel, minima eveniet
              molestias voluptatibus corporis? Quia sequi perspiciatis
              facere fugit?
            </p>
          </Col>
          <Col>
            <Form>
              <Row className="align-items-center">
                <Col xs="auto" className="my-1">
                  <Form.Label
                    className="me-sm-2"
                    htmlFor="inlineFormCustomSelect"
                    visuallyHidden
                  >
                  </Form.Label>
                  <Form.Select className="me-sm-2" id="inlineFormCustomSelect" required>
                    <option value="0">Seleccione el servicio</option>
                    <option value="1">Aniversario</option>
                    <option value="2">Cena con Amigos</option>
                    <option value="3">Celebración de cumpleaños</option>
                    <option value="4">Declaraciones o propuestas</option>
                    <option value="5">Despedidas</option>
                    <option value="6">Fiestas infantiles</option>
                  </Form.Select>
                </Col>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control required type="email" placeholder="Asunto" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Control required type="email" placeholder="Nombre Completo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                  <Form.Control required type="email" placeholder="Correo Electronico" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control required as="textarea" rows={6} placeholder="Su mensaje"/>
                </Form.Group>

                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                      required
                      type={type}
                      id={`default-${type}`}
                      label={`Acepto términos y condiciones`}
                    />
                  </div>
                ))}

                <Col xs="auto" className="my-1">
                  <Button type="submit">Enviar</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(
  <FormContacto />,
  document.getElementById('root')
);

export default FormContacto;