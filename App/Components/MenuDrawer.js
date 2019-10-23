import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from 'react-native';
import styles from './Styles/MenuDrawerStyles';
import Icons from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

export default class MenuDrawer extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.infor}>
                    <Icons name="user-circle" size={60} style={{ color: 'blue' }} />
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Admin</Text>
                </View>
                <View style={styles.home}>
                    <View style={styles.row}>
                        <Icons name="home" size={26} style={{ color: 'gray' }} />
                        {this.gotoScreen('Home', 'Trang chủ')}
                    </View>
                </View>
                <View style={styles.setting}>
                    <View style={styles.row}>
                        <Icons name="key" size={26} style={{ color: 'gray' }} />
                        {this.gotoScreen('Setting', 'Test')}
                    </View>
                </View>
                <View style={styles.setting}>
                    <View style={styles.row}>
                        <Icons name="sign-out-alt" size={26} style={{ color: 'gray' }} />
                        <TouchableOpacity
                            onPress={() => this.showAlert()} >
                            <Text style={styles.title}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
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
