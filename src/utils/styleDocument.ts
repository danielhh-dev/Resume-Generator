import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontFamily: "Poppins-Bold",
    marginTop: 10,
    marginBottom: 5,
  },
  contentContact: {
    fontSize: 8,
    textAlign: "right",
    fontFamily: "Poppins-Medium",
  },
  content: {
    fontSize: 8,
  },
  about: {
    fontSize: 10,
    fontFamily: "Poppins-Medium",
  },
  position: {
    fontSize: 14,
    fontFamily: "Poppins-Italic", // Fuente en itálica
  },
  doble: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hr: {
    marginVertical: 5,
    width: "100%",
    height: 1,
    backgroundColor: "black",
  },
  textBlackSmall: {
    fontSize: 9,
    fontFamily: "Poppins-Bold",
  },
  webs: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  contentSubtitle: {
    fontSize: 11,
    fontFamily: "Poppins-Bold",
  },
  info: {
    fontSize: 10,
    fontFamily: "Poppins-Medium",
  },
  description: {
    fontSize: 11,
    fontFamily: "Poppins-Medium",
  },
  indentation: {
    marginHorizontal: 10,
  },
});