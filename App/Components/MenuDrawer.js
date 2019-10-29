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
                                    style={styles.icon}>
                                    <Text style={styles.txt}>A</Text>
                                </TouchableOpacity>
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
                                {this.gotoScreen('Dulich', 'Du lịch')}
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
            'Bạn có muốn đăng xuất?',
            [
                { text: 'Đăng xuất', onPress: () => { this.logout() } },
                {
                    text: 'Để sau', onPress: () => {
                        this.props.navigation.closeDrawer();
                    }
                },
            ],
            { cancelable: false },
        );
    }
    logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}
