import React from "react";
import { EmployeeList } from "./EmployeeList";

export const Employees = () => {

  var title = "EMPLOYEE APP";

  var company = {
    name: "TCS",
    year: 2026,
  };

  var employees = [
    { id: 101, name: "Parth", age: 23 },
    { id: 102, name: "Jay", age: 24 },
    { id: 103, name: "Raj", age: 25 },
    { id: 104, name: "Ajay", age: 23 },
  ];

  var columns = ["ID", "Name", "Age"];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees Component (Parent)</h1>

      <EmployeeList 
        title={title}
        company={company}
        employees={employees}
        columns={columns}
      />
    </div>
  );
};
