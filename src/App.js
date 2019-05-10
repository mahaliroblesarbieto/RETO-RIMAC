import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pdp from './pages/Pdp';
import Principal from './pages/Principal';
import Ssm from './pages/Ssm';
import NavPrincipal from './components/NavPrincipal'

function App() {
  return (    
    <Router>
      <NavPrincipal />
      <Route path="/" exact component={Principal} />
      <Route path="/Pdp/" component={Pdp} />
      <Route path="/Ssm/" component={Ssm} />
    </Router>
  );
}

export default App;
