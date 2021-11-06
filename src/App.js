
import './App.css';
import AboutContenedor from "./Components/AboutContenedor.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuContenedor from './Components/MenuContenedor';
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

function App() {
  return (
    <BrowserRouter>
  <Layout>
    
    <Switch>
    <Route exact path="/" component={IndexContenedor} />
    <Route exact path="/about" component={AboutContenedor} />   
    <Route exact path="/menu" > <Haztupedidoo/> </Route>
    <Route exact path="/menu2" component={MenuContenedor2} />
    <Route exact path="/carrito" component={CarritoContenedor} />
    <Route exact path="/servicios" component={ServiciosContenedor} />
    <Route exact path="/contacto" component={FormContacto} />
    <Route exact path="/reserva" component={Reserva} />


</Switch>
</Layout>         

    

    
    </BrowserRouter>
  );
}

export default App;
