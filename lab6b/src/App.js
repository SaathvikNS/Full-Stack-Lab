import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

class App extends React.Component {
  componentDidMount() {
    this.validateProps(this.props);
  }

  validateProps(props) {
    const propTypes = {
      propArray: 'object',
      propBool: 'boolean',
      propFunc: 'function',
      propNumber: 'number',
      propString: 'string',
    };

    Object.keys(propTypes).forEach((key) => {
      if (typeof props[key] !== propTypes[key]) {
        alert(`Incorrect type for ${key}: expected ${propTypes[key]}, but got ${typeof props[key]}`);
        document.querySelector('table').innerHTML = ' <tbody><tr><th>Type</th><th>Value</th><th>Valid</th></tr></tbody>'
      }
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <h2>ReactJS Props validation example</h2>
        <table border={2}>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Valid</th>
            </tr>
            <tr>
              <td>Array</td>
              <td>{JSON.stringify(this.props.propArray)}</td>
              <td>{Array.isArray(this.props.propArray) ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>{this.props.propBool ? "true" : "false"}</td>
              <td>{typeof this.props.propBool === 'boolean' ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>Function</td>
              <td>{typeof this.props.propFunc === 'function' ? this.props.propFunc(5) : "Invalid Function"}</td>
              <td>{typeof this.props.propFunc === 'function' ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>String</td>
              <td>{this.props.propString}</td>
              <td>{typeof this.props.propString === 'string' ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>{this.props.propNumber}</td>
              <td>{typeof this.props.propNumber === 'number' ? "true" : "false"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
};

App.defaultProps = {
  propArray: [1,2,3],
  propBool: true,
  propFunc: function (x) { return x * 10; },
  propNumber: 123,
  propString: "MCA",
};

export default App;
