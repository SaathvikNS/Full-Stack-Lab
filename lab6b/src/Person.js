import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ name, age, isStudent }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>{isStudent ? "Student" : "Not a Student"}</p>
    </div>
  );
};

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
  };
  
  export default Person;