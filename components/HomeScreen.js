import React, {Component} from 'react';
import {Text, View, Image, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';

export default class HomeScreen extends Component{
    static navigationOptions={
        drawerLabel: 'Home',
    }
    render(){
        return (
            <View style={styles.view}>
                <TouchableHighlight 
                    onPress ={()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    style={styles.touchableHighlight} 
                    underlayColor={'rgba(0,0,0,0.8)'}
                >
                    <Text style={styles.open}> Open</Text>
                </TouchableHighlight>
                <Text style={styles.text}> This is HomeScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    text:{
        fontSize: 26,
        color: 'purple'
    },
    touchableHighlight:{
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 50,
        alignItems:'center',
    },
    open:{
        color:'white',
        fontSize:16,
        fontWeight: 'bold',
    }
});