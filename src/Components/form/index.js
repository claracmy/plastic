import React from "react";
import Axios from "axios";
import Form from "./form";

class FormPage extends React.Component {
  state = {
    form: {
      plasticUsage: {
        cutlery: null,
        container: null,
        bag: null,
        bottle: null,
        straw: null,
        wrap: null
      },
      additionalInfo: ""
    }
  };

  handleChange = ({ target: { name, value } }) => {
    const form = Object.assign({}, this.state.form, { [name]: value });
    this.setState({ form });
  };

  handleSubmit = e => {
    e.preventDefault();

    Axios.post("/api/orders/new", this.state.form)
      .then(this.props.history.push(`/users/1`))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h2 style={{ display: "block" }}>ABOUT YOUR ORDER </h2>
        <Form
          order={this.state.form}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default FormPage;
