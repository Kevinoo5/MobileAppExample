import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
    },
    titleContainer: {
        marginVertical: 54,
    },
    innerTitle: {
        color: "#FCA34D",
        textDecorationLine: "underline"
    },
    container: {
        padding: 24,
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    footerText: {
        color: "#4F63AC",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30,
    },
});