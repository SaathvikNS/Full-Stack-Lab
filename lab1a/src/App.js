import React from 'react'
import "./App.css"

const App = () => {

  return (
    <div className='wrapper'>
      <header>
        <h1>Student Information</h1>
      </header>
      <div className='body'>
        <table>
          <thead>
            <tr>
              <th>USN</th>
              <th>Name</th>
              <th>Course</th>
              <th colSpan={4}>Subjects Opted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S101234</td>
              <td>Aryan Sharma</td>
              <td>MCA</td>
              <td>CN</td>
              <td>DBMS</td>
              <td>OS</td>
              <td>SE</td>
            </tr>
            <tr>
              <td>S202853</td>
              <td>Riya Gupta</td>
              <td>M.Tech</td>
              <td>DSP</td>
              <td>M&ES</td>
              <td>CN&CS</td>
              <td>AL&ML</td>
            </tr>
            <tr>
              <td>S987654</td>
              <td>Siddharth Rao</td>
              <td>MCA</td>
              <td>CN</td>
              <td>DBMS</td>
              <td>DS</td>
              <td>CG</td>
            </tr>
            <tr>
              <td>S123489</td>
              <td>Kritika Singh</td>
              <td>MCA</td>
              <td>OS</td>
              <td>DS</td>
              <td>AI</td>
              <td>NP</td>
            </tr>
            <tr>
              <td>S765421</td>
              <td>Rohan Jain</td>
              <td>MCom</td>
              <td>FM</td>
              <td>A&T</td>
              <td>MM</td>
              <td>BS&RM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App