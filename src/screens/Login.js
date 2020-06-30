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
        <Text style={styles.header}>Login</Text>
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
    alignItems: 'center',
  },
  header: {
    marginTop: '25%',
    fontSize: 48,
    letterSpacing: 15,
    color: '#7F39FB',
  }
})
 
export default Login;