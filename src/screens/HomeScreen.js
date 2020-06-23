import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Home Screen</Text>
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
