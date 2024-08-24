import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
const styles = StyleSheet.create({
  ViewAll:{
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 0.9,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    alignItems: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  subheaderText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.linkText,
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: colors.linkText,
    fontSize: 14,
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: colors.Bluebackground,
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  signupText: {
    color: colors.linkText,
    fontWeight: 'bold',
  },
  logo: {
    borderRadius: 50,
    width: 70,
    height: 70
  }
});

export default styles;