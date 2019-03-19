import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    state = {
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      six: '',
      seven: '',
      eight: '',
      nine: '',
      points: 0,
    }
  }
  selectBlock = ( number, colorBlock, value) => {
    switch (number) {
      case 'one':
        this.state.one == 'red' ? this.setState({ one: colorBlock }) : this.setState({ one: 'red' })
        this.memory(value)
      break;
      case 'two':
        this.state.two == 'red' ? this.setState({ two: colorBlock }) : this.setState({ two: 'red' })
        this.memory(value)
      break;
      case 'three':
        this.state.three == 'red' ? this.setState({ three: colorBlock }) : this.setState({ three: 'red' })
        this.memory(value)
      break;
      case 'four':
        this.state.four == 'red' ? this.setState({ four: colorBlock }) : this.setState({ four: 'red' })
        this.memory(value)
      break;
      case 'five':
        this.state.five == 'red' ? this.setState({ five: colorBlock }) : this.setState({ five: 'red' })  
        this.memory(value)
      break;
      case 'six':
        this.state.six == 'red' ? this.setState({ six: colorBlock }) : this.setState({ six: 'red' })  
        this.memory(value)
      break;
      case 'seven':
        this.state.seven == 'red' ? this.setState({ seven: colorBlock }) : this.setState({ seven: 'red' })  
        this.memory(value)
      break;
      case 'eight':
        this.state.eight == 'red' ? this.setState({ eight: colorBlock }) : this.setState({ eight: 'red' })  
        this.memory(value)
      break;
      case 'nine':
        this.state.nine == 'red' ? this.setState({ nine: colorBlock }) : this.setState({ nine: 'red' })  
        this.memory(value)
      break;
        console.log("NÃO CONSEGUE NE")
      default:
        break;
    }    
  }
  memory = (val) => {
    this.setState({
      points: this.state.points + val
    }, () => {
      switch (this.state.points) {
        case 11:
        //  alert("TO NO UM")
        break;
        case 33:
        //  alert("TO NO 2")
        break;
        case 66:
        //  alert("TO NO 3")
        break;
        case 110:
        //  alert("TO NO 4")
        break;
        case 165:
        //  alert("TO NO 5")
        break;
        case 231:
        //  alert("TO NO 6")
        break;
        case 308:
        //  alert("TO NO 7")
        break;
        case 396:
        //  alert("TO NO 8")
        break;
        case 495:
         alert("Parabens você ganhou")
        break;
        default:
          this.setState({
            points: 0,
            one: 'red',
            two: 'red',
            three: 'red',
            four: 'red',
            five: 'red',
            six: 'red',
            seven: 'red',
            eight: 'red',
            nine: 'red',
          }, () => {
            alert("Você Perdeu!")
          })
        break;
      }
    })
  }
  componentWillMount = () => {
    this.setState({
      one: 'red',
      two: 'red',
      three: 'red',
      four: 'red',
      five: 'red',
      six: 'red',
      seven: 'red',
      eight: 'red',
      nine: 'red',
      points: 0,
    })
  };
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerBlock}>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.one}`}]} onPress={ () => this.selectBlock('one', 'white', 11)}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.two}`}]} onPress={ () => this.selectBlock('two', 'white', 55)}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.three}`}]} onPress={ () => this.selectBlock('three', 'white', 33)}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.four}`}]} onPress={ () => this.selectBlock('four', 'white', 88)}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.five}`}]} onPress={ () => this.selectBlock('five', 'white', 99)}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.six}`}]} onPress={ () => this.selectBlock('six', 'white', 77)}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.seven}`}]} onPress={ () => this.selectBlock('seven', 'white', 44)}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.eight}`}]} onPress={ () => this.selectBlock('eight', 'white', 66)}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.nine}`}]} onPress={ () => this.selectBlock('nine', 'white', 22)}>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  containerBlock: {
    width: 210,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'blue',
  },
  block: {
    width: 50,
    height: 50,
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
