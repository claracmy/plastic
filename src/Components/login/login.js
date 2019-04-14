import React from "react";
import LoginForm from "./loginForm";
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

    Axios.post("/api/login", this.state.user)

      .then(res => {
        Auth.setToken(res.data.token);
      })
      .then(this.props.history.push("/form"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div style={{ height: "100%", width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
