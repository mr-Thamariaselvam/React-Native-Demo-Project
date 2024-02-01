// OTPVerification.js
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './verificationStyles';

const OTPVerification = ({navigation}) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const refs = Array.from({ length: 4 }).map(() => useRef());

  const handleVerifyOTP = () => {
    const enteredOTP = otp.join('');
    
    // Implement your OTP verification logic here
    // For demonstration purposes, checking if OTP is '1234'
    if (enteredOTP === '1234') {
      Alert.alert('Success', 'OTP Verified Successfully');
      navigation.navigate('Home')
      setOTP(['', '', '', '']);
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
      // Clear the entered OTP
      setOTP(['', '', '', '']);
      // Focus on the first input
      refs[0].current.focus();
    }
  };

  const handleInputChange = (index, value) => {
    // Update the OTP array with the new value
    const newOTP = [...otp];
    newOTP[index] = value;

    // Move to the next input if a digit is entered
    if (value && index < 3) {
      refs[index + 1].current.focus();
    }

    // Update the state with the new OTP array
    setOTP(newOTP);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        We will send you a pin to continue your account
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={refs[index]}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleInputChange(index, text)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP}>
        <Text style={styles.verifyButtonText}>Verify OTP</Text>
      </TouchableOpacity>
      <View style={{margin:'4%'}}>
        <Text>Don't receive code ? <Text style={{color:'#ff595e'}}>Resend code</Text></Text>
      </View>
    </View>
  );
};
export default OTPVerification;
