import React, {Component} from 'react';
import { Text, StyleSheet, StatusBar, View, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';

import FadeInView from './FadeIn'

class testFiduc extends Component {
  state = {text: 'Continuar'}
  renderSpinner = () => {
    this.setState({
      text: ''
    }, () => setTimeout(() => this.setState({text: 'Continuar'}), 3000))
    this.props.navigation.navigate('testFiducTwo')
  }
  render() {
    return (
      <View style={styles.container}>
        <Transition shared="fiduc">
          <TouchableOpacity style={styles.Button} onPress={() => this.renderSpinner()}>
            <Text style={styles.Test}>{this.state.text}</Text>
          </TouchableOpacity>
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
    width: 200,
    height: 50,
    borderRadius: 40,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Test: {
    color: '#fff',
    fontSize: 20,
  }
});