import { StyleSheet } from "react-native";

const logStyle = StyleSheet.create({
    log_mainCon:{
        backgroundColor:'#ffffff',
        alignItems:'flex-start',
        paddingVertical:'2%',
        height:900,
    },
    log_logCon:{
        backgroundColor:'#ffffff',
        alignItems:'flex-start',
        paddingVertical:'2%',
        width:'100%',
    },
    log_labelText:{
        color:'#000',
        fontWeight:'bold',
        fontSize:20,
        paddingHorizontal:'2%',
        fontFamily: 'Times New Roman',
    },
    log_TextInput:{
        borderWidth:2,
        paddingHorizontal:'2%',
        borderColor:'#d9d9d9',
        marginTop:'4%',
        width:'94%',
        margin:'3%',
        borderRadius:5,
        backgroundColor:'#d9d9d9',
    },
    log_checkboxContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        margin:'2%',
    },
    log_checkboxLabel:{
        color:'grey',
        paddingHorizontal:'2%',
        marginTop:'1.5%',
    },
    forgotPasswordText:{
        color:'grey',
        paddingLeft:'30%',
        marginTop:'2.5%',
    },
    loginButton:{
        backgroundColor:'#ff595e',
        padding:'2%',
        margin:'5%',
        borderRadius:5,
        width:'90%',
        alignItems:'center',
        height:50,
    },
    loginButtonText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    },
    divider: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#000',
      },
    dividerText: {
        marginHorizontal: 10,
        fontSize: 16,
        color:'#000', 
      },
    SocialButtons:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-around',
      paddingHorizontal:'5%',
      marginVertical:'10%',
      alignItems:'center',
    },
    signUpText:{
        marginVertical:'2%',
        marginHorizontal:'10%',
        color:'#000',
        fontSize:16,
    },
    signUpLink:{
    color: '#ff595e', 
    fontSize: 17,
    marginTop:'12%',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    },
    signInCon:{
        flexDirection:'row',
        padding:'5%',
        margin:'2%',
        justifyContent:'center',
    },
})

export default logStyle;