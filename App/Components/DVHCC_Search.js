import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    TouchableOpacity,
    TouchableHighlight,
    StatusBar,
    SafeAreaView,
    View,
    Text,
    TextInput,
} from 'react-native';
import styles from './Styles/DVHCC_SearchStyles';
import axios from 'react-native-axios';
import { parseString } from 'react-native-xml2js';
import DVHCC_FlatList from './DVHCC_FlatList';

export default class DVHCC_Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            data: [],
        }
    }
    componentDidMount() {
        this.checkData()
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                <Header
                    headerTitle="Header"
                    leftComponent={
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('DVHCC_Main') }}>
                            <Icon name="arrow-back" type="Ionicons" size={25} color="white" style={{ marginLeft: 5 }} />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'Tìm kiếm hồ sơ', style: { fontWeight: 'bold', fontSize: 18, color: 'white' } }}
                    containerStyle={styles.containerstyle}
                />
                <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Nhập mã hồ sơ"
                        placeholderTextColor="#808080"
                        autoCapitalize="none"
                        onChangeText={(code) => { this.setState({ code }) }}
                        value={this.state.code}
                    />
                <View style={styles.row}></View>
                <TouchableOpacity
                    style={styles.search}
                    onPress={() => this.checkData()}
                >
                    <Text>Search</Text>
                </TouchableOpacity>
                <DVHCC_FlatList data={this.state.data} />
            </SafeAreaView>
        );
    }
    checkData = async () => {// check data with API

        const xmlReqBody = `<soap:Envelope 
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
            xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
            xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <ServiceLayThongTinHoSo 
          xmlns="http://schemas.microsoft.com/sharepoint/soap/">
            <tukhoa>`
            +
            this.state.code
            + `</tukhoa>
          </ServiceLayThongTinHoSo>
        </soap:Body>
      </soap:Envelope>`
        var a = await axios('https://dvchopquy.tandan.com.vn/_layouts/tandan/dvc/DVCServiceMobile.asmx', {
            method: 'POST',
            headers: {
                "Content-Type": 'text/xml; charset="utf-8"',
                "Accept": 'application/json',
            },
            data: xmlReqBody,
            dataType: "xml",
        })
            .then(function (response) {
                var xml = response.data
                parseString(xml, function (err, result) {
                    var t = result['soap:Envelope']
                    var t1 = t['soap:Body']
                    var t2 = t1[0].ServiceLayThongTinHoSoResponse[0].ServiceLayThongTinHoSoResult[0]
                    xml = t2
                });
                return xml;
            })
            .then((data) => {
                var data1 = JSON.parse(data)
                return data1
            })
        this.state.data = a.DSHoSo;
        // console.log(this.state.data);
        return a.DSHoSo;
    }
}
