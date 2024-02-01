import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#ffffff',
    },
    header: {
      fontSize: 19,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'justify',
      width: '70%',
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      padding: '2%',
    },
    otpInput: {
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 8,
      paddingHorizontal: 15,
      margin: '1%',
      fontSize: 18,
      width: '15%',
      textAlign: 'center',
    },
    verifyButton: {
      backgroundColor: '#ff595e',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    verifyButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default styles;