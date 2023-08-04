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
  const [position, setPosition] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [socialMedia1, setSocialMedia1] = useState<string>("");
  const [socialMedia2, setSocialMedia2] = useState<string>("");
  const [socialMedia3, setSocialMedia3] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [education, setEducation] = useState<string>("");
  const [newSkill, setNewSkill] = useState<string>("");
  const [skillsList, setSkillsList] = useState<string[]>([]);

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkillsList((prevSkills) => [...prevSkills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const deleteSkill = (index: number) => {
    setSkillsList((prevSkills) => prevSkills.filter((_, i) => i !== index));
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
            <Text style={styles.content}>{linkedin}</Text>
            <View style={styles.hrContainer}>
              <View style={styles.hr} />
            </View>

            <Text style={styles.title}>Experience:</Text>
            <Text style={styles.content}>{experience}</Text>
            <Text style={styles.title}>Education:</Text>
            <Text style={styles.content}>{education}</Text>
            <Text style={styles.title}>Skills:</Text>

            <Text style={styles.title}>Habilidades:</Text>
            {skillsList.map((skill, index) => (
              <Text key={index} style={styles.skillsList}>
                {skill}
              </Text>
            ))}
          </View>
        </Page>
      </Document>
    );

    // Render the PDF and provide the download link
    const pdfDoc = <MyDocument />;
    return (
      <PDFDownloadLink document={pdfDoc} fileName="my_resume.pdf">
        <button>Generate CV</button>
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
      marginTop: 30,
      marginBottom: 5,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
    },
    hrContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    hr: {
      borderBottom: "1px solid black",
      marginBottom: 10,
      width: "90%",
      textAlign: "center",
    },
    skillsList: {
      textAlign: "left",
    },
  });

  return (
    <div>
      <h1>CV Generator</h1>

      {/* Personal information */}
      <section id="personal-info">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Position:</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </section>

      {/* Social Media */}
      <section id="social-media">
        <label>LinkedIn:</label>
        <input
          type="text"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <label>Extra Social Media:</label>
        <input
          type="text"
          value={socialMedia1}
          onChange={(e) => setSocialMedia1(e.target.value)}
        />
        <label>Extra Social Media:</label>
        <input
          type="text"
          value={socialMedia2}
          onChange={(e) => setSocialMedia2(e.target.value)}
        />
        <label>Extra Social Media:</label>
        <input
          type="text"
          value={socialMedia3}
          onChange={(e) => setSocialMedia3(e.target.value)}
        />
      </section>

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

      <label>Habilidades:</label>
      <textarea
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>

      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>
            {skill}
            <button onClick={() => deleteSkill(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {generateCV()}
    </div>
  );
};

export default CVGenerator;
