import React from 'react';
import { View, StatusBar } from 'react-native';
import InitialScreen from '../compoments/InitialScreen';

export default class AppInitialPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <InitialScreen />
      </View>
    );
  }
}