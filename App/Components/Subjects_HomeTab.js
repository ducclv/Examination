import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/Subjects_HomeTabStyles';
import Modal from 'react-native-modal';
import dataStudents from '../Data/ListStudents'
import * as Animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/MaterialIcons'
export default class Subjects_HomeTab extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      detail: [],
      visibleModal: false
    }
  }

  componentDidMount() {
    this.setState({ data: dataStudents })
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
  renderBody() {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
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
    )
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderBody()}
      </View>
    );
  }
}

