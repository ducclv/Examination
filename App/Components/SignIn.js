import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './Styles/SignInStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
console.disableYellowBox = true;
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
      showPassword: true,
    };
  }
  render() {
    return (
      <SafeAreaView >
        <ScrollView style={styles.scrollView}>
          <ImageBackground style={styles.bglogo} source={require('../Images/bg.jpg')}>
            <View style={styles.container}>
              <Image style={styles.logo} source={require('../Images/TD-logo.png')} />
              <Text style={styles.title}>
                DỊCH VỤ CÔNG TÂN DÂN
                </Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="ID đăng nhập"
                placeholderTextColor="#808080"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
              />

              <View style={styles.passwordViewContainer}>
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Mật khẩu"
                  placeholderTextColor="#808080"
                  autoCapitalize="none"
                  onChangeText={this.handlePassword}
                  secureTextEntry={this.state.showPassword}
                  value={this.state.password}
                />
                <Icon style={styles.icon}
                  name={this.state.icEye}
                  size={23}
                  onPress={this.changePwdType}
                />
              </View>
              <View style={styles.forgetButton}>
                <TouchableOpacity>
                  <Text style={styles.forgetButtonText}>Quên mật khẩu</Text>
                </TouchableOpacity>
              </View>
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
          </ImageBackground>
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

