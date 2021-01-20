import React, { useState } from "react";
import "./App.css";
import Amplify from "aws-amplify";
import { useQuery, useMutation, gql } from "@apollo/client";
import { createSkill, updateSkill, deleteSkill, createEmployee, updateEmployee, deleteEmployee } from "./graphql/mutations";
import { listEmployees, listSkills } from "./graphql/queries";
import awsExports from "./aws-exports";
import { Toolbar, AppBar } from "@material-ui/core";
import EmpSkills from "./components/EmpSkills";
import AddEmployee from "./components/AddEmployee";
import NavMenu from "./components/NavMenu";
import assignSkills from "./components/AssignSkills";
import { ReactComponent as SampleLogo } from "./images/Bell.svg";

Amplify.configure(awsExports);

const CREATE_SKILL = gql(createSkill);
const LIST_SKILLS = gql(listSkills);
const UPDATE_SKILL = gql(updateSkill);
const DELETE_SKILL = gql(deleteSkill);

const CREATE_EMPLOYEE = gql(createEmployee);
const LIST_EMPLOYEES = gql(listEmployees);
const UPDATE_EMPLOYEE = gql(updateEmployee);
const DELETE_EMPLOYEE = gql(deleteEmployee);

function App() {
  const views = {
    home: "home"
  };

  const [, setView] = useState(views.home);

  const {
    loading: employeesLoading,
    data: employeesData,
  } = useQuery(LIST_EMPLOYEES);

  const {
    loading: skillsLoading,
    data: skillsData,
  } = useQuery(LIST_SKILLS);

  const AllData =
    employeesData &&
    skillsData &&
    assignSkills(
      employeesData.listEmployees.items,
      skillsData.listSkills.items
    );

  const [addSkill] = useMutation(CREATE_SKILL, {
    refetchQueries: (mutationResult) => [{ query: LIST_SKILLS }],
  });

  const [updateSkill] = useMutation(UPDATE_SKILL, {
    refetchQueries: (mutationResult) => [{ query: LIST_SKILLS }],
  });

  const [deleteSkill] = useMutation(DELETE_SKILL, {
    refetchQueries: (mutationResult) => [{ query: LIST_SKILLS }],
  });

  const [addEmployee] = useMutation(CREATE_EMPLOYEE, {
    refetchQueries: (mutationResult) => [{ query: LIST_EMPLOYEES }],
  });

  const [updateEmployee] = useMutation(UPDATE_EMPLOYEE, {
    refetchQueries: (mutationResult) => [{ query: LIST_EMPLOYEES }],
  });

  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE, {
    refetchQueries: (mutationResult) => [{ query: LIST_EMPLOYEES }],
  });

  const skillHandlers = { addSkill, updateSkill, deleteSkill };
  const employeeHandlers = { addEmployee, updateEmployee, deleteEmployee };

  if (employeesLoading || skillsLoading) return (
  <p />
  );

  return (
    <div className="App">
      <header>
      <AppBar position="fixed">
        <Toolbar>
          <menu>
            <NavMenu setView={setView} views={views} />
          </menu>
          <h2>BuildOps</h2>
          <div id="Logo">
            <SampleLogo />
          </div>
        </Toolbar>
      </AppBar>
      </header>

      <AddEmployee addEmployee={addEmployee} />
      {employeesData && skillsData && (
        <EmpSkills
          employees={AllData}
          skillHandlers={skillHandlers}
          employeeHandlers={employeeHandlers}
        />
      )}
    </div>
  );
}

export default App;
