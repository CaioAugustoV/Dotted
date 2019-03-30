import React, { Component } from 'react';
import { Image, Text, StyleSheet, StatusBar, View, TouchableOpacity, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';

const {height, width} = Dimensions.get('window');
class Hash extends Component {
	state = {
		one: '00',
		two: '00',

		// NUMBER RANDON
		selectOne: 1,
		selectTwo: 2,
		selectTree: 3,
		selectFive: 4,

		//CONTA
		numberOne: '00',
		numberTwo: '00',
		result: 0,
	}
	selectNumber = (val) => {
		if(this.state.numberOne == '00'){
			this.setState({
				numberOne: val,
			})
		}else{
			this.setState({
				numberTwo: val,
			}, () => this.result())
		}
	}
	result = () => {
		this.setState({
			result: this.state.numberOne + this.state.numberTwo,
		}, () => {
			switch (this.state.result) {
				case 3:
					alert("Parabens")
					this.setState({
						numberOne: '00',
						numberTwo: '00',
						result: 0,
					})
				break;
			
				default:
					this.setState({
						numberOne: '00',
						numberTwo: '00',
						result: 0,
					}, () => alert("Tente novamente"))	
				break;
			}
		})
	}
	render() {
		const { selectOne, selectTwo, selectTree, selectFive } = this.state
		return (
			<View style={styles.container}>
				<View style={styles.containerMath}>
					<View style={styles.mathSelect}>
						<Text style={styles.mathTextSelect}>{this.state.numberOne}</Text>
					</View>
					<View style={styles.math}>
						<Text style={styles.mathText}>+</Text>
					</View>
					<View style={styles.mathSelect}>
						<Text style={styles.mathTextSelect}>{this.state.numberTwo}</Text>
					</View>
					<View style={styles.math}>
						<Text style={styles.mathText}>=</Text>
					</View>
					<View style={styles.mathResult}>
						<Text style={styles.mathTextSelect}>03</Text>
					</View>
				</View>
				<View style={styles.containerRandon}>
					<TouchableOpacity style={styles.randon} onPress={() => this.selectNumber(selectOne)}>
						<Text style={styles.randonText}>01</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.randon} onPress={() => this.selectNumber(selectTwo)}>
						<Text style={styles.randonText}>02</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.randon} onPress={() => this.selectNumber(selectTree)}>
						<Text style={styles.randonText}>03</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.randon} onPress={() => this.selectNumber(selectFive)}>
						<Text style={styles.randonText}>04</Text>
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
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	containerMath: {
		backgroundColor: '#777',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: width/1.1,
		padding: 10,
	},
	math: {
		backgroundColor: '#fff',
		// height: 20,
		marginHorizontal: 10,
		paddingHorizontal: 10,
	},
	mathSelect: {
		padding: 10,
		backgroundColor: 'blue',
	},
	mathResult: {
		padding: 10,
		backgroundColor: 'red',
	},
	mathTextSelect: {
		fontSize: 36,
	},
	mathText: {
		fontSize: 26,
	},
	containerRandon: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: width/1.1,
		backgroundColor: '#333',
		flexWrap: 'wrap',
	},
	randon: {
		paddingVertical: 10,
		paddingHorizontal: 14,
		margin: 10,
		backgroundColor: '#999',
		borderRadius: 100,
	},
	randonText: {
		fontSize: 50,
	}
});