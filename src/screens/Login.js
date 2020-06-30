import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput, Button } from 'react-native-paper'
import { theme } from '../styles/theme'
import { vh } from 'react-native-expo-viewport-units'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.loginView}>
      <LinearGradient
        colors={['#03DAC5', '#6200EE']}
        style={styles.linearGradient}
      >
        <Text style={styles.header}>ORBIT</Text>
        <View style={styles.form}>
          <TextInput
            value={email}
            mode='flat'
            label='Email'
            style={styles.input}
            underlineColor='#03DAC5'
            onChangeText={text => setEmail(text)}
            theme={theme}
          />
          <TextInput
            value={password}
            mode='flat'
            label='Password'
            style={styles.input}
            underlineColor='#03DAC5'
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            theme={theme.secondary}
          />
        </View>
        <View style={styles.buttonGroup}>
          <Button mode='contained' style={styles.button} labelStyle={styles.buttonText}>LOG IN</Button>
          <Button mode='contained' style={styles.button} labelStyle={styles.buttonText}>SIGN UP</Button>
          <Button mode='contained' style={styles.button} color='white'>Log In with Google</Button>
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
    alignItems: 'center',
    height: vh(100),
  },
  header: {
    marginTop: '45%',
    fontSize: 48,
    letterSpacing: 15,
    color: '#7F39FB',
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
  buttonGroup: {
    marginTop: '15%',
    width: '100%',
    alignItems: 'center'
  },  
  button: {
    width: '60%',
    margin: 10,
  },
  buttonText: {
    color: '#03DAC5',
  }
})

export default Login
