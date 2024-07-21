import React from 'react';

const App = () => {
  const fruits = ['Apple', 'Banana', 'Grape'];
  const vegetables = ['Carrot', 'Tomato', 'Potato'];

  const edibles = [fruits, vegetables];

  return (
    <div className='wrapper' style={{'padding': '0px 50px'}}>
      {edibles.map((list, index) => (
        <div key={index} className='column'>
          <h2>{index === 0 ? 'Fruits' : 'Vegetables'}:</h2>
          <ul>
            {list.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App;
