import { Header } from 'react-native-elements';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, StatusBar, SafeAreaView, View, Text, StyleSheet } from 'react-native';
export default class Ttcb extends Component {
    render() {
        return (
            <>
                <SafeAreaView>
                    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                    <Header
                        headerTitle="Header"
                        leftComponent={
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.openDrawer() }}>
                                <Icon name="bars" type="Ionicons" size={27} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        }
                        centerComponent={{ text: 'Thông tin cảnh báo', style: { fontWeight: 'bold', fontSize: 18 } }}
                        containerStyle={{
                            backgroundColor: 'white',
                            justifyContent: 'space-around',
                        }}
                    />
                </SafeAreaView>
            </>
        );
    }
}
