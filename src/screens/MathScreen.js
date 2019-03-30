import React from 'react';
import { View, StatusBar } from 'react-native';
import Math from '../compoments/math/math';

export default class AppInitialPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Math />
      </View>
    );
  }
}