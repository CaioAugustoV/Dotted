import React from 'react';
import { View, StatusBar } from 'react-native';
import ShareLogoHeader from '../compoments/order/compoments/HeaderButtons'
export default class AppInitialPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent barStyle="light-content" />
        <ShareLogoHeader />
      </View>
    );
  }
}
