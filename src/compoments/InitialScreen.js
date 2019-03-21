import React, {Component} from 'react';
import { Image, StyleSheet, StatusBar, View, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

import FadeInView from './FadeIn'

class InitialScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FadeInView style={{width: 200, height: 200 }}>
          <Image
            style={styles.androidLogo}
            source={require('../static/images/android.png')}
          />
        </FadeInView>
        <FadeInView style={{width: 80, height: 80 }}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('FaseOne')}>
            <Image
              style={styles.playButton}
              source={require('../static/images/play-button.png')}
            />
          </TouchableOpacity>
        </FadeInView>
      </View>
    );
  }
}

export default withNavigation(InitialScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  androidLogo: {
    width: 200,
    height: 200,
  },
  playButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
    padding: 20,
  }
});