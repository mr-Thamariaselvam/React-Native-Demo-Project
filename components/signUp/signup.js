import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import signupStyle from './signupStyle';
const Signup = () => {
  return (
    <View style={signupStyle.Si_mainContainer}>
      <View style={signupStyle.si_signCon}>
        <Text style={signupStyle.si_labelText}>Name</Text>
        <TextInput style={signupStyle.si_TextInput} />
        <Text style={signupStyle.si_labelText}>Email</Text>
        <TextInput style={signupStyle.si_TextInput} />
        <View style={signupStyle.si_passCon}>
          <Text style={signupStyle.si_passLabelText}>Password</Text>
          <Text style={signupStyle.si_passLabelText1}>Re-Password</Text>
        </View>
        <View style={signupStyle.si_passCon}>
          <TextInput
            style={signupStyle.si_passTextInput}
            secureTextEntry={true}
          />
          <TextInput
            style={signupStyle.si_passTextInput}
            secureTextEntry={true}
          />
        </View>
        <Text>
          By Clicking Sign Up you are in agreement of the{' '}
          <Text>Terms and condition</Text>
        </Text>
        <View>
          <Pressable>
            <Text>Sign Up</Text>
          </Pressable>
        </View>
        <Text>
          Do you Have a Account ? <Text>SignIn</Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
