
import './App.css';
import AboutContenedor from "./Components/AboutContenedor.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuContenedor from './Components/MenuContenedor';
import MenuContenedor2 from './Components/MenuContenedor2';
import FooterContenedor  from './Components/FooterContenedor';
import Navbar from "./Components/Navbar";
import Layout from './Components/Layout';


function App() {
  return (
    <BrowserRouter>
  <Layout>
    
    <Switch>
    <Route exact path="/about" component={AboutContenedor} />
    <Route exact path="/menu" component={MenuContenedor} />
    <Route exact path="/menu2" component={MenuContenedor2} />

</Switch>
</Layout>         

    

    
    </BrowserRouter>
  );
}

export default App;
