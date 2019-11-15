import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import axios from 'react-native-axios';
import { parseString } from 'react-native-xml2js';

import Icon from 'react-native-vector-icons/FontAwesome';
class FlatListItem extends Component {
    render() {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Icon name='bookmark' size={40} color={'gray'} style={{ marginTop: 0 }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.title}>{this.props.item.MaHoSo}</Text>
                            <Text style={styles.content}>{this.props.item.TenHoSo}</Text>
                            <View style={styles.row}>
                                <Icon name='user' size={20} color={'gray'} style={{ marginTop: 8, opacity: 0.2,paddingLeft: 10 }} />
                                <Text style={styles.infor}>{this.props.item.ChuHoSo}</Text>
                                <Icon name='calendar' size={20} color={'gray'} style={{ marginTop: 8, opacity: 0.2, paddingLeft: 20 }} />
                                <Text style={styles.infor}>{this.props.item.NgayTiepNhan}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: 'gray' }}>
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 150,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    title: {
        paddingLeft: 10,
        paddingBottom: 15,
        fontWeight: 'bold',
        fontSize: 22,
    },
    content: {
        fontSize: 14,
        paddingLeft: 10,
    },
    infor: {
        fontSize: 14,
        padding: 10,
        color: 'gray'
    }
});

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const data = this.props.data
        return (
            <View style={{ flex: 1, marginLeft: 12, marginRight: 12, marginTop: 20 }}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item.index}
                    renderItem={({ item, index }) => {
                        // console.log(`Item = ${JSON.stringify(item)}, index = ${index}` + '\n');
                        return (
                            <FlatListItem
                                item={item}
                                index={index}>
                            </FlatListItem>
                        );
                    }}
                >
                </FlatList>
            </View>
        );
    }
}