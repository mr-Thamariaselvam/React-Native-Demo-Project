// CustomSplashScreen.js
import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const CustomSplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the main app screen after 3 seconds
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Customize the splash screen image or design */}
      <Image
        source={require('../images/splashScreen/SplashScreen.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Customize the background color
  },
  image: {
    width: '100%', // Adjust the width as needed
    height: '100%', // Adjust the height as needed
  },
});

export default CustomSplashScreen;
