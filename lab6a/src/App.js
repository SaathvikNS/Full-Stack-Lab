import React from 'react'
import Product from './Product'
import "./App.css"

const App = () => {
  return (
    <div className='wrapper'>
      <h1>Dogs</h1>
      <div className="container">
        <Product 
          img="http://www.dogsforsale.co.in/wp-content/uploads/2018/06/german-shepherd.jpg"
          name="German Shepherd"
          price="₹14,000/-"
        />
        <Product 
          img="http://www.dogsforsale.co.in/wp-content/uploads/2018/06/labrador-.jpg"
          name="Labrador"
          price="₹13,000/-"
        />
        <Product 
          img="http://www.dogsforsale.co.in/wp-content/uploads/2018/06/rottweiler.jpg"
          name="Rottweiler"
          price="₹15,000/-"
        />
        <Product 
          img="http://www.dogsforsale.co.in/wp-content/uploads/2018/06/beagle.jpg"
          name="Beagle"
          price="₹19,000/-"
        />
        <Product 
          img="https://www.dogsforsale.co.in/wp-content/uploads/2018/06/siberian-husky.jpg"
          name="Siberian"
          price="₹45,000/-"
        />
        <Product 
          img="https://www.dogsforsale.co.in/wp-content/uploads/2018/06/Boxer.jpg"
          name="Boxer"
          price="₹18,000/-"
        />
      </div>
    </div>
  )
}

export default App