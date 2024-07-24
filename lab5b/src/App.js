import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = loginData;
    document.getElementById('msg').innerHTML = `Logged in as ${username}!!`
  };

  return (
    <div className="wrapper">
      <header>
        <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
              <input type="text" name="username" value={loginData.username} onChange={handleChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={loginData.password} onChange={handleChange} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </header>
      <div id="msg"></div>
    </div>
  );
};

export default App;
