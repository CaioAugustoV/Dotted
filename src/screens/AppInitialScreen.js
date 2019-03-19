import React from 'react';
import { View, StatusBar, Text } from 'react-native';

export default class AppInitialPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <Text>TESTE</Text>
      </View>
    );
  }
}
