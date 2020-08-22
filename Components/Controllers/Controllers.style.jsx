import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    controllers: {
        width: "50%",
        position: "relative",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center"
    },
    inputText: {
        margin: 2,
        padding: 4,
        borderRadius: 4,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1
    },
    addButton: {
        width: 50,
        fontWeight: 700,
        alignSelf: "center",
        cursor: "pointer",
        backgroundColor: "#c1c1ff",
        color: "red",
    },
    sortControllersContainer: {
        width: "30%",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5,
        justifyContent: "space-between"
    },
    sortButton: {
        width: "30px",
    }
});