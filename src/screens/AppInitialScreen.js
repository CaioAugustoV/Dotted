import React from 'react';
import { View, Text } from 'react-native';
import FaseOne from '../compoments/FaseOne';

export default class AppInitialPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <FaseOne /> */}
        <Text onPress={() => this.props.navigation.navigate('FaseOne')}>CLIQUE AQUI PARA COMEÇAR</Text>
      </View>
    );
  }
}