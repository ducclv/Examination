import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StatusBar,
    ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/Students_AddStyles';
import axios from 'react-native-axios'
import { URL_ADD_STUDENTS } from '../Config/api'

export default class Students_Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            studentID: '',
            classStudent: '',
            icEye: 'visibility-off',
            showPassword: true,

        };
        this.AddStudent = this.AddStudent.bind(this)
    }

    renderTabar() {
        return (
            <View style={styles.linearGradient1}>
                <Icons onPress={() => this.props.navigation.navigate('StudentsScreen')}
                    name='arrow-left'
                    color='white'
                    size={24}
                    style={styles.iconLeft} />
                <Text style={styles.title}>Thêm sinh viên</Text>
                <Icons onPress={() => this.props.navigation.navigate('HomeScreen')}
                    name='home'
                    color='white'
                    size={25}
                    style={styles.iconRight} />
            </View>
        );
    }

    AddStudent = async () => {
        const formData = new FormData()
        formData.append('studentName', this.state.studentName)
        formData.append('studentID', this.state.studentID)
        formData.append('classStudent', this.state.classStudent)
        await axios({
            method: 'POST',
            url: URL_ADD_STUDENTS,
            data: formData,
            timeout: 15000,
        })
            .then(function (response) {
                ToastAndroid.show('Đã thêm sinh viên', ToastAndroid.LONG)
                
                return response.data
            })
            .catch(function (error) {
                console.log(error);
                return { data: [] }
            })
    }
    render() {
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                    {this.renderTabar()}
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.container}>
                            <View style={styles.title}>
                                <Text style={styles.title}>Thông tin tài khoản</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Họ và tên"
                                placeholderTextColor="#808080"
                                autoCapitalize="none"
                                onChangeText={studentName => this.setState({ studentName })}
                                value={this.state.studentName}
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
                                    value={this.state.studentID}
                                />
                                <Icon style={styles.icon}
                                    name={this.state.icEye}
                                    size={23}
                                    onPress={this.changePwdType}
                                />
                            </View>
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Lớp khóa học"
                                placeholderTextColor="#808080"
                                autoCapitalize="none"
                                onChangeText={classStudent => this.setState({ classStudent })}
                                value={this.state.classStudent}
                            />
                            <TouchableOpacity
                                style={styles.submitButton}
                                onPress={() => this.AddStudent()}
                            >
                                <Text style={styles.submitButtonText}> Thêm </Text>
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
                studentID: this.state.studentID
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                showPassword: true,
                studentID: this.state.studentID
            }
        }
        // set new state value
        this.setState(newState)
    };
    handlePassword = (studentID) => {
        let newState = {
            icEye: this.state.icEye,
            showPassword: this.state.showPassword,
            studentID: studentID
        };
        this.setState(newState);
    };
}

