import React from "react";
import Employee from "./Employee";

function EmpSkills(props) {
  const { employees } = props;
  return (
    <div id="EmpsContainer">
      {employees.map((e) => (
        <Employee
          key={e.id}
          id={e.id}
          firstName={e.firstname}
          lastName={e.lastname}
          skills={e.skills}
          skillHandlers={props.skillHandlers}
          employeeHandlers={props.employeeHandlers}
        />
      ))}
    </div>
  );
}

export default EmpSkills;
