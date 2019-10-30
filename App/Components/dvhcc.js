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
export default class Dvhcc extends Component {

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
                        centerComponent={{ text: 'Dịch vụ hành chính công', style: { fontWeight: 'bold', fontSize: 18,color: 'white' } }}
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
                            onPress={() => { }}
                        >
                            <Icon name='search' size={28} />
                            <Text>Tra cu ho so</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.tracuu}
                            onPress={() => { }}
                        >
                            <Icon name='tasks' size={28} />
                            <Text>Tra cu ho so</Text>
                        </TouchableOpacity>
                    </View>





                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E7DCDC',
        alignItems: 'center',
    },
    img: {
        width: Dimensions.get('window').width,
        height: 200,
    },
    containerstyle: {
        backgroundColor: 'gray',
        justifyContent: 'space-around',
    },
    tracuu: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        marginRight: 10,
        marginLeft: 10,
        marginTop: -30,
    },
    row: {
        flexDirection: 'row',
    }

});