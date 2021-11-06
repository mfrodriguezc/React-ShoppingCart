
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
    <Route basename={process.env.PUBLIC_URL} exact path="/" component={IndexContenedor} />
    <Route basename={process.env.PUBLIC_URL} exact path="/about" component={AboutContenedor} />   
    <Route basename={process.env.PUBLIC_URL} exact path="/menu" > <Haztupedidoo/> </Route>
    <Route basename={process.env.PUBLIC_URL} exact path="/menu2" component={MenuContenedor2} />
    <Route basename={process.env.PUBLIC_URL} exact path="/carrito" component={CarritoContenedor} />
    <Route basename={process.env.PUBLIC_URL} exact path="/servicios" component={ServiciosContenedor} />
    <Route basename={process.env.PUBLIC_URL} exact path="/contacto" component={FormContacto} />
    <Route basename={process.env.PUBLIC_URL} exact path="/reserva" component={Reserva} />


</Switch>
</Layout>         

    

    
    </BrowserRouter>
  );
}

export default App;
