import { firebaseApp } from '../components/FirebaseConfig';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ListView } from 'react-native';
// import ListView from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
export default class RealtimeDB extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
        this.state = {
            dataSource: new ListView.dataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
            // dastaSource: new ListView.dastaSource({rowHasChanged(r1,r2){return r1!==r2}})
        }
    }
    componentDidMount(){
        this.listenForItems(this.itemRef);
    }
    sub(email) {
        var str = '';
        for (var i = 0; i < email.length; i++) {
            if (email[i] !== '@') {
                str += email[i];
            } else {
                break;
            }
        }
        return str;
    }

    writeUserData(name, email, password) {
        console.ignoredYellowBox = ['Setting a timer'];
        firebaseApp
            .database()
            .ref('users/' + this.sub(email))
            .set({
                username: name,
                email: email,
                password: password,
            });
    }
    listenForItems(email) {
        var items = [];
        this.itemRef.ref('User').child(this.sub(email)).on('child_added',(dataSnapshot)=>{
            items.push({
                name: dataSnapshot.val(),
                key: dataSnapshot.key,
            });
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items)
            });
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bottomDB}>
                    {/* <TouchableOpacity
                        style={styles.bottomDB}
                        onPress={() => {
                            // Alert.alert(this.sub('leducuet@gmail.com'));
                            alert(this.readUserDate('leducuet@gmail.com'));
                        }}>
                        <Text>buttomDB</Text>
                    </TouchableOpacity> */}
                    <Text>Hello</Text>
                    <ListView>
                        dataSource={this.state.dataSource}
                        renderRow = {(rowData)}=>{
                            <View>
                                <Text>
                                    {rowData.name}
                                </Text>
                            </View>
                        }
                    </ListView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttomDB: {
        // flex: 1,
        backgroundColor: 'yellow',
        width: 200,
        height: 200,
    },
});
