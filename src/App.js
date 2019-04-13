import React, { Component } from "react";
import "./App.css";
import Login from "./Components/login/login";
// import { createMemoryHistory } from "history";
// const history = createMemoryHistory();

class App extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let page = null;
    switch (this.state.page) {
      case "login":
        page = <Login />;
        break;
      default:
        page = <Login />;
    }
    return <div className="App">{page}</div>;
  }
}

export default App;
