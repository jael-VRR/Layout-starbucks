
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Grid from "./layout/Grid.jsx";
import Selector1 from './layout/Selector.jsx';




function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Grid} />
        </Switch>
        <Switch>
          <Route exact path="/selector1" component={Selector1} />
        </Switch>
    </Router>
  );
}

export default App;