import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  AsyncStorage,
} from 'react-native';
const userInfo = {username: 'admin', password: 'abc123'};
export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  // handleEmail = text => {
  //   this.setState({email: text});
  // };
  // handlePassword = text => {
  //   this.setState({password: text});
  // };
  // login = (email, pass) => {
  //   Alert.alert('email: ' + email + ' password: ' + pass);
  // };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="username"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={username => this.setState({username})}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.submitButton} onPress={this.login}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
  login = async () => {
    if (
      userInfo.email === this.state.email &&
      userInfo.password === this.state.password
    ) {
      // Alert.alert('logged in');
      await AsyncStorage.setItem('isLoggedIn', '1');
      this.props.navigation.navigate('Home');
    } else {
      Alert.alert('username or password is incorrect');
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
