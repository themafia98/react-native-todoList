import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    controllers: {
        flex: 1,
        width: "50%",
        flexDirection: "column",
        alignItems: "center"
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
        width: 120,
        fontWeight: 700,
        alignSelf: "center",
        cursor: "pointer",
        backgroundColor: "#c1c1ff",
        color: "red",
    },
    sortControllersContainer: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 5,
        justifyContent: "space-between"
    },
    sortButton: {
        width: 30,
        borderRadius: 0,
        marginLeft: 5
    }
});