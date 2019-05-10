import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Pdp } from './pages/Pdp';
import Principal from './pages/Principal';
import Ssm from './pages/Ssm';
import Compra from './pages/Compra';
import { NavPrincipal } from './components/NavPrincipal'

function App() {
  return (    
    <Router basename={process.env.PUBLIC_URL}>
      <NavPrincipal />
      <Route path="/" exact component={Principal} />
      <Route path="/Pdp/" component={Pdp} />
      <Route path="/Ssm/" component={Ssm} />
      <Route path="/Compra/" component={Compra} />
    </Router>
  );
}

export default App;
