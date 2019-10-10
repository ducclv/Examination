import React, {Component} from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import {Button} from 'react-native-elements';
// import {TouchableOpacity} from 'react-native-gesture-handler';
export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is page Home</Text>
        {/* <TouchableOpacity onPress={this.logout()}>
          <Text>Log out</Text>
        </TouchableOpacity> */}
        <Button onPress={this.logout} title="logout" />
      </View>
    );
  }
  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
