import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5%',
      backgroundColor: '#ffffff',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputContainer: {
      position: 'relative',
      width: '100%',
    },
    input: {
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 8,
      paddingHorizontal: 40,
      marginBottom: 15,
      width: '80%',
      height: 40,
    },
    eyeIcon: {
      position: 'absolute',
      top: 10,
      right: 20,
    },
    changePasswordButton: {
      backgroundColor: '#ff595e',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  

export default styles;