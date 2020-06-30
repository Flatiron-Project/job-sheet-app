import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Login = () => {
  return (
    <View style={styles.loginView}>
      <LinearGradient
        colors={['#6200EE', '#03DAC5']}
        style={styles.linearGradient}
      >
        <Text>Login</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  }
})
 
export default Login;