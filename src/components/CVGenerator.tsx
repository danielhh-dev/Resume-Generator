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
  const [nombre, setNombre] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [experiencia, setExperiencia] = useState<string>("");
  const [educacion, setEducacion] = useState<string>("");
  const [habilidades, setHabilidades] = useState<string>("");
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

  const generarCV = () => {
    // Crea un nuevo documento PDF
    const MyDocument: React.FC = () => (
      <Document>
        <Page>
          <View style={styles.contenedor}>
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={styles.contenido}>{correo}</Text>
            <Text style={styles.contenido}>{tel}</Text>
            <Text style={styles.titulo}>Experiencia:</Text>
            <Text style={styles.contenido}>{experiencia}</Text>
            <Text style={styles.titulo}>Educación:</Text>
            <Text style={styles.contenido}>{educacion}</Text>
            <Text style={styles.titulo}>Habilidades:</Text>
            <Text style={styles.contenido}>{habilidades}</Text>
            <Text style={styles.titulo}>Habilidades:</Text>
            {skillsList.map((skill, index) => (
              <Text key={index} style={styles.contenido}>
                {skill}
              </Text>
            ))}
          </View>
        </Page>
      </Document>
    );

    // Renderiza el PDF y proporciona el enlace para descargarlo
    const pdfDoc = <MyDocument />;
    return (
      <PDFDownloadLink document={pdfDoc} fileName="mi_curriculum.pdf">
        Generar Currículum
      </PDFDownloadLink>
    );
  };

  const styles = StyleSheet.create({
    contenedor: {
      textAlign: "center",
    },
    nombre: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    titulo: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
      marginBottom: 5,
    },
    contenido: {
      fontSize: 12,
      marginBottom: 10,
    },
  });

  return (
    <div>
      <h1>Generador de Currículum</h1>
      <label>Nombre:</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <label>Correo:</label>
      <input
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <label>Teléfono:</label>
      <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} />

      <label>Experiencia:</label>
      <textarea
        value={experiencia}
        onChange={(e) => setExperiencia(e.target.value)}
      />

      <label>Educación:</label>
      <textarea
        value={educacion}
        onChange={(e) => setEducacion(e.target.value)}
      />

      <label>Habilidades:</label>
      <textarea
        value={habilidades}
        onChange={(e) => setHabilidades(e.target.value)}
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

      {generarCV()}
    </div>
  );
};

export default CVGenerator;
