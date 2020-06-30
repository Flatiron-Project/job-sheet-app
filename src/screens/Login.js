import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput } from 'react-native-paper'
import { theme } from '../styles/theme'

const Login = () => {
  return (
    <View style={styles.loginView}>
      <LinearGradient
        colors={['#6200EE', '#03DAC5']}
        style={styles.linearGradient}
      >
        <Text style={styles.header}>ORBIT</Text>
        <View style={styles.form}>
          <TextInput
            mode='flat'
            label='Email'
            style={styles.input}
            underlineColor='#6E00EE'
            selectionColor='white'
          />
          <TextInput
            password
            mode='flat'
            label='Password'
            style={styles.input}
            underlineColor='#6E00EE'
          />
        </View>
      </LinearGradient>
    </View>
  )
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
    marginTop: '45%',
    fontSize: 48,
    letterSpacing: 15,
    color: '#03DAC5',
  },
  form: {
    marginTop: '25%',
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '75%',
    backgroundColor: 'transparent',
  },
})

export default Login
