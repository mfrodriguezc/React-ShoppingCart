
import './App.css';
import AboutContenedor from "./Components/AboutContenedor.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MenuContenedor2 from './Components/MenuContenedor2';
import FooterContenedor  from './Components/FooterContenedor';
import Navbar from "./Components/Navbar";
import Layout from './Components/Layout';
import CarritoContenedor from './Components/CarritoContenedor';
import ServiciosContenedor from "./Components/Servicioscontenedor.jsx";
import FormContacto from "./Components/Contacto.js";
import Reserva from "./Components/Contacto";
import IndexContenedor from "./Components/IndexContenedor.jsx";
import Haztupedidoo from "./Components/Haztupedidoo";
import Empleado from "./Components/Empleado.jsx";
import Comentario from "./Components/Comentario.jsx";
import Cliente from "./Components/Cliente.jsx";
import Plato from "./Components/Plato.jsx";
import Admin from "./Components/Admin.jsx";


function App() {
  return (
    <BrowserRouter>
  <Layout>
    
    <Switch>
    <Route basename={process.env.PUBLIC_URL} exact path="/" component={IndexContenedor} />
    <Route basename={process.env.PUBLIC_URL} exact path="/about" component={AboutContenedor} />   
    <Route basename={process.env.PUBLIC_URL} exact path="/menu" > <Haztupedidoo/> </Route>
    <Route basename={process.env.PUBLIC_URL} exact path="/menu2" component={MenuContenedor2} />
    <Route basename={process.env.PUBLIC_URL} exact path="/carrito" component={CarritoContenedor} />
    <Route basename={process.env.PUBLIC_URL} exact path="/servicios" component={ServiciosContenedor} />
    <Route basename={process.env.PUBLIC_URL} exact path="/contacto" component={FormContacto} />
    <Route basename={process.env.PUBLIC_URL} exact path="/reserva" component={Reserva} />
    <Route basename={process.env.PUBLIC_URL} exact path="/empleado" component={Empleado} />
    <Route basename={process.env.PUBLIC_URL} exact path="/comentario" component={Comentario} />
    <Route basename={process.env.PUBLIC_URL} exact path="/cliente" component={Cliente} />
    <Route basename={process.env.PUBLIC_URL} exact path="/plato" component={Plato} />
    <Route basename={process.env.PUBLIC_URL} exact path="/admin" component={Admin} />


</Switch>
</Layout>         

    

    
    </BrowserRouter>
  );
}

export default App;
