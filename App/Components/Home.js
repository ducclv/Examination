import React, { Component } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
    StatusBar,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import styles from './Styles/HomeStyles';
import Modal from 'react-native-modal';

export default class Home extends Component {
    render() {
        return (
            <>
                <View style={styles.container}>
                    <StatusBar barStyle="default"
                        backgroundColor="transparent"
                        translucent={true} />
                    <ImageBackground style={styles.bglogo}
                        source={require('../Images/bg.jpg')}>
                        <View>
                            <View style={styles.head}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.openDrawer()}
                                    style={styles.icon}>
                                    <Text style={styles.txt}>A</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.body}>
                                <View style={styles.row}>
                                    <TouchableOpacity
                                        style={styles.iconButtom}
                                        onPress={() => { this.props.navigation.navigate('StudentsScreen') }}
                                    >
                                        <Icon name="bank" size={20} color={'blue'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.iconButtom}
                                        onPress={() => { this.props.navigation.navigate('SubjectsScreen') }}
                                    >
                                        <Icons name="mail-bulk" size={22} color={'green'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.iconButtom}
                                        onPress={() => { this.props.navigation.navigate('Travel') }}
                                    >
                                        <Icons name="umbrella-beach" size={22} color={'green'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.iconButtom}
                                        onPress={() => { this.props.navigation.navigate('Ttcb') }}
                                    >
                                        <Icon name="warning" size={24} color={'red'} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.titleButtom}> Quản lý sinh viên</Text>
                                    <Text style={styles.titleButtom}> Quản lý ca thi</Text>
                                    <Text style={styles.titleButtom}> </Text>
                                    <Text style={styles.titleButtom}> </Text>
                                </View>
                                <View style={styles.row}>
                                    <TouchableOpacity
                                        style={styles.iconButtom}
                                        onPress={() => { this.props.navigation.navigate('Thongke') }}
                                    >
                                        <Icons name="chart-pie" size={20} color={'red'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.iconButtom}
                                        onPress={() => { this.props.navigation.navigate('Yte') }}
                                    >
                                        <Icons name="hospital-alt" size={22} color={'green'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.iconButtom}
                                        onPress={() => { this.props.navigation.navigate('Gctt') }}
                                    >
                                        <Icons name="chart-line" size={22} color={'green'} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.titleButtom}> </Text>
                                    <Text style={styles.titleButtom}> </Text>
                                    <Text style={styles.titleButtom}> </Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </>
        );
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    showAlert = () => {
        Alert.alert(
            'Đăng xuất',
            'Bạn có chắc chắn muốn đăng xuất không? Toàn bộ dữ liệu các nhân trong ứng dụng sẽ bị xóa',
            [
                {
                    text: 'Đóng', onPress: () => {
                        this.props.navigation.closeDrawer();
                    }
                },
                { text: 'Đăng xuất', onPress: () => { this.logout() } },
            ],
            { cancelable: false },
        );
    };
    logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
    infor = () => {
        LoginName = this.props.navigation.getParam('LoginName'),
            UserName = this.props.navigation.getParam('UserName'),
            CMND = this.props.navigation.getParam('CMND'),
            PhoneNumber = this.props.navigation.getParam('PhoneNumber'),
            Email = this.props.navigation.getParam('Email'),
            DiaChi = this.props.navigation.getParam('DiaChi')
    }
}

