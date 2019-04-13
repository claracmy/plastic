import React from "react";
import LoginForm from "./LoginForm";
import Axios from "axios";

import Auth from "../../lib/Auth";

class Login extends React.Component {
  state = {
    user: {
      email: "",
      password: ""
    }
  };

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  };

  handleSubmit = e => {
    e.preventDefault();
    debugger;
    Axios.post("/api/login", this.state.user)

      .then(res => {
        debugger;
        alert(res);
        Auth.setToken(res.data.token);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <LoginForm
          user={this.state.user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Login;
