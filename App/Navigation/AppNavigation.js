/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import Setting from '../Components/Setting';
import Home from '../Components/Home';
import LogOut from '../Components/LogOut';
import AuthLoadingScreen from '../Components/AuthLoading';
import {createDrawerNavigator} from 'react-navigation-drawer';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {screen: Home},
  Setting: {screen: Setting},
  LogOut: {screen: LogOut},
},
{
  initialRouteName:'Home',
  drawerWidth: 250,
  drawerPosition:'left',
  drawerBackgroundColor:'pink',
  // contentComponent: DrawerContent,
});

const AuthStack = createStackNavigator({ SignIn: SignIn, SignUp: SignUp });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MyDrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
      navigationOptions:{
        header: null,
      }
    },
  ),
);
