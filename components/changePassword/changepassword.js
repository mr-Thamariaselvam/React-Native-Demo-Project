import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './forgotpassStyle';

const ChangePassword = ({navigation}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChangePassword = () => {
    // Check if new password and confirm password are not empty
    if (newPassword.trim() === '' || confirmPassword.trim() === '') {
      Alert.alert('Error', 'New password and confirm password cannot be empty');
      return;
    }

    // Implement your password change logic here
    if (newPassword === confirmPassword) {
      navigation.navigate('Login')
      Alert.alert('Success', 'Password changed successfully');
      // Reset the input fields
      setNewPassword('');
      setConfirmPassword('');
    } else {
      Alert.alert('Error', 'New password and confirm password do not match');
    }
  };

  const togglePasswordVisibility = (passwordType) => {
    if (passwordType === 'newPassword') {
      setShowNewPassword(!showNewPassword);
    } else if (passwordType === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Change Password</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry={!showNewPassword}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => togglePasswordVisibility('newPassword')}
        >
          <Icon name={showNewPassword ? 'eye' : 'eye-slash'} size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => togglePasswordVisibility('confirmPassword')}
        >
          <Icon name={showConfirmPassword ? 'eye' : 'eye-slash'} size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ChangePassword;
