import React, { ChangeEvent } from "react";
import { EducationComponentProps } from "../../interface/EducationProps";

const EducationComponent: React.FC<EducationComponentProps> = ({
  educationList,
  setEducationList,
  university,
  setUniversity,
  degree,
  setDegree,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  isOngoing,
  setIsOngoing,
  addEducation,
  deleteEducation,
}) => (
  <div className="container mb-5">
    {/* ... (other JSX) */}
    <label>University:</label>
    <input
      value={university}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setUniversity(e.target.value)
      }
    />

    <label>Degree:</label>
    <input
      value={degree}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setDegree(e.target.value)}
    />

    <label>Start Date:</label>
    <input
      value={startDate}
      type="date"
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setStartDate(e.target.value)
      }
    />

    <label>Ongoing:</label>
    <input
      type="checkbox"
      checked={isOngoing}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setIsOngoing(e.target.checked)
      }
    />

    <label>End Date:</label>
    <input
      value={endDate}
      type="date"
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setEndDate(e.target.value)
      }
      disabled={isOngoing}
    />

    <button className="btn btn-primary" onClick={addEducation}>
      Add Education
    </button>

    <ul>
      {educationList.map((edu, index) => (
        <li key={index}>
          {edu.degree} in {edu.university}, {edu.startDate} -{" "}
          {edu.isOngoing ? "Present" : edu.endDate}
          <button
            className="btn btn-danger"
            onClick={() => deleteEducation(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default EducationComponent;
