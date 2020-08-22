import { StyleSheet } from "react-native";


export default StyleSheet.create({
  button: {
    width: 70,
    minWidth: 70,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    backgroundColor: "lightgray",
    borderRadius: 4
  },
  defaultButtonLabel: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#680404"
  },
  past: {
    backgroundColor: "grey"
  },
  current: {
    backgroundColor: "#c9d33e"
  },
  future: {
    backgroundColor: "#add8e6"
  },
  all: {
    backgroundColor: "#008000"
  }
});