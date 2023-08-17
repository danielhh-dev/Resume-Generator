import React from "react";
import { Document, Page, Text, View, Font } from "@react-pdf/renderer";
import { PDFDocumentProps } from "../../interface/PDFDocumentProps";
import { styles } from "../../utils/styleDocument";

import customFont from "../../assets/font/Poppins/Poppins-Medium.ttf";
import customFontItalic from "../../assets/font/Poppins/Poppins-Italic.ttf";
import customFontBold from "../../assets/font/Poppins/Poppins-Bold.ttf";
Font.register({ family: "Poppins-Medium", src: customFont });
Font.register({ family: "Poppins", src: customFont });
Font.register({ family: "Poppins-Italic", src: customFontItalic });
Font.register({ family: "Poppins-Bold", src: customFontBold });
const PDFDocument: React.FC<PDFDocumentProps> = ({
  name,
  pretendedPosition,
  email,
  phone,
  description,
  experiences,
  educationList,
  skills,
  social,
}) => (
  <Document>
    <Page style={styles.container}>
      <View>
        {/* Basic info */}
        <View style={styles.doble}>
          <View>
            <Text style={styles.name}>Nombre completo{name}</Text>
            <Text style={styles.position}>Puesto{pretendedPosition}</Text>
          </View>
          <View style={styles.webs}>
            <Text style={[styles.contentContact, { textAlign: "right" }]}>
              Correo{email}
            </Text>
            <Text style={[styles.contentContact, { textAlign: "right" }]}>
              telefono{phone}
            </Text>
            <Text style={[styles.contentContact, { textAlign: "right" }]}>
              social{social}
            </Text>
          </View>
        </View>
        <View style={styles.hr} />
        <Text style={styles.about}>About Me: {description}</Text>
        {/* Experience */}
        <View>
          <Text style={styles.title}>Experience:</Text>
          {experiences.map((exp, index) => (
            <View key={index} style={styles.indentation}>
              <Text style={styles.contentSubtitle}>
                {exp.position} in {exp.company}
              </Text>
              <Text style={styles.info}>
                {exp.since} - {exp.isWorking ? "Present" : exp.until}
              </Text>
              <Text style={styles.description}>• {exp.workDescription}</Text>
              <Text style={styles.textBlackSmall}>
                Tech Stack: {exp.techStack}
              </Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <Text style={styles.title}>Education:</Text>
        {educationList.map((edu, index) => (
          <View key={index} style={styles.indentation}>
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
          <Text key={index} style={[styles.content, styles.indentation]}>
            • {skill}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
