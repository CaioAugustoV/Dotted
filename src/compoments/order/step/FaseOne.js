import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';

import FooterButtons from '../compoments/FooterButtons'
import HeaderButtons from '../compoments/HeaderButtons'

class App extends Component {
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
      points: 'x',
    }
  }
  selectBlock = ( number, colorBlock, value) => {
    switch (number) {
      case 'one':
        this.state.one == 'green' ? this.setState({ one: colorBlock }) : this.setState({ one: 'green' })
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
      points: `${this.state.points} ${val}`
    }, () => {
      switch (this.state.points) {
        case 'x a':
        //  alert(this.state.points)
        break;
        case 'x a b':
        //  alert(this.state.points)
        break;
        case 'x a b c':
        //  alert(this.state.points)
        break;
        case 'x a b c d':
        //  alert(this.state.points)
        break;
        case 'x a b c d e':
        //  alert(this.state.points)
        break;
        case 'x a b c d e f':
        //  alert(this.state.points)
        break;
        case 'x a b c d e f g':
        //  alert(this.state.points)
        break;
        case 'x a b c d e f g h':
        //  alert(this.state.points)
        break;
        case 'x a b c d e f g h i':
        this.setState({
          points: 'x',
          one: 'green',
          two: 'red',
          three: 'red',
          four: 'red',
          five: 'red',
          six: 'red',
          seven: 'red',
          eight: 'red',
          nine: 'red',
        }, () => {
          alert("Parabens você ganhou")
          // alert(this.state.points)
        })
        break;
        default:
          this.setState({
            points: 'x',
            one: 'green',
            two: 'red',
            three: 'red',
            four: 'red',
            five: 'red',
            six: 'red',
            seven: 'red',
            eight: 'red',
            nine: 'red',
          }, () => {
          // alert(this.state.points)
          alert("Você Perd  eu!")
          })
        break;
      }
    })
  }
  componentWillMount = () => {
    this.setState({
      one: 'green',
      two: 'red',
      three: 'red',
      four: 'red',
      five: 'red',
      six: 'red',
      seven: 'red',
      eight: 'red',
      nine: 'red',
      points: 'x',
    })
  };
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderButtons />
        </View>
        <View style={styles.containerBlock}>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.one}`}]} onPress={ () => this.selectBlock('one', 'white', 'a')}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.two}`}]} onPress={ () => this.selectBlock('two', 'white', 'e')}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.three}`}]} onPress={ () => this.selectBlock('three', 'white', 'c')}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.four}`}]} onPress={ () => this.selectBlock('four', 'white', 'h')}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.five}`}]} onPress={ () => this.selectBlock('five', 'white', 'i')}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.six}`}]} onPress={ () => this.selectBlock('six', 'white', 'g')}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.seven}`}]} onPress={ () => this.selectBlock('seven', 'white', 'd')}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.eight}`}]} onPress={ () => this.selectBlock('eight', 'white', 'f')}>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.block, {backgroundColor: `${this.state.nine}`}]} onPress={ () => this.selectBlock('nine', 'white', 'b')}>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <FooterButtons />
        </View>
      </View>
    );
  }
}

export default withNavigation(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
  }
});
