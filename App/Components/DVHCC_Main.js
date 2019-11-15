import { Header } from 'react-native-elements';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import styles from './Styles/DVHCC_MainStyles';
export default class DVHCC_Main extends Component {
    render() {
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                    <Header
                        headerTitle="Header"
                        leftComponent={
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.openDrawer() }}>
                                <Icon name="bars" type="Ionicons" size={25} color="white" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        }
                        centerComponent={{ text: 'Dịch vụ hành chính công', style: { fontWeight: 'bold', fontSize: 18, color: 'white' } }}
                        rightComponent={
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('Home') }}>
                                <Icon name="home" type="Ionicons" size={25} color="white" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        }
                        containerStyle={styles.containerstyle}
                    />

                    <Image style={styles.img} source={require('../Images/dvhcc.jpg')} />
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.tracuu}
                            onPress={() => {this.props.navigation.navigate('DVHCC_Search') }}
                        >
                            <Icon name='search' size={28} color={'gray'} />
                            <Text style={styles.txt}>Tra cứu hồ sơ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.tracuu}
                            onPress={() => { }}
                        >
                            <Icon name='tasks' size={28} color={'gray'} />
                            <Text style={styles.txt}>Hồ sơ theo dõi</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.kiennghi}
                            onPress={() => { }}
                        >
                            <Icon name='book' size={28} color={'gray'} />
                            <Text style={styles.txt}>Tra cứu thủ tục</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.kiennghi}
                            onPress={() => { }}
                        >
                            <Icon name='user-edit' size={28} color={'gray'} />
                            <Text style={styles.txt}>Phản ánh kiến nghị </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.kiennghi}
                            onPress={() => { }}
                        >
                            <Icon name='briefcase' size={28} color={'gray'} />
                            <Text style={styles.txt}>Quản lý hồ sơ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.kiennghi}
                            onPress={() => { }}
                        >
                            <Icon name='user-check' size={28} color={'gray'} />
                            <Text style={styles.txt}>Đánh giá hài lòng</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </>
        );
    }
}
