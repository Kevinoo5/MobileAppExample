import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

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
        color: colors.orange,
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
        color: colors.blue,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30,
    },
});