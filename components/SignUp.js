import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

var radio_props = [
  { label: "Nam", value: "nam" },
  { label: "Nữ", value: "nu" },
];


export default class SignUp extends Component {
  static navigationOptions = {
    title: 'Đăng ký tài khoản'
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
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.title}>
              <Text style={styles.title}>Thông tin tài khoản</Text>
            </View>

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="ID đăng nhập"
              placeholderTextColor="black"
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
                placeholderTextColor="black"
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
              placeholderTextColor="black"
              autoCapitalize="none"
              onChangeText={fullname => this.setState({ fullname })}
              value={this.state.fullname}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Số di động"
              placeholderTextColor="black"
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={phonenumber => this.setState({ phonenumber })}
              value={this.state.phonenumber}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Ngày sinh"
              placeholderTextColor="black"
              autoCapitalize="none"
              onChangeText={birthday => this.setState({ birthday })}
              value={this.state.birthday}
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Email"
              placeholderTextColor="black"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TouchableOpacity style={styles.submitButton} onPress={this.login}>
              <Text style={styles.submitButtonText}> Đăng nhập </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
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
    }
    this.setState(newState);
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    margin: 15,
    height: 40,
    width: 310,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
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
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
    marginTop: 20,
  },
  gender: {
    flexDirection: "row",
    marginLeft: 15,
  },
  btnGender: {
    flexDirection: "row",
    paddingLeft: 30,
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 30,
    marginLeft: 130,
    height: 40,
    width: 120,
    borderRadius: 60,
    marginBottom: 60,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold",
  },
});