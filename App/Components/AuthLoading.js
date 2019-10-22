import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    StatusBar,
    AsyncStorage,
} from 'react-native';
import styles from './Styles/AuthLoadingStyle';
export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this.loadData();
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
    loadData = async () => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        this.props.navigation.navigate(isLoggedIn !== '1' ? 'Auth' : 'App');
    };
}