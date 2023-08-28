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
  <div className="d-flex justify-content-between flex-wrap col-12 ">
    <div className="row mx-auto col-md-12">
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

      <div className="input-group my-4 d-flex justify-content-evenly">
        <div className="d-flex flex-column">
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
        </div>
        <div
          className="d-flex flex-column "
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <label className="form-label">Do you still work here?</label>
          <input
            id="btncheck1"
            autoComplete={"off"}
            type="checkbox"
            className="btn-check"
            checked={isWorking}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setIsWorking(e.target.checked)
            }
          />
          <label htmlFor="btncheck1" className="btn btn-outline-primary">
            I work here
          </label>
        </div>
        <div className="d-flex flex-column">
          <label className="form-label">Until:</label>
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
      </div>

      <textarea
        className="form-control rounded my-3"
        value={workDescription}
        placeholder="Work Description:"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setWorkDescription(e.target.value)
        }
      />
      <textarea
        className="form-control rounded my-3"
        placeholder="Tech Stack:"
        value={techStack}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setTechStack(e.target.value)
        }
      />
      <div className="text-end">
        <button className="btn btn-primary rounded" onClick={addExperience}>
          Add Experience
        </button>
      </div>
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
