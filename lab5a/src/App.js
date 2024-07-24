import React, { useState } from "react";
import './App.css'

const App = () => {
  const [formData, setFormData] = useState({name: "",email: "",});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
    setFormData({name: "", email: ""});
  };

  return (
    <div className="wrapper">
      <header>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name </label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label>Email </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="display">
          <h2>Form Data:</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      </header>
    </div>
  );
};

export default App;
