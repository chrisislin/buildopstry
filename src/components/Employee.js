import React, { useState } from "react";
import Skills from "./Skills";
import { FormControl, InputLabel, Input, FormHelperText, Button, ButtonGroup, TextField} from "@material-ui/core";

const views = {
  view: "view",
  edit: "edit",
};

function Employee(props) {
  const [view, setView] = useState(views.view);
  const [skill, setSkill] = useState("");
  const [editFirst, seteditFirst] = useState(props.firstName);
  const [editLast, seteditLast] = useState(props.lastName);

  const addSkillHandler = () => {
    let cur = {
      employeeId: props.id,
      name: skill,
    };
    props.skillHandlers.addSkill({
      variables: {
        input: cur,
      },
    });
    setSkill("");
  };

  const updateSkillHandler = (skillParams) => {
    let cur = { ...skillParams };
    props.skillHandlers.updateSkill({
      variables: {
        input: cur,
      },
    });
  };

  const deleteSkillHandler = (skillParams) => {
    let cur = { ...skillParams };
    props.skillHandlers.deleteSkill({
      variables: {
        input: cur,
      },
    });
  };

  const updateEmployeeHandler = () => {
    let cur = {
      firstname: editFirst,
      lastname: editLast,
      id: props.id,
    };
    props.employeeHandlers.updateEmployee({
      variables: {
        input: cur,
      },
    });
    setView(views.view);
  };

  const deleteEmployeeHandler = () => {
    let cur = { id: props.id };
    props.employeeHandlers.deleteEmployee({
      variables: {
        input: cur,
      },
    });
  };

  const CreateSBox = (
    <div className="CreateSBox">
          <FormControl>
            <InputLabel htmlFor="my-input"></InputLabel>
            <Input
              aria-describedby="my-helper-text"
              onChange={(e) => setSkill(e.target.value)}
              value={skill}
            />
            <FormHelperText id="employee-name-input">
              Skills
            </FormHelperText>
          </FormControl>
        <Button className="AddSkillButton" variant="outlined" color="primary" onClick={() => addSkillHandler()}>
          Add Skill
        </Button>
    </div>
  );

  const editEmployee = (
    <>
      <div id="EmpName">
        <TextField
          className="EmployeeName"
          aria-describedby="enter-first-name"
          onChange={(e) => seteditFirst(e.target.value)}
          value={editFirst}
          color="primary"
        />

        <TextField
          className="EmployeeName"
          aria-describedby="enter-last-name"
          onChange={(e) => seteditLast(e.target.value)}
          value={editLast}
          color="primary"
        />
      </div>
      
      <div id="EmpNameMutate">
        <ButtonGroup>
          <Button
            className="LButton"
            onClick={() => updateEmployeeHandler()}
          >
            Save
          </Button>
          <Button className="RButton" onClick={() => setView(views.view)}>
            Cancel
          </Button>
        </ButtonGroup>
      </div>
    </>
  );

  const viewEmployee = (
    <>
      <div id="EmpName">
        <h3 className="EmployeeName">{props.firstName}</h3>
        <h3 className="EmployeeName">{props.lastName}</h3>
      </div>

      <ButtonGroup>
        <Button className="LButton" onClick={() => setView(views.edit)}>
          Edit
        </Button>

        <Button className="RButton" onClick={() => deleteEmployeeHandler()}>
          Delete
        </Button>
      </ButtonGroup>
    </>
  );


  const employeeView = view === views.view ? viewEmployee : editEmployee;

  return (
    <div className="EmpContainer">
      <div className="EmpBox">{employeeView}</div>
      <div className="SkillContainer">
        <h3>
          {props.firstName} {props.lastName} Skills:
        </h3>
        {props.skills !== null &&
          props.skills.map((skill) => {
            return (
              <Skills
                key={skill.id}
                skill={skill}
                updateSkillHandler={updateSkillHandler}
                deleteSkillHandler={deleteSkillHandler}
              />
            );
          })}
        {CreateSBox}
      </div>
    </div>
  );
}

export default Employee;
