import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'

const navigator = craeteStackNavigator(
  {
  Home: HomeScreen,
  },
  {
    initalRouteName: Home,
    defaultNavigationOptions: {
      title: 'Job Sheet',
    },
  },
)

export default createAppContainer(navigator)