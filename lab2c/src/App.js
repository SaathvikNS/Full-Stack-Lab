import React from 'react';

const App = () => {
  const fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Grape' }
  ];

  return (
    <div className='App'>
      <h1>Keys with Map Iterator</h1>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
