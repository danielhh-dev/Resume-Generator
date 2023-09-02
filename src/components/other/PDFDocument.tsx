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
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.position}>{pretendedPosition}</Text>
          </View>
          <View style={styles.webs}>
            <Text
              style={[styles.contentContact, { textAlign: "right" }, styles.me]}
            >
              {email}
            </Text>
            <Text
              style={[styles.contentContact, { textAlign: "right" }, styles.me]}
            >
              {phone}
            </Text>
            <Text
              style={[styles.contentContact, { textAlign: "right" }, styles.me]}
            >
              {social}
            </Text>
          </View>
        </View>
        <View style={styles.hr} />
        <Text style={styles.about}>{description}</Text>
        {/* Experience */}
        <View>
          <Text style={styles.title}>Experience:</Text>
          
            {experiences.map((exp, index) => (
              <View
                key={index}
                style={[styles.indentation, { marginBottom: 10 }]}
              >
                {/* <Text>{exp.position}</Text> */}
                <View
                  style={[
                    { flexDirection: "row" },
                    { justifyContent: "space-between" },
                  ]}
                >
                  <Text style={styles.contentSubtitle}>
                    {exp.position} in {exp.company}
                  </Text>
                  <Text style={styles.date}>
                    {exp.since} - {exp.isWorking ? "Present" : exp.until}
                  </Text>
                </View>
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
          <View
            key={index}
            style={[
              styles.indentation,
              { flexDirection: "column" },
              { justifyContent: "space-between" },
            ]}
          >
            <Text style={styles.contentSubtitle}>
              {edu.degree} in {edu.university}
            </Text>
            <Text style={[styles.date, { marginBottom: 5 }]}>
              {edu.startDate} to {edu.isOngoing ? "Present" : edu.endDate}
            </Text>
          </View>
        ))}
        {/* Skills */}
        <Text style={styles.title}>Skills:</Text>
        <View>
          {skills.map((skill, index) => (
            <Text
              key={index}
              style={[styles.info, styles.indentation, styles.my]}
            >
              • {skill}
            </Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
