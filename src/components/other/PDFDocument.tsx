import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PDFDocumentProps } from "../../interface/PDFDocumentProps";

const PDFDocument: React.FC<PDFDocumentProps> = ({
  name,
  pretendedPosition,
  email,
  phone,
  description,
  experiences,
  educationList,
  skills,
}) => (
  <Document>
    <Page>
      <View style={styles.container}>
        {/* Basic info */}
        <View style={styles.basicInfoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.content}>{pretendedPosition}</Text>
          <View style={styles.basicInfoDetails}>
            <Text style={styles.content}>{email}</Text>
            <Text style={styles.content}>{phone}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.content}>About Me: {description}</Text>
        </View>
        {/* Experience */}
        <View>
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
        </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
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
  position: {
    fontSize: 12,
  },
  basicInfoContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  basicInfoDetails: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 10,
  },
});

export default PDFDocument;
