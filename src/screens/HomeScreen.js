import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-material-ui'

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Home Screen</Text>
      <Button raised primary text="Button" />
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
