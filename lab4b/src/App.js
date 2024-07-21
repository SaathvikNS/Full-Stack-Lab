import React, { useRef } from 'react'
import './App.css'

const App = () => {
   const nameRef = useRef(null);

   const handleClick = (event) => {
      event.preventDefault();
      document.getElementById('namecontainer').innerHTML = "Hello " + nameRef.current.value + "!!"
   };
 
   return (
     <div className="App">
       <h1>Uncontrolled Component Example</h1>
       <input
         type="text"
         placeholder="Enter your name"
         ref={nameRef}
       />
       <button onClick={handleClick}>Display Name</button>
       <div id='namecontainer'></div>
     </div>
   );
}

export default App