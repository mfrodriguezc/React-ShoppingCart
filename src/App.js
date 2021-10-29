
import './App.css';
import AboutContenedor from "./Components/AboutContenedor.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuContenedor from './Components/MenuContenedor';
import FooterContenedor  from './Components/FooterContenedor';


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/about" component={AboutContenedor} />
    <Route exact path="/about2" component={MenuContenedor} />
</Switch>         

    <FooterContenedor />

    
    </BrowserRouter>
  );
}

export default App;
