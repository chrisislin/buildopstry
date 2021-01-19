const assignSkills = (employees, skills) => {
  let result = [...employees];
  let skillets = {};
  skills.forEach((skill) => {
    if (!skillets[skill.employeeId]) {
      skillets[skill.employeeId] = [skill];
    } else {
      skillets[skill.employeeId].push(skill);
    }
  });

  result = result.map((employee) => {
    let employees = { ...employee };
    employees.skills = skillets[employees.id] ? skillets[employees.id] : [];
    return employees;
  });
  return result;
};

export default assignSkills;
