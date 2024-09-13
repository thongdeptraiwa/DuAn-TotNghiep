import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: 300,
        height: 300,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        color: colors.blackFont,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: colors.blackFont,
        textAlign: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: colors.Bluebackground,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerText: {
        marginTop: 20,
        fontSize: 14,
        color: colors.blackFont,
    },
    loginText: {
        color: colors.linkText,
        fontWeight: 'bold',
    },
});
export default styles