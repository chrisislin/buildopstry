import React, { useState } from "react";
import { Button, ButtonGroup, TextField } from "@material-ui/core";

const views = {
  view: "view",
  edit: "edit",
};

function Skills(props) {
  const [editSkills, seteditSkills] = useState(props.skill.name);
  const [view, setView] = useState(views.view);
  const {
    skill: { id, employeeId, name },
  } = props;

  const updateSkillHandler = () => {
    props.updateSkillHandler({ id, employeeId, name: editSkills });
    setView(views.view);
  };

  const deleteSkillHandler = () => {
    props.deleteSkillHandler({ id });
  };

  const viewSkill = (
    <>
      <h4 className="SkillName" key={id}>
        {name}
      </h4>
      <div className="SkillButtonContainer">
        <ButtonGroup>
          <Button className="LButton" onClick={() => setView(views.edit)}>
            Edit
          </Button>
          
          <Button className="RButton" onClick={() => deleteSkillHandler()}>
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </>
  );

  const editSkill = (
    <>
      <TextField
        className="SkillNameEdit"
        aria-describedby="edit-skill"
        onChange={(e) => seteditSkills(e.target.value)}
        value={editSkills}
      />

      <ButtonGroup>
        <div className="SkillButtonContainer">
          <Button className="LButton" onClick={() => updateSkillHandler()}>
            Save
          </Button>
          
          <Button className="RButton" onClick={() => setView(views.view)}>
            Cancel
          </Button>
        </div>
      </ButtonGroup>
    </>
  );

  const skillView = view === views.view ? viewSkill : editSkill;

  return <div className="Skill">{skillView}</div>;
}

export default Skills;
