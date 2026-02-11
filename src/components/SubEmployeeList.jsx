import React from "react";

export const SubEmployeeList = (props) => {
  console.log("SubEmployeeList props:", props);

  return (
    <div>
      <h3>Sub Employee List Component (Grand Child)</h3>
      <h4>Title Received: {props.title}</h4>
    </div>
  );
};
