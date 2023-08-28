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
      <div className="d-flex justify-content-between flex-wrap col-12 ">
        <div className="row mx-auto col-md-12">
          <label className="form-label fw-bold">
            Write your skill lists like the example below:
          </label>
          <textarea
            className="form-control rounded"
            value={newSkill}
            placeholder="Programming: Javascript, Python, Typescript."
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setNewSkill(e.target.value)
            }
          />
          <div className="text-end">
            <button className="btn btn-primary my-4" onClick={addSkill}>
              Add Skill
            </button>
          </div>
        </div>

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
      </div>
    </>
  );
};

export default SkillsComponent;
