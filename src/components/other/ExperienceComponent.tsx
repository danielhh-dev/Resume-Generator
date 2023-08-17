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
  <div className="d-flex justify-content-between flex-wrap col-12">
    <div className="row col-md-12">
      <div className="col-12 col-md-6">
        <input
          placeholder="Position:"
          className="form-control rounded"
          type="text"
          value={experience}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setExperience(e.target.value)
          }
        />
      </div>
      <div className="col-12 col-md-6">
        <input
          placeholder="Company:"
          type="text"
          className="form-control rounded"
          value={company}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCompany(e.target.value)
          }
        />
      </div>

      <div className="input-group m-3 gap-3">
        <label className="form-label" htmlFor="first">
          Since:
        </label>

        <input
          aria-describedby="basic-addon3"
          id="first"
          className="form-control rounded"
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
          className="form-control rounded"
          value={until}
          type="date"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUntil(e.target.value)
          }
          disabled={isWorking}
        />
      </div>

      <label>workDescription:</label>
      <textarea
        className="form-control rounded"
        value={workDescription}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setWorkDescription(e.target.value)
        }
      />
      <label>Terch stack:</label>
      <textarea
        className="form-control rounded"
        value={techStack}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setTechStack(e.target.value)
        }
      />
      <button className="btn btn-primary rounded" onClick={addExperience}>
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
