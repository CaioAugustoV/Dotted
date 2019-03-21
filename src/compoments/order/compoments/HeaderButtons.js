import React, {Component} from 'react';
import { Image, StyleSheet, Dimensions, View, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';


const width = Dimensions.get('window').width;
class HeaderButtons extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Transition shared="logo">
            <Image
              style={styles.androidLogo}
              source={require('../../../static/images/android.png')}
            />
          </Transition>
      </View>
    );
  }
}

export default withNavigation(HeaderButtons)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width,
    padding: 10,
    paddingTop: 30,
  },
  androidLogo: {
    width: 60,
    height: 60,
  },
});