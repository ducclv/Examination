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
                                    onPress={() => this.showAlert()}
                                    style={styles.icon}>
                                    <Text style={styles.txt}>A</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>

                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icons name="home" size={26} style={{ color: 'gray' }} />
                                {this.gotoScreen('HomeScreen', 'Trang chủ')}
                            </View>
                        </View>
                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icons name="user-friends" size={26} style={{ color: 'gray' }} />
                                {this.gotoScreen('StudentsScreen', 'Quản lý sinh viên')}
                            </View>
                        </View>
                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icons name="mail-bulk" size={26} style={{ color: 'gray' }} />
                                {this.gotoScreen('SubjectsScreen', 'Quản lý môn thi')}
                            </View>
                        </View>
                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icons name="umbrella-beach" size={25} style={{ color: 'gray' }} />
                                {this.gotoScreen('Travel', '')}
                            </View>
                        </View>
                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icon name="warning" size={26} style={{ color: 'gray' }} />
                                {this.gotoScreen('Ttcb', '')}
                            </View>
                        </View>
                        <View style={styles.home}>
                            <View style={styles.row}>
                                <Icons name="hospital-alt" size={24} style={{ color: 'gray' }} />
                                {this.gotoScreen('Yte', '')}
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
        // this.props.navigation.closeDrawer();
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
  
}
