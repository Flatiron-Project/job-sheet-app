import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Home Screen</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Login')} 
      }><Text>Login</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  header: {
    fontSize: 35,
    color: 'green',
    fontWeight: 'bold',
  }
})

export default HomeScreen
