import { Header, ButtonGroup } from 'react-native-elements';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, StatusBar, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import BasicFlatList from './BasicFlatList';
import List from './DVHCC_FlatList';
import flatListData from '../Data/FlatListData';
import flatListDataTest from '../Data/FlatListDataTest';
export default class Paht extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            data: [],
        }
        // this.state.data = flatListData;
        this.updateIndex = this.updateIndex.bind(this);
    }
    updateIndex = (selectedIndex) => {
        this.setState({ selectedIndex });
        if (selectedIndex == 0) {
            this.state.data = flatListData;
            console.log(typeof this.state.data);
        }
        else if (selectedIndex == 1) {
            this.state.data = flatListDataTest;
        }
        // Xử lý các trường hợp khác
    }
    render() {
        // const buttons = ['Mới nhất', 'Phổ biến', 'Đang xử lý', 'Đã xử lý'];
        const buttons = ['Mới nhất'];
        const { selectedIndex } = this.state;
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                    <Header
                        headerTitle="Header"
                        leftComponent={
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.openDrawer() }}>
                                <Icon name="bars" type="Ionicons" size={24} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        }
                        centerComponent={{ text: 'Phản ánh hiện trường', style: { fontWeight: 'bold', fontSize: 18 } }}
                        rightComponent={
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('Home') }}>
                                <Icon name="home" type="AntDesign" size={24} color="black" />
                            </TouchableOpacity>
                        }
                        containerStyle={{
                            backgroundColor: 'white',
                            justifyContent: 'space-around',
                        }}
                    />
                    <View>
                        <Text style={{ marginLeft: 10, marginTop: 5 }}>Danh sách phản ánh</Text>
                    </View>

                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{ height: 40 }}
                    />
                    <BasicFlatList data={this.state.data} {...this.props}/>
                    {/* <BasicFlatList data={this.state.data} /> */}
                </SafeAreaView>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});