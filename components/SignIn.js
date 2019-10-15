import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Alert,
  AsyncStorage,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const userInfo = { username: 'admin', password: 'abc123' };

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      icEye: 'visibility-off',
      showPassword: true
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View >
              <Image style={styles.logo} source={require('../images/logoTandan.jpg')} />
              <Text style={styles.title}>
                DỊCH VỤ CÔNG TÂN DÂN
          </Text>
            </View>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="ID đăng nhập"
              placeholderTextColor='white'
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />

            {/* <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Mật khẩu"
              placeholderTextColor='white'
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            /> */}
            <View style={styles.passwordViewContainer}>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Mật khẩu"
                placeholderTextColor="white"
                autoCapitalize="none"
                onChangeText={this.handlePassword}
                secureTextEntry={this.state.showPassword}
                value={this.state.password}
              />
              <Icon style={styles.icon}
                name={this.state.icEye}
                size={25}
                onPress={this.changePwdType}
              />
            </View>
            <TouchableOpacity style={styles.forgetButton}>
              <Text style={styles.forgetButtonText}> Quên mật khẩu </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.submitButton} onPress={this.login}>
              <Text style={styles.submitButtonText}> Đăng nhập </Text>
            </TouchableOpacity>

            <View style={styles.signup}>
              <Text style={styles.txt}>Bạn chưa có tài khoản?</Text>
              <TouchableOpacity
                onPress={this.gotoSignUp}>
                <Text style={styles.btnSignup}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  login = async () => {
    if (
      userInfo.email === this.state.email &&
      userInfo.password === this.state.password
    ) {
      await AsyncStorage.setItem('isLoggedIn', '1');
      this.props.navigation.navigate('Home');
    } else {
      Alert.alert('username or password is incorrect');
    }
  };
  gotoSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }
  changePwdType = () => {
    let newState;
    if (this.state.showPassword) {
        newState = {
            icEye: 'visibility',
            showPassword: false,
            password: this.state.password
        }
    } else {
        newState = {
            icEye: 'visibility-off',
            showPassword: true,
            password: this.state.password
        }
    }
    // set new state value
    this.setState(newState)
};
handlePassword = (password) => {
    let newState = {
        icEye: this.state.icEye,
        showPassword: this.state.showPassword,
        password: password
    }
    this.setState(newState);
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'blue',
  },
  logo: {
    alignItems: 'center',
    width: 400,
    height: 200,
    marginBottom: 25,
  },
  passwordViewContainer: {
    flexDirection: 'row'
  },
  icon: {
    position: 'absolute',
    top: 33,
    right: 0
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 30,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    backgroundColor: 'blue',
    color: 'white',
    margin: 15,
    height: 40,
    width: 310,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  submitButton: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 30,
    marginLeft: 130,
    height: 40,
    width: 120,
    borderRadius: 60,
  },
  submitButtonText: {
    color: 'blue',
    textAlign: 'center',
    fontWeight: "bold",
  },
  txt: {
    textAlign: 'center',
    color: 'white',
  },
  btnSignup: {
    color: 'coral',
    paddingLeft: 5,
  },
  signup: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  forgetButton: {
    alignItems: 'flex-end',
  },
  forgetButtonText: {
    fontSize: 12,
    color: 'white',
  }
});
