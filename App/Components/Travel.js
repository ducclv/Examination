import { Header } from 'react-native-elements';
import React, { Component } from 'react';
import {
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    View,
    Text,
    ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Entypo';
import styles from './Styles/TravelStyles';

export default class Dulich extends Component {
    render() {
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                    <ImageBackground
                        style={styles.bg}
                        source={require('../Images/beach.jpg')}
                    >
                        <View style={styles.row}>
                            <TouchableOpacity
                                style={styles.drawer}
                                onPress={() => { this.props.navigation.openDrawer() }}
                            >
                                <Icon name='bars' size={24} color={'white'} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.home}
                                onPress={() => { this.props.navigation.navigate('Home') }}
                            >
                                <Icon name='home' size={24} color={'white'} />
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>
                    <View style={styles.travel}>
                        <Text style={styles.title}>DU LỊCH</Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => { }}
                        >
                            <Icon name='hotel' size={26} color={'tomato'}/>
                            <Text style={styles.txt}>Khách sạn</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => { }}
                        >
                            <Icon name='user-alt' size={26} color={'tomato'}/>
                            <Text style={styles.txt}>Hướng dẫn viên</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => { }}
                        >
                            <Icons name='location' size={36} color={'tomato'}/>
                            <Text style={styles.txt}>Địa điểm du lịch</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </>
        );
    }
}
