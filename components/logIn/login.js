// Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import logStyle from './LoginStyle';
import Icon from 'react-native-vector-icons/FontAwesome'

const Login = ({navigation}) => {
  const [loginText, setLoginText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleForgotPassword = () => {
    // logic for handling forgot password
    console.log('Forgot Password clicked');
    navigation.navigate('ChangePassword')
  };

  const handleLogin = () => {
    // login logic
    console.log('Login clicked');
    navigation.navigate('OTP')
  };

  const handleSignup = () =>{
    console.log('Signup Clicked');
    navigation.navigate('Signup')
    
  };

  return (
    <View style={logStyle.log_mainCon}>
      <View style={logStyle.log_logCon}>
        <Text style={logStyle.log_labelText}>Log In</Text>
        <TextInput
          value={loginText}
          onChangeText={(text) => setLoginText(text)}
          style={logStyle.log_TextInput}
          placeholder='Enter Your UserName'
        />
        <Text style={logStyle.log_labelText}>Password</Text>
        <TextInput
          value={passwordText}
          onChangeText={(text) => setPasswordText(text)}
          style={logStyle.log_TextInput}
          placeholder='Enter Your Password'
          secureTextEntry={true}
        />
        <View style={logStyle.log_checkboxContainer}>
          <CheckBox
            value={rememberMe}
            onValueChange={handleCheckboxChange}
            tintColors={{ true: '#ff595e', false: 'gray' }}
          />
          <Text style={logStyle.log_checkboxLabel}>Remember</Text>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={logStyle.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={logStyle.loginButton} onPress={handleLogin}>
          <Text style={logStyle.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={logStyle.divider}>
        <View style={logStyle.dividerLine} />
        <Text style={logStyle.dividerText}>OR</Text>
        <View style={logStyle.dividerLine} />
      </View>
      <View style={logStyle.SocialButtons}>
      <Text><Icon.Button name="facebook" backgroundColor="#3b5998"/></Text>
      <Text><Icon.Button name="google" backgroundColor="red"/></Text>
      <Text><Icon.Button name="twitter" backgroundColor="#00b4d8"/></Text>
      </View>
      <View style={logStyle.signInCon}>
      <Text style={logStyle.signUpText}> Don't Have an Account ?
        <Text style={logStyle.signUpLink}  onPress={handleSignup}>Sign up</Text>
      </Text>
      </View>
    </View>
  );
};

export default Login;
