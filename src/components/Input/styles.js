import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontWeight: "500",
    },
});