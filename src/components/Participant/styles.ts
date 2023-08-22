import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:12 
  }, 
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FAFAFA',
    marginLeft:16
  },

  buttonText: {
    color: "#FAFAFA",
    fontSize: 36
  },

  buttonContainer: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    justifyContent: 'center',
    alignItems: 'center',
  },

})