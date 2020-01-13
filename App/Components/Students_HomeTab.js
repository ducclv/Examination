import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/Students_MainStyles';
import Modal from 'react-native-modal';

export default class Students_HomeTab extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      detail: [],
      visibleModal: false
    }
  }
  renderModalContent = () => {
    const { detail, visibleModal } = this.state
    if (visibleModal) {
      return (
        <View style={styles.content2}>
          <ScrollView style={{ padding: 20 }}>

          </ScrollView>
          <TouchableOpacity onPress={() => { this.setState({ visibleModal: false }) }}>
            <Text style={{ fontSize: 14, color: '#2089dc', fontWeight: '600', padding: 5, alignSelf: 'flex-end' }}>ĐÓNG</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { this.renderModalContent() }}>

      </TouchableOpacity>
    );
  }
  renderBody() {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem()}
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

