import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Navigation,
  StatusBar,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles/SignUpStyles';

var radio_props = [
  { label: "Nam", value: "nam" },
  { label: "Nữ", value: "nu" },
];

export default class SignUp extends Component {
  static navigationOptions = {
    title: 'Đăng ký tài khoản',
    headerStyle: {
      height: 70,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      marginTop: 10,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fullname: '',
      gender: '',
      phonenumber: '',
      birthday: '',
      icEye: 'visibility-off',
      showPassword: true
    };
  }


  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              <View style={styles.title}>
                <Text style={styles.title}>Thông tin tài khoản</Text>
              </View>

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
              <View style={styles.title}>
                <Text style={styles.title}>Thông tin cá nhân</Text>
              </View>
              <View style={styles.gender}>
                <Text>Giới tính</Text>
                <RadioForm
                  style={styles.btnGender}
                  radio_props={radio_props}
                  initial={-1}
                  onPress={(value) => { this.state.gender }}
                  buttonSize={10}
                  labelStyle={{ marginRight: 30 }}
                />
              </View>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Họ và tên"
                placeholderTextColor="#808080"
                autoCapitalize="none"
                onChangeText={fullname => this.setState({ fullname })}
                value={this.state.fullname}
              />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Số di động"
                placeholderTextColor="#808080"
                keyboardType="number-pad"
                autoCapitalize="none"
                onChangeText={phonenumber => this.setState({ phonenumber })}
                value={this.state.phonenumber}
              />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Ngày sinh"
                placeholderTextColor="#808080"
                autoCapitalize="none"
                onChangeText={birthday => this.setState({ birthday })}
                value={this.state.birthday}
              />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
              <TouchableOpacity
                style={styles.submitButton}
                onPress={this.gotoSignIn}>
                <Text style={styles.submitButtonText}> Đăng ký </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
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
    };
    this.setState(newState);
  };
  gotoSignIn = () => {
    this.props.navigation.navigate('SignIn');
  };
}

