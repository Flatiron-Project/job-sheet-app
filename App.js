import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import Login from './src/screens/Login'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      }
    },
  },
  {
    initalRouteName: 'Orbit',
    defaultNavigationOptions: {
      title: 'Job Sheet',
    },
  },
)

export default createAppContainer(navigator)