import React from "react";

const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (
      <div>
    <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="email">
        <span style={{ fontSize: '16px', display: 'block'}}>Email address{" "}</span>
          <input
            style={{  border: 'none',
              borderBottom: 'solid 3px #016c68',
              width: '250px',
              padding: '10px 10px',
              outline: 'none',
              margin: '10px 0' }}
            id="email"
            name="email"
            value={user.email}
            onChange={email => handleChange(email)}
          />
        </label>
        <label htmlFor="password">
        <span style={{ fontSize: '16px', display: 'block' }}>Password{" "}</span>
          <input
           style={{  border: 'none',
           borderBottom: 'solid 3px #016c68',
           width: '250px',
           padding: '10px 10px',
           outline: 'none',
           margin: '10px 0' }}
            id="password"
            name="password"
            value={user.password}
            onChange={password => handleChange(password)}
          />
        </label>
        <div style={{ textAlign: 'center'}}>
      <button style={{ borderRadius: '5px', padding: '10px 10px', width: '150px',  color: 'white', fontWeight: 'bold', fontSize: '14px', height: '50px', display: 'block', marginTop: '40px', backgroundColor: '#04afa8' }} type="submit">Login</button>
      </div>
    </form>
      </div>
  );
};

export default LoginForm;
