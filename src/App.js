
import './App.css';
import AboutContenedor from "./Components/AboutContenedor.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About2 from './Components/About2';
import FooterContenedor  from './Components/FooterContenedor';


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/about" component={AboutContenedor} />
    <Route exact path="/about2" component={About2} />
</Switch>         

    <FooterContenedor />

    
    </BrowserRouter>
  );
}

export default App;
