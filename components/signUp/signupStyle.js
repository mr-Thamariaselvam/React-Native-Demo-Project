import { StyleSheet } from "react-native";

const signupStyle = StyleSheet.create({
    Si_mainContainer:{
        backgroundColor:'#FFFFFF',
        flex:1,
        padding:'5%',
    },
    si_signCon:{
        backgroundColor:'#ffffff',
        alignItems:'flex-start',
        paddingVertical:'2%',
        width:'100%',
    },
    si_labelText:{
        color:'#000',
        fontWeight:'bold',
        fontSize:18,
        paddingHorizontal:'2%',
        fontFamily: 'Times New Roman',
    },
    si_TextInput:{
        borderWidth:2,
        paddingHorizontal:'2%',
        borderColor:'#d9d9d9',
        marginTop:'4%',
        width:'94%',
        margin:'3%',
        borderRadius:5,
        backgroundColor:'#d9d9d9',
    },
    si_passCon:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    si_passLabelText:{
        color:'#000',
        fontWeight:'bold',
        fontSize:18,
        paddingHorizontal:'2%',
        fontFamily: 'Times New Roman',
    },
    si_passLabelText1:{
        color:'#000',
        fontWeight:'bold',
        fontSize:18,
        paddingHorizontal:'28%',
        fontFamily: 'Times New Roman',
        width:'100%'
    },
    si_passTextInput:{
        borderWidth:2,
        padding:'3%',
        margin:'2%',
        borderColor:'#d9d9d9',
        width:'45%',
        borderRadius:5,
        backgroundColor:'#d9d9d9',
    },
    
});
export default signupStyle;