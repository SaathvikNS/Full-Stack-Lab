import React, { useRef } from 'react'
import './App.css'

const App = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subscribeRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subscribe = subscribeRef.current.checked;
    
    alert(`Name: ${name}\nEmail: ${email}\n${subscribe?"Subscribed to Newsletter":"Not Subscribed to Newsletter"}`);
  };

  return (
    <div className="wrapper">
      <h1>Uncontrolled Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label>Subscribe to newsletter:</label>
          <input type="checkbox" id="subscribe" ref={subscribeRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App