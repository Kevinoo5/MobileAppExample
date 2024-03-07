import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";
const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: height * 0.45,
    },
    content: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -40,
        paddingHorizontal: 24,
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 8,
    },

    description: {
        fontWeight: "300",
        marginVertical: 8,
    },
    footer: {
        padding: 24,
        flexDirection: "row",
        alignItems: "center",
    },
    save: {
        flex: 1,
    },
    bookmarkContainer: {
        backgroundColor: colors.lightGray,
        padding: 18,
        borderRadius: 8,
        marginRight: 16,
    },
    bookmark: {
        width: 24,
        height: 24,
    },
    backContainer: {
        position: "absolute",
        backgroundColor: colors.white,
        margin: 24,
        padding: 10,
        borderRadius: 8,
    },
    backIcon: {
        width: 20,
        height: 20,
    },
});