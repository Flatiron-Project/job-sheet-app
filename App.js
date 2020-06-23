import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import SecondScreen from './src/screens/SecondScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Second: SecondScreen,
  },
  {
    initalRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Job Sheet',
    },
  },
)

export default createAppContainer(navigator)