import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 30,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Poppins-Medium",
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  contentContact: {
    fontSize: 8,
    textAlign: "right",
  },
  content: {
    fontSize: 8,
  },
  position: {
    fontSize: 12,
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
    fontSize: 12,
    fontWeight: "extrabold",
  },
  webs: {
    marginTop: 20,
    flexDirection: "column", // Stack the Text components vertically
    alignItems: "flex-end",
  },
});
