import React, { Component } from 'react'
import { ScrollView, Image, View, TextInput, CheckBox, ActivityIndicator, Dimensions, ToastAndroid, FlatList, TouchableOpacity, StatusBar, Keyboard } from 'react-native'
import { ButtonGroup, Icon, Button, Text } from 'react-native-elements'
import Modal from 'react-native-modal';
import dataStudents from '../Data/ListStudents'
import * as Animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/Subjects_SearchTabStyles'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default class Subjects_SearchTab extends Component {

  constructor() {
    super();
    this.state = {
      visibleModal: false,
      visibleModalLoading: false,
      searchKey: '',
      data: [],
      detail: [],
    }
  }
  componentDidMount(){
    this.setState({searchKey: ''})
  }
  componentWillMount(){
    this.setState({searchKey: ''})
  }

  renderItem = ({ item, index }) => {
    return (
      <Animatable.View delay={index * 400} animation='zoomInLeft' style={styles.view}>
        <TouchableOpacity
          onPress={() => { this.setState({ detail: item, visibleModal: true }) }}
        >
          <View style={styles.containerFlatList}>
            <Image style={{ width: 100, height: 100 }} source={require('../Images/avatar.jpg')} />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.title}>{item.studentName}</Text>
              <View style={{ flexDirection: 'row', paddingTop: 40, }}>
                <TouchableOpacity
                  onPress={() => ToastAndroid.show('Cập nhật sinh viên', ToastAndroid.LONG)}
                  style={{ flexDirection: 'row' }}
                >
                  <Icons name='system-update' color='black' size={24} />
                  <Text style={styles.label}>Cập nhật</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => ToastAndroid.show('xóa sinh viên', ToastAndroid.LONG)}
                  style={{ flexDirection: 'row', marginLeft: 30 }}
                >
                  <Icons name='delete' color='black' size={24} />
                  <Text style={styles.label}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    );
  }


  searchFunction = async (searchKey) => {
    Keyboard.dismiss()
    this.setState({ data: [] })
    if (searchKey === '') {
      ToastAndroid.show('Vui lòng nhập từ khóa', ToastAndroid.LONG);
    }
    else {
      this.setState({ visibleModalLoading: true })
      var dataSearch = []
      for (let i = 0; i < dataStudents.length; i++) {
        if (searchKey === dataStudents[i].studentID) {
          dataSearch.push(dataStudents[i])
        }
      }

      if (dataSearch.length > 0) {
        setTimeout(() => { this.setState({ visibleModalLoading: false, data: dataSearch }) + ToastAndroid.show(`Đã tìm thấy ${dataSearch.length} sinh viên`, ToastAndroid.LONG); }, 1000)
      }
      else {
        setTimeout(() => { this.setState({ visibleModalLoading: false }) + ToastAndroid.show('Không tìm thấy nội dung phù hợp', ToastAndroid.LONG); }, 1000)
      }
    }
  }

  renderModalContent = () => {
    const { detail, visibleModal } = this.state
    if (visibleModal) {
      return (
        <View style={styles.content2}>
          <ScrollView style={{ padding: 20 }}>
            <Text style={styles.title}>Thông tin sinh viên</Text>
            <Text style={styles.section}>Tên</Text>
            <Text style={styles.label}>{detail.studentName}</Text>
            <Text style={styles.section}>Mã sinh viên</Text>
            <Text style={styles.label}>{detail.studentID}</Text>
            <Text style={styles.section}>Lớp</Text>
            <Text style={styles.label}>{detail.classStudent}</Text>
          </ScrollView>
          <TouchableOpacity onPress={() => { this.setState({ visibleModal: false }) }}>
            <Text style={{ fontSize: 14, color: '#2089dc', fontWeight: '600', padding: 5, alignSelf: 'flex-end' }}>ĐÓNG</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  renderModalContentLoading = () => {
    return (
      <View style={styles.content1}>
        <StatusBar backgroundColor="rgba(0,0,0,0.8)" barStyle='dark-content' translucent={true} />
        <ActivityIndicator size="large" color="black" />
        <Text style={{ textAlign: 'center' }}>Đang tìm kiếm dữ liệu...</Text>
      </View>
    );
  }
  render() {
    const { searchKey } = this.state
    return (
      <ScrollView style={{ flex: 1, padding: 10 }}
      // keyboardDismissMode='on-drag'
      // keyboardShouldPersistTaps='always'
      >
        <View style={{ height: 50, marginTop: 30 }}>
          <TextInput style={{ flex: 1 }}
            placeholder='Nhập nội dung tìm kiếm...'
            onChangeText={(text) => { this.setState({ searchKey: text }) }} 
            value={this.state.searchKey}
            />
        </View>
        <Button
          type='outline'
          buttonStyle={{ height: 50 }}
          containerStyle={{ padding: 10 }}
          onPress={() => this.searchFunction(searchKey)}
          icon={
            <Icon
              name="search"
              size={16}
              color="#2089dc"
            />
          }
          title=" Tìm kiếm"
        />
        <Modal
          style={{ margin: 0, flex: 1 }}
          backdropColor="rgba(0,0,0,0.8)"
          transparent={true}
          //backdropOpacity={0.8}
          animationIn="slideInLeft"
          animationOut="slideOutRight"
          hideModalContentWhileAnimating={true}
          backdropTransitionOutTiming={0}
          isVisible={this.state.visibleModalLoading}
          onBackButtonPress={() => this.setState({ visibleModal: false })}
          deviceHeight={height + 100}
        >
          {this.renderModalContentLoading()}
        </Modal>
        <View style={{ flex: 1, padding: 5 }}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <Modal
            onBackdropPress={() => this.setState({ visibleModal: false })}
            backdropTransitionOutTiming={0}
            isVisible={this.state.visibleModal}
            style={{ margin: 0 }}
            hideModalContentWhileAnimating={true}>
            {this.renderModalContent()}
          </Modal>
        </View>
      </ScrollView>
    )
  }
}
