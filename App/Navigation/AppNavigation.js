/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import AuthLoadingScreen from '../Components/AuthLoading';
import MenuDrawer from '../Components/MenuDrawer';

import HomeScreen from '../Containers/HomeScreen'
import SignInScreen from '../Containers/SignInScreen'
import SignUpScreen from '../Containers/SignUpScreen'
import StudentsScreen from '../Containers/StudentsScreen'
import SubjectsScreen from '../Containers/SubjectsScreen'
import Home from '../Components/Home'

const DrawerNavigator = createDrawerNavigator({
  HomeScreen: { screen: HomeScreen },
  StudentsScreen: { screen: StudentsScreen },
  SubjectsScreen: { screen: SubjectsScreen }
},
  {
    initialRouteName: 'HomeScreen',
    drawerWidth: 250,
    drawerPosition: 'left',
    contentComponent: MenuDrawer,//custom draw navigation
  });

const AuthStack = createStackNavigator({
  SignInScreen: { screen: SignInScreen, navigationOptions: ({ header: null }) },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: ({
      title: 'Đăng ký tài khoản',
      headerStyle: { height: 100 },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: DrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
