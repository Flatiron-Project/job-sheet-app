import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

export default HomeScreen
