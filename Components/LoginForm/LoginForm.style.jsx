import { StyleSheet } from "react-native";


export default StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: "column"
  },
  inputText: {
    width: 200,
    height: 30,
    margin: 2,
    padding: 4,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1
  },
  modeText: {
    color: "blue",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  formTitle: {
    fontWeight: "bold"
  },
  error: {
    color: "red"
  },
  errorInput: {
    borderColor: "red"
  }
});