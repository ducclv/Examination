import React, { Component } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import styles from './Styles/HomeStyles';
export default class Home extends Component {
    static navigationOptions = {
        // drawerLabel: 'Trang' + 'chủ',
        title: "Trang chủ",
    }
    render() {
        return (
            <SafeAreaView >
                <ScrollView>
                    <ImageBackground style={styles.bglogo}
                        source={require('../Images/bg.jpg')}>
                        <View style={styles.container}>
                            <View style={styles.head}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                                    style={styles.icon}>
                                    <Text style={styles.txt}>A</Text>
                                </TouchableOpacity>
                                <Image style={styles.logo}
                                    source={require('../Images/TD-logo.png')} />
                                <Text style={styles.title}>
                                    DỊCH VỤ CÔNG TÂN DÂN
                            </Text>
                            </View>
                            <View style={styles.body}>
                                <View style={styles.row}>
                                    <TouchableOpacity style={styles.iconButtom}>
                                        <Icon name="bank" size={20} color={'blue'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconButtom}>
                                        <Icons name="mail-bulk" size={22} color={'green'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconButtom}>
                                        <Icons name="umbrella-beach" size={22} color={'green'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconButtom}>
                                        <Icon name="warning" size={24} color={'yellow'} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.titleButtom}> Dịch vụ hành chính công</Text>
                                    <Text style={styles.titleButtom}> Phản ánh hiện trường</Text>
                                    <Text style={styles.titleButtom}> Du lịch</Text>
                                    <Text style={styles.titleButtom}> Thông tin cảnh báo</Text>
                                </View>
                                <View style={styles.row}>
                                    <TouchableOpacity style={styles.iconButtom}>
                                        <Icons name="chart-pie" size={20} color={'red'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconButtom}>
                                        <Icons name="hospital-alt" size={22} color={'green'} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconButtom}>
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

        );
    }
}

