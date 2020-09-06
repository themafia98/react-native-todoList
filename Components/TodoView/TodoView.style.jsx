import { StyleSheet } from "react-native";


export default StyleSheet.create({
  closePopupButton: {
    fontSize: 18,
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#500202",
    backgroundColor: "#f08080",
    minWidth: 30,
    maxWidth: 30
  },
  todoText: {
    fontSize: 23
  },
  noteText: {
    fontSize: 14,
    color: "#808080"
  },
  editableText: {
    borderWidth: 1,
    borderColor: "#ff0000",
    padding: 10,
  },
  deleteTodoButton: {
    width: 110,
    borderWidth: 5,
    backgroundColor: "#ff6347",
    borderColor: "#8b4513",
    borderWidth: 2,
    borderStyle: "solid"
  },
  popupContentSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});