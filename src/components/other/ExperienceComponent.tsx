import React, { ChangeEvent } from "react";
import { ExperienceComponentProps } from "../../interface/ExperienceProps";

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({
  experience,
  company,
  since,
  isWorking,
  until,
  setExperience,
  setCompany,
  setSince,
  setIsWorking,
  setUntil,
  addExperience,
  deleteExperience,
  experiences,
  workDescription,
  setWorkDescription,
  techStack,
  setTechStack,
}) => (
  <div>
    <div className="input-group mt-4 gap-4">
      <label>Position:</label>
      <input
        value={experience}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setExperience(e.target.value)
        }
      />
      <label>Company:</label>
      <input
        value={company}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCompany(e.target.value)
        }
      />
      <label>Since:</label>
      <input
        value={since}
        type="date"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSince(e.target.value)
        }
      />
      <label>I'm working here:</label>
      <input
        type="checkbox"
        checked={isWorking}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setIsWorking(e.target.checked)
        }
      />
      <label>Until:</label>
      <input
        value={until}
        type="date"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUntil(e.target.value)
        }
        disabled={isWorking}
      />
      <label>workDescription:</label>
      <textarea
        value={workDescription}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setWorkDescription(e.target.value)
        }
      />
      <label>Terch stack:</label>
      <textarea
        value={techStack}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setTechStack(e.target.value)
        }
      />
      <button className="btn btn-primary" onClick={addExperience}>
        Add Experience
      </button>
    </div>
    <ul className="">
      {experiences.map((exp, index) => (
        <>
          <li key={index} className="my-3">
            {exp.position} at {exp.company}, {exp.since} -
            {exp.isWorking ? "Present" : exp.until}
            <button
              className="btn btn-danger"
              onClick={() => deleteExperience(index)}
            >
              Delete
            </button>
          </li>
          <span>{exp.workDescription}</span>
          <span>{exp.techStack}</span>
        </>
      ))}
    </ul>
  </div>
);

export default ExperienceComponent;
