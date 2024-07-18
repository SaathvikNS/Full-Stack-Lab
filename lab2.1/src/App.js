import React from "react";
import "./App.css"

class Printer extends React.Component {
  render() {
    const { items } = this.props;
    let deptrows = [];

    items.forEach((i) => {
      let grandchild = i.children;
      let count = 0;
      grandchild.forEach((j) => {
        count += j.children.length;
      });
      deptrows.push(count);
    });

    return (
      <div>
        <table border={2}>
          <thead>
            <tr>
              <th colSpan={3}>Department Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Department</th>
              <th>Team</th>
              <th>Members</th>
            </tr>
            {items.map((dept, deptIndex) =>
              dept.children.map((team, teamIndex) =>
                team.children.map((member, memberIndex) => (
                  <tr key={`${deptIndex}-${teamIndex}-${memberIndex}`}>
                    {teamIndex === 0 && memberIndex === 0 && (
                      <td rowSpan={deptrows[deptIndex]}>{dept.name}</td>
                    )}
                    {memberIndex === 0 && (
                      <td rowSpan={team.children.length}>{team.name}</td>
                    )}
                    <td>{member.name}</td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const companyHierarchy = [
      {
        id: 1,
        name: "Engineering Department",
        children: [
          {
            id: 2,
            name: "Frontend Team",
            children: [
              { id: 3, name: "Alice" },
              { id: 4, name: "Bob" },
            ],
          },
          {
            id: 5,
            name: "Backend Team",
            children: [
              { id: 6, name: "Charlie" },
              { id: 7, name: "David" },
            ],
          },
        ],
      },
      {
        id: 8,
        name: "HR Department",
        children: [
          {
            id: 9,
            name: "Recruitment Team",
            children: [
              { id: 10, name: "Eve" },
              { id: 11, name: "Frank" },
            ],
          },
        ],
      },
    ];

    return (
      <div className="wrapper">
        <Printer items={companyHierarchy} />
      </div>
    );
  }
}

export default App;
