import React, { useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const CVGenerator: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [education, setEducation] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState<string>("");

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
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.content}>{email}</Text>
            <Text style={styles.content}>{phone}</Text>
            <Text style={styles.title}>Experience:</Text>
            <Text style={styles.content}>{experience}</Text>
            <Text style={styles.title}>Education:</Text>
            <Text style={styles.content}>{education}</Text>
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
      <PDFDownloadLink document={pdfDoc} fileName="my_resume.pdf">
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
    <div className="container mb-5">
      <h1>CV Generator</h1>
      <div className=" d-flex flex-wrap gap-5">
        <section>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

        <label>Experience:</label>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <label>Education:</label>
        <textarea
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />

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

        {generateCV()}
      </div>
    </div>
  );
};

export default CVGenerator;
