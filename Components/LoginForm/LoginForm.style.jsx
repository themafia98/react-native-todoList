import { StyleSheet } from "react-native";


export default StyleSheet.create({
  form: {
    flexDirection: "column",
  },
  inputText: {
    width: 300,
    height: 30,
    margin: 2,
    padding: 4,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1
  },
  submitButton: {
    marginTop: 15,
    marginBottom: 15,
    padding: 5,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#d3f4ff",
    borderWidth: 1,
  },
  modeText: {
    fontSize: 16,
    borderWidth: 1,
    textAlign: "center",
    padding: 5,
    backgroundColor: "#add8e6",
    color: "#FFF",
    fontWeight: "bold",
  },
  formTitle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold"
  },
  error: {
    color: "red"
  },
  errorInput: {
    borderColor: "red"
  }
});