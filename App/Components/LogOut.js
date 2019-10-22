import React, { Component } from 'react';
import {
  View,
  Text,
  YellowBox,
} from 'react-native';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './Styles/HomeStyles';
export default class LogOut extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is page LogOut</Text>
        <Button 
        onPress={this.logout} 
        // onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
        title="logout" 
        />
      </View>
    );
  }
  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}