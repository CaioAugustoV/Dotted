import React from 'react';
import { View, StatusBar } from 'react-native';
import FaseOne from '../compoments/order/step/FaseOne'
export default class AppInitialPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent barStyle="light-content" />
        <FaseOne />
      </View>
    );
  }
}
