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
import * as Animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/MaterialIcons'
import dataStudents from '../Data/ListStudents'
import dataCourses from '../Data/ListCourses'
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
    this.setState({ data: dataCourses })
  }



  renderItem = ({ item, index }) => {
    return (
      <Animatable.View delay={index * 400} animation='zoomInLeft' style={styles.view}>
        <TouchableOpacity
          onPress={() => { }}
        >
          <View style={styles.containerFlatList}>
            <Text style={styles.title}>{item.courseName}</Text>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.label}>Ca thi số: {item.courseID}</Text>
              <Text style={styles.label}>Mã ca thi: {item.courseChar}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacity
                  onPress={() => ToastAndroid.show('Cập nhật môn thi', ToastAndroid.LONG)}
                  style={{ flexDirection: 'row' }}
                >
                  <Icons name='system-update' color='black' size={24} />
                  <Text style={styles.label}>Cập nhật</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => ToastAndroid.show('xóa môn thi', ToastAndroid.LONG)}
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

