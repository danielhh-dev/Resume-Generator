import React, { useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

interface Experience {
  position: string;
  company: string;
  since: string;
  until: string;
  isWorking: boolean;
}

interface Education {
  university: string;
  degree: string;
  startDate: string;
  endDate: string;
  isOngoing: boolean;
}

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
      };
      setExperiences((prevExperiences) => [...prevExperiences, newExperience]);
      setExperience("");
      setCompany("");
      setSince("");
      setUntil("");
      setIsWorking(false);
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
    // Create a new PDF document
    const MyDocument: React.FC = () => (
      <Document>
        <Page>
          <View style={styles.container}>
            {/* Basic info */}
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.content}>{pretendedPosition}</Text>
            <Text style={styles.content}>{email}</Text>
            <Text style={styles.content}>{phone}</Text>
            <Text style={styles.content}>About Me: {description}</Text>
            {/* Experience */}
            <Text style={styles.title}>Experience:</Text>
            {experiences.map((exp, index) => (
              <View key={index}>
                <Text>{exp.position}</Text>
                <Text style={styles.content}>
                  {exp.company}, {exp.since} -{" "}
                  {exp.isWorking ? "Present" : exp.until}
                </Text>
              </View>
            ))}
            {/* Education */}
            <Text style={styles.title}>Education:</Text>
            {educationList.map((edu, index) => (
              <View key={index}>
                <Text>
                  {edu.degree} in {edu.university}
                </Text>
                <Text style={styles.content}>
                  {edu.startDate} to {edu.isOngoing ? "Present" : edu.endDate}
                </Text>
              </View>
            ))}
            {/* Skills */}
            <Text style={styles.title}>Skills:</Text>
            {skills.map((skill, index) => (
              <Text key={index} style={styles.content}>
                {skill}
              </Text>
            ))}
          </View>
        </Page>
      </Document>
    );

    // Render the PDF and provide the link to download it
    const pdfDoc = <MyDocument />;
    return (
      <PDFDownloadLink document={pdfDoc} fileName={`${resumeName}.pdf`}>
        <button className="btn btn-primary">Generate CV</button>
      </PDFDownloadLink>
    );
  };

  const styles = StyleSheet.create({
    container: {
      textAlign: "center",
    },
    name: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
      marginBottom: 5,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
    },
  });

  return (
    <div className="container mb-5 pb-5">
      <h1>CV Generator</h1>
      <div className=" d-flex flex-wrap gap-5">
        {/* Basic info */}
        <section>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <section>
          <label>Position:</label>
          <input
            type="text"
            value={pretendedPosition}
            onChange={(e) => setPretendedPosition(e.target.value)}
          />
        </section>
        <section>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>

        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>About Me:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Experience */}
        <div className="input-group mt-4 gap-4">
          <label>Position:</label>
          <input
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <label>Company:</label>
          <input value={company} onChange={(e) => setCompany(e.target.value)} />
          <label>Since:</label>
          <input
            value={since}
            type="date"
            onChange={(e) => setSince(e.target.value)}
          />

          <label>I'm working here:</label>
          <input
            type="checkbox"
            checked={isWorking}
            onChange={(e) => setIsWorking(e.target.checked)}
          />
          <label>Until:</label>
          <input
            value={until}
            type="date"
            onChange={(e) => setUntil(e.target.value)}
            disabled={isWorking}
          />

          <button className="btn btn-primary" onClick={addExperience}>
            Add Experience
          </button>
        </div>

        <ul className="">
          {experiences.map((exp, index) => (
            <li key={index} className="my-3">
              {exp.position} at {exp.company}, {exp.since} -{" "}
              {exp.isWorking ? "Present" : exp.until}
              <button
                className="btn btn-danger"
                onClick={() => deleteExperience(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {/* Education */}
        <div className="container mb-5">
          {/* ... (other JSX) */}
          <label>University:</label>
          <input
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />

          <label>Degree:</label>
          <input value={degree} onChange={(e) => setDegree(e.target.value)} />

          <label>Start Date:</label>
          <input
            value={startDate}
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          />

          <label>Ongoing:</label>
          <input
            type="checkbox"
            checked={isOngoing}
            onChange={(e) => setIsOngoing(e.target.checked)}
          />

          <label>End Date:</label>
          <input
            value={endDate}
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
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

        <label>Skills:</label>
        <textarea
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
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
