import React, { Component } from "react";
import "./App.css";
import Login from "./Components/login/login";
import FormPage from "./Components/form";
import UserProfile from "./Components/userProfile";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
const history = createMemoryHistory();

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/form" component={FormPage} />
            <Route path="/users/:id" component={UserProfile} />
          </Switch>
        </Router>
    );
  }
}

export default App;
