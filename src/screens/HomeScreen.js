import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Home Screen</Text>
      <Button mode="contained" onPress={() => {
        navigation.navigate('Login')} 
      }><Text>Login</Text></Button>
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
