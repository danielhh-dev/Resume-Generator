import React from "react";
import { SkillsProps } from "../../interface/SkillsProps";

const SkillsComponent: React.FC<SkillsProps> = ({
  newSkill,
  setNewSkill,
  addSkill,
  deleteSkill,
  skills,
}) => {
  return (
    <>
      <label>Skills:</label>
      <textarea
        value={newSkill}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setNewSkill(e.target.value)
        }
      />
      <button className="btn btn-primary" onClick={addSkill}>
        Add Skill
      </button>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button
              className="btn btn-danger"
              onClick={() => deleteSkill(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SkillsComponent;
