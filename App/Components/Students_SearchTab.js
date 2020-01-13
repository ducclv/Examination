import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/Students_MainStyles';

export default class Students_SearchTab extends Component {
  renderTabar() {
    return (
      <View style={styles.linearGradient1}>
        <Icon onPress={() => this.props.navigation.goBack()}
          name='arrow-left'
          color='white'
          size={24}
          style={styles.iconLeft} />
        <Text style={styles.title}>Quản lý sinh viên</Text>
        <Icon name='home' color='transparent' size={25} style={styles.iconright} />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {/* {this.renderTabar()} */}
      </View>
    );
  }
}

