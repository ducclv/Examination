/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';


import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import Setting from '../Components/Setting';
import Home from '../Components/Home';
import AuthLoadingScreen from '../Components/AuthLoading';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import MenuDrawer from '../Components/MenuDrawer';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Text,
}
  from 'react-native';

const CustomerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View >
      <Image source={require('../Images/bg.jpg')} style={{ height: 120, width: 120, borderRadius: 60 }} />
      {/* <Text>Hello world</Text> */}
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const MyDrawerNavigator = createDrawerNavigator({
  Home: { screen: Home },
  Setting: { screen: Setting },
},
  {
    // initialRouteName: 'Home',
    drawerWidth: 250,
    // drawerPosition: 'left',
    contentComponent: MenuDrawer,
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
    },
  ),
);

