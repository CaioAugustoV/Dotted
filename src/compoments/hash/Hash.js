import React, {Component} from 'react';
import { Image, Text, StyleSheet, StatusBar, View, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';

class Hash extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      points: 'x',
      textOne: 'x'
    }
  }
  handleHash = ( position, value ) => {
    switch (position) {
      case 'one':
        
      break;
    
      default:
        break;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerBlock}>
          {/* LINE 1 */}
          <TouchableOpacity style={styles.hash} onPress={() => this.handleHash('one', 'a')}>
            <Text>{this.state.textOne}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hashCenter} onPress={() => this.handleHash('one', 'a')}>
            <Text>{this.state.textOne}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hash} onPress={() => this.handleHash('one', 'a')}>
            <Text>{this.state.textOne}</Text>
          </TouchableOpacity>
          {/* LINE 2 */}
          <TouchableOpacity style={styles.hashCenterHorizontal} onPress={() => this.handleHash('one', 'a')}>
            <Text>{this.state.textOne}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hashLine} onPress={() => this.handleHash('one', 'a')}>
            <Text>{this.state.textOne}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hashCenterHorizontal} onPress={() => this.handleHash('one', 'a')}>
            <Text>{this.state.textOne}</Text>
          </TouchableOpacity>
          {/* LINE 3 */}
          <TouchableOpacity style={styles.hash} onPress={() => this.handleHash('one', 'a')}>
            <Text>{this.state.textOne}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hashCenter} onPress={() => this.handleHash('one', 'a')}>
            <Text>{this.state.textOne}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hash} onPress={() => this.handleHash('one', 'a')}>
            <Text>{this.state.textOne}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(Hash)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerBlock: {
    width: 210,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'blue',
  },
  hashLine: {
    backgroundColor: '#fff',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#000',
    borderRightWidth: 2,
    borderLeftColor: '#000',
    borderLeftWidth: 2,
    borderTopColor: '#000',
    borderTopWidth: 2,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
  hash: {
    backgroundColor: '#fff',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hashCenter: {
    backgroundColor: '#fff',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#000',
    borderRightWidth: 2,
    borderLeftColor: '#000',
    borderLeftWidth: 2,
  },
  hashCenterHorizontal: {
    backgroundColor: '#fff',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#000',
    borderTopWidth: 2,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  }
});