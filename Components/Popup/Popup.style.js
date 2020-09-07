import { StyleSheet } from "react-native";


export default StyleSheet.create({
    poupWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        minHeight: "100%",
        maxHeight: "100%",
        overflow: "hidden",
        backgroundColor: "#00000099"
    },
    popup: {
        display: "none",
        position: "absolute",
        borderColor: "#add8e6",
        borderWidth: 5,
        borderStyle: "solid",
        backgroundColor: "#f5f5f5",
        top: "13%",
        left: "13%"
    },
    visible: {
        display: "flex"
    },
    large: {
        width: "90%",
        height: "90%"
    },
    medium: {
        width: "75%",
        height: "75%"
    },
    small: {
        width: "30%",
        height: "30%"
    }
});