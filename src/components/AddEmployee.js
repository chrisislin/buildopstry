import React, { useState } from "react";
import { FormControl, InputLabel, Input, FormHelperText, Button, Container } from "@material-ui/core";

function AddEmployee(props) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const addEmployeeHandler = () => {
    let current = {
      firstname: first,
      lastname: last,
    };

    props.addEmployee({
      variables: {
        input: current,
      },
    });
    setFirst("");
    setLast("");
  };

  return (
    <div id="CreateEmpContainer">
      <Container>
        Create Employee
        <Container>
          <FormControl>
            <InputLabel htmlFor="my-input"></InputLabel>
            <Input
              aria-describedby="my-helper-text"
              onChange={(e) => setFirst(e.target.value)}
              value={first}
            />
            <FormHelperText id="my-helper-text">
              First Name
            </FormHelperText>
          </FormControl>
        </Container>
        
        <Container>
          <FormControl>
            <InputLabel htmlFor="my-input"></InputLabel>
            <Input
              aria-describedby="my-helper-text"
              onChange={(e) => setLast(e.target.value)}
              value={last}
            />
            <FormHelperText id="my-helper-text">
              Last Name
            </FormHelperText>
          </FormControl>
        </Container>
        
        <Button variant="outlined" color="primary" onClick={() => addEmployeeHandler()}>
          Add Employee
        </Button>
      </Container>
    </div>
  );
}

export default AddEmployee;
