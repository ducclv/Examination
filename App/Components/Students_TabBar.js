import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles/Students_TabBarStyles'

export default class Students_TabBar extends React.Component {
  icons = [];
  constructor(props) {
    super(props);
    this.icons = [];
  }

  iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  textStyle = (active,i) => {
    return {
      fontSize: 10,
      color: active === i ? '#FD3434' : 'rgb(204,204,204)'
    }
  }

  render() {
    const width = Dimensions.get('screen').width
    const height = Dimensions.get('screen').height
    var logo = ['home', 'search']
    return <View style={[styles.tabs, this.props.style, ]}>
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.1)']}
                style={{
                    left: 0,
                    right: 0,
                    height: 5,
                    top: -5,
                    position: 'absolute'
                }}
              />
      {this.props.tabs.map((tab, i) => {
        icon = logo[i]
        var padding = -35;
        if (i === 1 ){padding = 35}
        return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={{paddingStart: padding, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon
            name={icon}
            size={28}
            color={this.props.activeTab === i ? '#FD3434' : 'rgb(204,204,204)'}
            ref={(icon) => { this.icons[i] = icon; }}
          />
          <Text style={this.textStyle(this.props.activeTab,i)}>{tab}</Text>
        </TouchableOpacity>;
      })}
      <View style={{position: 'absolute', top: -25, left: (width-70)/2, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', width: 70, height: 70, borderRadius: 70, elevation: 3}}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}} style={{ backgroundColor: '#FD3434', borderRadius: 55, width: 55, height: 55, borderWidth: 2, borderColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
          <Icon color='#fff' type='font-awesome' size={20} containerStyle={{marginLeft: 3, marginBottom: 3}} name='edit'/>
        </TouchableOpacity>
        </View>
    </View>;
  }
}

