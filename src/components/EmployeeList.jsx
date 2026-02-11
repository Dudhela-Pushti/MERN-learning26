import React from "react";
import { SubEmployeeList } from "./SubEmployeeList";

export const EmployeeList = (props) => {
  console.log("EmployeeList props:", props);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Employee List Component (Child)</h2>

      <h3>{props.title}</h3>
      <h4>Company Name: {props.company.name}</h4>
      <h4>Year: {props.company.year}</h4>

      {/* Reusable Table */}
      <table border="1" cellPadding="10" style={{ margin: "auto" }}>
        <thead>
          <tr>
            {props.columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Passing props to 3rd component */}
      <SubEmployeeList title={props.title} />
    </div>
  );
};
