import React from "react";

const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <div style={{ backgroundColor: "red" }}>
        <label htmlFor="email">
          <input
            id="email"
            name="email"
            value={user.email}
            onChange={email => handleChange(email)}
          />
          Email address:{" "}
        </label>
        <label htmlFor="password">
          <input
            id="password"
            name="password"
            value={user.password}
            onChange={password => handleChange(password)}
          />
          Password:{" "}
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
