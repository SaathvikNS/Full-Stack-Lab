import React from "react";
import "./App.css";

class Employee extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <h1>Employee Information</h1>
        </header>
        <div className="body">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Department</th>
                <th>Experience</th>
                <th>Salary</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>E841</td>
                <td>Rhea Sharma</td>
                <td>Sales</td>
                <td>2 Yrs</td>
                <td>₹ 4,00,000</td>
                <td>32</td>
              </tr>
              <tr>
                <td>E314</td>
                <td>Rohan Gupta</td>
                <td>Sales</td>
                <td>10 Yrs</td>
                <td>₹ 9,00,000</td>
                <td>45</td>
              </tr>
              <tr>
                <td>E270</td>
                <td>Aisha Khan</td>
                <td>IT</td>
                <td>3 Yrs</td>
                <td>₹ 5,00,000</td>
                <td>32</td>
              </tr>
              <tr>
                <td>E421</td>
                <td>Siddharth Jain</td>
                <td>Sales</td>
                <td>7 Yrs</td>
                <td>₹ 7,50,000</td>
                <td>38</td>
              </tr>
              <tr>
                <td>E192</td>
                <td>Priyanka Singh</td>
                <td>IT</td>
                <td>5 Yrs</td>
                <td>₹ 6,00,000</td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Employee;