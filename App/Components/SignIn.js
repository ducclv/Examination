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
  StatusBar,
} from 'react-native';
import styles from './Styles/SignInStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'react-native-axios';
import { parseString } from 'react-native-xml2js';
import { flatListDataTest } from '../Data/FlatListDataTest';
console.disableYellowBox = true;

const userInfo = { username: 'admin', password: 'abc123' };//test data

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
      <>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <ImageBackground style={styles.bglogo} source={require('../Images/bg.jpg')}>
              <View style={styles.container}>
                <Image style={styles.logo} source={require('../Images/TD-logo.png')} />
                <Text style={styles.title}>
                  DỊCH VỤ CÔNG TÂN DÂN
                </Text>
                <View style={styles.row}>
                  <Icons
                    style={styles.iconUser}
                    name="user"
                    size={23}
                  />
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
                </View>
                <View style={styles.line}></View>
                <View style={styles.row}>
                  <Icons
                    style={styles.iconUser}
                    name="key"
                    size={23}
                  />
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
                <View style={styles.line}></View>
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
      </>
    );
  }

  // login = async () => {// test login with 'userInfor' data
  //   if (
  //     userInfo.email === this.state.email &&
  //     userInfo.password === this.state.password
  //   ) {
  //     await AsyncStorage.setItem('isLoggedIn', '1');
  //     this.props.navigation.navigate('Home');
  //   } else {
  //     Alert.alert('username or password is incorrect');
  //   }
  // };

  gotoSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };
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

  login = async () => {// login with API
    const xmlReqBody = `<soap:Envelope 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Body> <Login 
    xmlns="http://schemas.microsoft.com/sharepoint/soap/"> <loginName>`
      +
      this.state.username //username
      +
      `</loginName> <pwd>`
      +
      this.state.password //password
      +
      `</pwd> </Login> </soap:Body> </soap:Envelope>`

    var a = await axios('https://dvchopquy.tandan.com.vn/_layouts/tandan/dvc/DVCServiceMobile.asmx', {
      method: 'POST',
      headers: {
        "Content-Type": 'text/xml; charset="utf-8"',
        "Accept": 'application/json',
      },
      data: xmlReqBody,
      dataType: "xml",
    })
      .then(function (response) {
        var xml = response.data
        parseString(xml, function (err, result) {
          var t = result['soap:Envelope']
          var t1 = t['soap:Body']
          var t2 = t1[0].LoginResponse[0].LoginResult[0]
          xml = t2
        });
        return xml;
      })
      .then((data) => {
        var data1 = JSON.parse(data)
        return data1
      })
    if (
      a.Status == "OK"
    ) {
      await AsyncStorage.setItem('isLoggedIn', '1');
      this.props.navigation.navigate('App',{
        LoginName: a.Data.UserInfo.LoginName,
        UserName: a.Data.UserInfo.UserName,
        CMND:a.Data.UserInfo.CMND,
        PhoneNumber:a.Data.UserInfo.PhoneNumber,
        Email:a.Data.UserInfo.Email,
        DiaChi:a.Data.UserInfo.DiaChi
      });
      this.props.navigation.navigate('Home',{
        LoginName: a.Data.UserInfo.LoginName,
        UserName: a.Data.UserInfo.UserName,
        CMND:a.Data.UserInfo.CMND,
        PhoneNumber:a.Data.UserInfo.PhoneNumber,
        Email:a.Data.UserInfo.Email,
        DiaChi:a.Data.UserInfo.DiaChi
      });
    } else {
      Alert.alert('Đăng nhập thất bại');
    }
  }
}