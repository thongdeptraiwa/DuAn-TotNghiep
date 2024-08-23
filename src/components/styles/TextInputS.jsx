import { StyleSheet } from "react-native";

const inputStyles = StyleSheet.create({
  inputContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    marginBottom: 18,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
    color: '#999',
  },
  input: {
    flex: 1,
    paddingVertical: 20,
    fontSize: 16,
    color: 'black',
  },
});

export default inputStyles;
