import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollableView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/Subjects_MainStyles';
import Subjects_HomeTab from './Subjects_HomeTab';
import Subjects_SearchTab from './Subjects_SearchTab';
import Subjects_TabBar from './Subjects_TabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class Subjects_Main extends Component {
  renderTabar() {
    return (
      <View style={styles.linearGradient1}>
        <Icon onPress={() => this.props.navigation.openDrawer()}
          name='navicon'
          color='white'
          size={24}
          style={styles.iconLeft} />
        <Text style={styles.title}>Quản lý ca thi</Text>
        <Icon onPress={() => this.props.navigation.navigate('HomeScreen')}
          name='home'
          color='white'
          size={25}
          style={styles.iconRight} />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderTabar()}
        <ScrollableTabView
          tabBarPosition='bottom'
          initialPage={0}
          renderTabBar={() => <Subjects_TabBar {...this.props} />}
        >
          <View tabLabel="Trang chủ" style={styles.tabView}>
            <Subjects_HomeTab {...this.props} />
          </View>
          <View tabLabel="Tìm kiếm" style={styles.tabView}>
            <Subjects_SearchTab {...this.props} />
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

