
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import grid from "./layout/grid";




function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={grid} />
        </Switch>
    </Router>
  );
}

export default App;