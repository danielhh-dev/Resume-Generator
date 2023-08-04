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

  const generarCV = () => {
    // Crea un nuevo documento PDF
    const MyDocument: React.FC = () => (
      <Document>
        <Page>
          <View style={styles.contenedor}>
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={styles.contenido}>{correo}</Text>
            <Text style={styles.contenido}>{tel}</Text>
            <View style={styles.hrContainer}>
              <View style={styles.hr} />
            </View>

            <Text style={styles.titulo}>Experiencia:</Text>
            <Text style={styles.contenido}>{experiencia}</Text>
            <Text style={styles.titulo}>Educación:</Text>
            <Text style={styles.contenido}>{educacion}</Text>
            <Text style={styles.titulo}>Habilidades:</Text>
            <Text style={styles.contenido}>{habilidades}</Text>
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
      marginTop: 30,
      marginBottom: 5,
    },
    contenido: {
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

      {generarCV()}
    </div>
  );
};

export default CVGenerator;
