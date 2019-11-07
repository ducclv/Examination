import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    ScrollView,
    ImageBackground,
} from 'react-native';
import styles from './Styles/MenuDrawerStyles';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from 'react-native-modal';
export default class MenuDrawer extends Component {

    render() {
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <ImageBackground
                            source={require('../Images/bgw.png')}
                            style={styles.bgw}>
                            <View style={styles.infor}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.closeDrawer()}
                                    onPress={() => this.toggleModal()}
                                    style={styles.icon}>
                                    <Text style={styles.txt}>Đ</Text>
                                </TouchableOpacity>

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
                            </View>
                        </ImageBackground>

                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icons name="home" size={26} style={{ color: 'gray' }} />
                                {this.gotoScreen('Home', 'Trang chủ')}
                            </View>
                        </View>
                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icons name="user-friends" size={26} style={{ color: 'gray' }} />
                                {this.gotoScreen('Dvhcc', 'Dịch vụ hành chính công')}
                            </View>
                        </View>
                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icons name="mail-bulk" size={26} style={{ color: 'gray' }} />
                                {this.gotoScreen('Paht', 'Phản ánh hiện trường')}
                            </View>
                        </View>
                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icons name="umbrella-beach" size={25} style={{ color: 'gray' }} />
                                {this.gotoScreen('Travel', 'Du lịch')}
                            </View>
                        </View>
                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icon name="warning" size={26} style={{ color: 'gray' }} />
                                {this.gotoScreen('Ttcb', 'Thông tin cảnh báo')}
                            </View>
                        </View>
                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icons name="hospital-alt" size={24} style={{ color: 'gray' }} />
                                {this.gotoScreen('Yte', 'Y tế')}
                            </View>
                        </View>
                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icons name="sign-out-alt" size={26} style={{ color: 'gray' }} />
                                <TouchableOpacity
                                    onPress={() => this.showAlert()} >
                                    <Text style={styles.title}>Đăng xuất</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
    gotoScreen(nav, title) {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate(nav) }}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        )
    }
    showAlert() {
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
    }
    logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
    state = {
        isModalVisible: false
    }
    toggleModal = () => {
        this.props.navigation.closeDrawer();
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    icon = () => {
        let a = this.props.navigation.getParam('UserName')
        console.log(a.length)
        // for (let i = 0; i < a.length; a++) {

        // }
    }
}
