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

    static navigationOptions = {
        title: "Trang chủ",
    }
    state = {
        isModalVisible: false,
        LoginName: this.props.navigation.getParam('LoginName'),
        UserName: this.props.navigation.getParam('UserName'),
        CMND: this.props.navigation.getParam('CMND'),
        PhoneNumber: this.props.navigation.getParam('PhoneNumber'),
        Email: this.props.navigation.getParam('Email'),
        DiaChi: this.props.navigation.getParam('DiaChi'),
    };
    render() {
        return (
            <>
                <StatusBar barStyle="default" backgroundColor="transparent" translucent={true} />
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <ImageBackground style={styles.bglogo}
                            source={require('../Images/bg.jpg')}>
                            <View>
                                <View style={styles.head}>
                                    <TouchableOpacity
                                        onPress={() => this.toggleModal()}
                                        style={styles.icon}>
                                        <Text style={styles.txt}>Đ</Text>
                                    </TouchableOpacity>
                                    {/* modal hiện thông tin người dùng */}
                                    <Modal
                                        isVisible={this.state.isModalVisible}
                                        animationIn='slideInDown'
                                        animationOut='slideOutUp'
                                    >
                                        <View style={styles.modal}>
                                            <Text style={styles.titleModal}>Thông tin tài khoản</Text>
                                            <Text style={styles.txtModal}>ID Đăng nhập</Text>
                                            <Text style={styles.txtInforModal}>{this.props.navigation.getParam('LoginName')}</Text>
                                            <Text style={styles.txtModal}>Họ tên</Text>
                                            <Text style={styles.txtInforModal}>{this.props.navigation.getParam('UserName')}</Text>
                                            <Text style={styles.txtModal}>Số CMND/CCCD</Text>
                                            <Text style={styles.txtInforModal}>{this.props.navigation.getParam('CMND')}</Text>
                                            <Text style={styles.txtModal}>Số điện thoại</Text>
                                            <Text style={styles.txtInforModal}>{this.props.navigation.getParam('PhoneNumber')}</Text>
                                            <Text style={styles.txtModal}>Email</Text>
                                            <Text style={styles.txtInforModal}>{this.props.navigation.getParam('Email')}</Text>
                                            <Text style={styles.txtModal}>Địa chỉ</Text>
                                            <Text style={styles.txtInforModal}>{this.props.navigation.getParam('DiaChi')}</Text>
                                        </View>
                                        <View style={styles.rowModal}>
                                            <TouchableOpacity
                                                onPress={this.toggleModal}
                                                style={styles.closeModal}
                                            >
                                                <Text style={styles.txtCloseModal}>Đóng</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => this.showAlert()}
                                                style={styles.SignOutModal}
                                            >
                                                <Text style={styles.txtSingOutModal}>Đăng xuất</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Modal>
                                    <Image style={styles.logo}
                                        source={require('../Images/TD-logo.png')} />
                                    <Text style={styles.title}>
                                        DỊCH VỤ CÔNG TÂN DÂN
                            </Text>
                                </View>

                                {/* option hệ thống */}
                                <View style={styles.body}>
                                    <View style={styles.row}>
                                        <TouchableOpacity
                                            style={styles.iconButtom}
                                            onPress={() => { this.props.navigation.navigate('DVHCC_Main') }}
                                        >
                                            <Icon name="bank" size={20} color={'blue'} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.iconButtom}
                                            onPress={() => { this.props.navigation.navigate('Paht') }}
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
                                        <Text style={styles.titleButtom}> Dịch vụ hành chính công</Text>
                                        <Text style={styles.titleButtom}> Phản ánh hiện trường</Text>
                                        <Text style={styles.titleButtom}> Du lịch</Text>
                                        <Text style={styles.titleButtom}> Thông tin cảnh báo</Text>
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
                                        <Text style={styles.titleButtom}> Thống kê</Text>
                                        <Text style={styles.titleButtom}> Y tế</Text>
                                        <Text style={styles.titleButtom}> Giá cả thị trường</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                </SafeAreaView>
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

