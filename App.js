import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import axios from 'react-native-axios';
import { parseString } from 'react-native-xml2js';
const userInfo = { username: 'test1234', password: '1' };
export default class App extends Component {
  state = {
    CMND: ''
  }
  componentDidMount(){
    this.test();
  }
  render() {
    return (
      <>
        <TouchableOpacity
          style={{ backgroundColor: 'red', alignItems: 'center', flex: 1, justifyContent: 'center' }}
          onPress={() => console.log(this.state.CMND)}
        >
          <Text>Test API</Text>
        </TouchableOpacity>
      </>
    );
  }


  test = async () => {

    const xmlReqBody = `<soap:Envelope 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Body> <Login 
    xmlns="http://schemas.microsoft.com/sharepoint/soap/"> <loginName>`
      + userInfo.username //username
      +
      `</loginName> <pwd>`
      + userInfo.password +//password
      `</pwd> </Login> </soap:Body> </soap:Envelope>`

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
          var t2 = t1[0].LoginResponse[0].LoginResult[0]
          xml = t2
        });
        return xml;
      })
      .then((data) => {
        var data1 = JSON.parse(data)
        return data1

      })

    // console.log(a.Data.UserInfo.CMND);
    if(a.Status =="OK") console.log("succes")
    else console.log("fail")
    this.state.CMND = a.Data.UserInfo.CMND;
  }
}

