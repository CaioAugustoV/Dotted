import React, {Component} from 'react';
import { Image, StyleSheet, ActivityIndicator, View, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';

import FadeInView from './FadeIn'

class testFiduc extends Component {
  componentDidMount = () => {
    setTimeout(() => this.props.navigation.navigate('testFiduc'), 2000)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Transition shared="fiduc">
          <View style={styles.Button}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </Transition>
      </View>
    );
  }
}

export default withNavigation(testFiduc)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Button: {
    backgroundColor: '#a6842f',
    width: 50,
    height: 50,
    borderRadius: 100,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});