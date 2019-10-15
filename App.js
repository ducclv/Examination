/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  AsyncStorage,
  StyleSheet,
} from 'react-native';

const RootStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    // initialRouteName: 'Home',
    navigationOptions: {
      header: null,
    },
  },
);
const AuthStack = createStackNavigator({SignIn: SignIn, SignUp:SignUp});
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: RootStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
// const Appcontainer = createAppContainer(RootStack);
// export default Appcontainer;
// const App = createAppContainer(MainNavigator);
// export default App;
