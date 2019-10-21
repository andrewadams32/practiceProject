import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from '../screens/Login'
import Signup from '../screens/Signup'

const appStack = createStackNavigator({
    login: LoginScreen,
    signup: Signup
}, {
    initialRouteName: "login",
    headerMode: "none"
})

export default Navigator = createAppContainer(appStack);