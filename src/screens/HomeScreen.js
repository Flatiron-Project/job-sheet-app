import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-material-ui'
import BottomNavigationBar from '../components/BottomNavgationBar'
import { preventAutoHide } from 'expo/build/launch/SplashScreen'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.header}>Home Screen</Text>
        <Button raised primary text="Button" onPress={() => {
          navigation.navigate('Second')} 
        }/>
      </View>
      <View style={styles.navbar}>
        <BottomNavigationBar />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // height: '100%',
  },
  header: {
    fontSize: 35,
    color: 'green',
    fontWeight: 'bold',
  },
  navbar: {
    marginBottom: 'auto',
  },
})

export default HomeScreen
