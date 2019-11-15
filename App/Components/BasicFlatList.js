import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image } from 'react-native';

class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
                }}>
                   
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        height: 100
                    }}>
                        <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                        <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                    </View>
                </View>
                <View style={{
                    height: 10,
                    backgroundColor: 'white'
                }}>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});

export default class BasicFlatList extends Component {
componentDidMount(){
    console.log(this.props.code)
}
    render() {
        const data = this.props.data
        return (
            <View style={{ flex: 1,marginLeft: 12, marginRight:12,marginTop: 20 }}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => {
                        // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`+'\n');
                        return (
                            <FlatListItem
                                item={item}
                                index={index}>
                            </FlatListItem>);
                    }}
                >
                </FlatList>
            </View>
        );
    }
}