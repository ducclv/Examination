/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  AsyncStorage,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import Setting from '../Components/Setting';
import styles from './Styles/AppNavigationStyles';
import Home from '../Components/Home';
import LogOut from '../Components/LogOut';
import {createDrawerNavigator} from 'react-navigation-drawer';

// const RootStack = createStackNavigator(
//   {
//     Home: Home,
//     Setting: Setting,
//   },
//   {
//     navigationOptions: {
//       header: null,
//     },
//   },
// );

const MyDrawerNavigator = createDrawerNavigator({
  Home: {screen: Home},
  Setting: {screen: Setting},
  LogOut: {screen: LogOut},
},
{
  initialRouteName:'Home',
  drawerWidth: 300,
  drawerPosition:'left',
});

const AuthStack = createStackNavigator({ SignIn: SignIn, SignUp: SignUp });

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.loadData();
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
  loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(isLoggedIn !== '1' ? 'Auth' : 'App');
  };
}

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MyDrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
