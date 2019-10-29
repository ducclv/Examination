import { Header, ButtonGroup } from 'react-native-elements';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, StatusBar, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import BasicFlatList from './BasicFlatList';
export default class Paht extends Component {
    constructor() {
        super();
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this);
    }
    updateIndex = (selectedIndex) => {
        this.setState({ selectedIndex });
    }
    handleView = (selectedIndex) => {
        if (selectedIndex == 0) {
            <BasicFlatList />
        }

    }
    render() {
        const buttons = ['Mới nhất', 'Phổ biến', 'Đang xử lý', 'Đã xử lý'];
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
                                <Icon name="bars" type="Ionicons" size={26} color="black" />
                            </TouchableOpacity>
                        }
                        centerComponent={{ text: 'Phản ánh hiện trường', style: { fontWeight: 'bold', fontSize: 18 } }}
                        rightComponent={
                            <TouchableOpacity
                                onPress={() => { }}>
                                <Icon name="map" type="AntDesign" size={26} color="black" />
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
                    <BasicFlatList />
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