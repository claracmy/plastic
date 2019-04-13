import React from 'react';



const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form className ="loginForm" onSubmit={handleSubmit}>
      <div className="form-group">
        {/* <TextField
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="form-control"
        />
      </div>
      <Button type="submit" className="btn btn-primary">Login</Button> */}
      </div>
    </form>
  );
};

export default LoginForm;
