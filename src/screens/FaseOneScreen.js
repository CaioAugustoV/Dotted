import React from 'react';
import { View } from 'react-native';
import FaseOne from '../compoments/FaseOne'
export default class AppInitialPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FaseOne />
      </View>
    );
  }
}
