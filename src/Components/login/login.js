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
      <div style={{ height: "100%", width: "100%", display: 'flex',  flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'block'}}>
          <img src="https://i.imgur.com/ilAfmad.png" height='120px'/>
        </div>
        <div style={{ display: 'block'}}>
        <LoginForm
          user={this.state.user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        </div>
      </div>
    );
  }
}

export default Login;
