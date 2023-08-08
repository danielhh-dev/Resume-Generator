import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import BasicInfoComponent from "./other/BasicInfoComponent";
import ExperienceComponent from "./other/ExperienceComponent";
import EducationComponent from "./other/EducationComponent";
import PDFDocument from "./other/PDFDocument";
import { Experience } from "../interface/ExperienceProps";
import { Education } from "../interface/EducationProps";
import SkillsComponent from "./other/SkillsComponent";

const CVGenerator: React.FC = () => {
  // Basic info
  const [name, setName] = useState<string>("");
  const [pretendedPosition, setPretendedPosition] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  // Experience
  const [experience, setExperience] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [since, setSince] = useState<string>("");
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const [until, setUntil] = useState<string>("");
  const [workDescription, setWorkDescription] = useState<string>("");
  const [techStack, setTechStack] = useState<string>("");
  const [experiences, setExperiences] = useState<Array<Experience>>([]);
  // Skills
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState<string>("");
  // Education
  const [educationList, setEducationList] = useState<Array<Education>>([]);
  const [university, setUniversity] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [isOngoing, setIsOngoing] = useState<boolean>(false);
  // Format
  const [resumeName, setResumeName] = useState<string>("");

  // Exprecience
  const addExperience = () => {
    if (
      experience.trim() !== "" &&
      company.trim() !== "" &&
      since.trim() !== ""
    ) {
      const newExperience: Experience = {
        position: experience.trim(),
        company: company.trim(),
        since: since.trim(),
        until: until.trim(),
        isWorking: isWorking,
        workDescription: workDescription.trim(),
        techStack: techStack.trim(),
      };
      setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
      setExperience("");
      setCompany("");
      setSince("");
      setUntil("");
      setIsWorking(false);
      setWorkDescription("");
      setTechStack("");
    }
  };

  const deleteExperience = (index: number) => {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((_, i) => i !== index)
    );
  };

  // Education
  const addEducation = () => {
    if (
      university.trim() !== "" &&
      degree.trim() !== "" &&
      startDate.trim() !== ""
    ) {
      const newEducation: Education = {
        university: university.trim(),
        degree: degree.trim(),
        startDate: startDate.trim(),
        endDate: isOngoing ? "Present" : endDate.trim(),
        isOngoing: isOngoing,
      };
      setEducationList((prevEducation) => [...prevEducation, newEducation]);
      setUniversity("");
      setDegree("");
      setStartDate("");
      setEndDate("");
      setIsOngoing(false);
    }
  };

  const deleteEducation = (index: number) => {
    setEducationList((prevEducation) =>
      prevEducation.filter((_, i) => i !== index)
    );
  };

  // Skills
  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const deleteSkill = (index: number) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  const generateCV = () => {
    const pdfDoc = (
      <PDFDocument
        name={name}
        pretendedPosition={pretendedPosition}
        email={email}
        phone={phone}
        description={description}
        experiences={experiences}
        educationList={educationList}
        skills={skills}
      />
    );
    return (
      <PDFDownloadLink document={pdfDoc} fileName={`${resumeName}.pdf`}>
        <button className="btn btn-primary">Generate CV</button>
      </PDFDownloadLink>
    );
  };

  return (
    <div className="container mb-5 pb-5">
      <h1>CV Generator</h1>
      <div className=" ">
        {/* Basic info */}
        <BasicInfoComponent
          name={name}
          pretendedPosition={pretendedPosition}
          email={email}
          phone={phone}
          description={description}
          setName={setName}
          setPretendedPosition={setPretendedPosition}
          setEmail={setEmail}
          setPhone={setPhone}
          setDescription={setDescription}
        />
        {/* Experience */}
        <ExperienceComponent
          experience={experience}
          company={company}
          since={since}
          isWorking={isWorking}
          until={until}
          workDescription={workDescription}
          techStack={techStack}
          setTechStack={setTechStack}
          setWorkDescription={setWorkDescription}
          setExperience={setExperience}
          setCompany={setCompany}
          setSince={setSince}
          setIsWorking={setIsWorking}
          setUntil={setUntil}
          addExperience={addExperience}
          deleteExperience={deleteExperience}
          experiences={experiences}
        />

        {/* Education */}
        <EducationComponent
          university={university}
          degree={degree}
          startDate={startDate}
          endDate={endDate}
          isOngoing={isOngoing}
          setUniversity={setUniversity}
          setDegree={setDegree}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setIsOngoing={setIsOngoing}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
          educationList={educationList}
          setEducationList={setEducationList}
        />

        {/* Skills */}
        <SkillsComponent
          newSkill={newSkill}
          setNewSkill={setNewSkill}
          addSkill={addSkill}
          deleteSkill={deleteSkill}
          skills={skills}
        />

        <label htmlFor="">Resume Name: </label>
        <input
          type="text"
          value={resumeName}
          onChange={(e) => setResumeName(e.target.value)}
        />

        {generateCV()}
      </div>
    </div>
  );
};

export default CVGenerator;
