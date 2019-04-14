import React, { Component } from "react";
import "./App.css";
import Login from "./Components/login/login";
import Form from "./Components/form";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
const history = createMemoryHistory();

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/form" component={Form} />
          </Switch>
        </Router>
    );
  }
}

export default App;
