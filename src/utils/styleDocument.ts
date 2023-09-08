import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
    marginBottom: 10,
    color: "#3A3A3A"
  },
  title: {
    fontSize: 14,
    fontFamily: "Poppins-Bold",
    marginTop: 10,
    marginBottom: 5,
    color: "#3A3A3A"
  },
  contentContact: {
    fontSize: 8,
    textAlign: "right",
    fontFamily: "Poppins-Medium",
    color: "#3A3A3A"

  },
  content: {
    fontSize: 8,
    color: "#3A3A3A"

  },
  about: {
    fontSize: 10,
    fontFamily: "Poppins-Medium",
    textAlign: "justify",
    paddingTop: 10,
    color: "#3A3A3A"

  },
  position: {
    fontSize: 14,
    fontFamily: "Poppins-Italic",
    marginLeft: 10,
    color: "#3A3A3A"

  },
  doble: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hr: {
    marginVertical: 3,
    width: "100%",
    height: 1,
    backgroundColor: "#3A3A3A",
    
  },
  textBlackSmall: {
    fontSize: 9,
    fontFamily: "Poppins-Bold",
    color: "#3A3A3A"

  },
  webs: {
    marginTop: 30,
    flexDirection: "column",
    alignItems: "flex-end",
    color: "#3A3A3A",
  },
  contentSubtitle: {
    fontSize: 11,
    fontFamily: "Poppins-Bold",
    color: "#3A3A3A"

  },
  info: {
    fontSize: 10,
    fontFamily: "Poppins-Medium",
    color: "#3A3A3A"

  },
  description: {
    fontSize: 10,
    fontFamily: "Poppins-Medium",
    color: "#3A3A3A"

  },
  indentation: {
    marginHorizontal: 10,
  },
  my: {
    marginVertical: 3,
  },
  me: {
    marginRight: 10,
  },
  date: {
    fontSize: 8,
    fontFamily: "Poppins-Italic",
    color: "#3A3A3A"

  },
});
