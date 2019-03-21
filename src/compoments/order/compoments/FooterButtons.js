import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

const width = Dimensions.get('window').width;

class FooterButtons extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.containerButtons} onPress={() => this.props.navigation.navigate('AppInitial')}>
					<View style={styles.button}>
						<Image style={styles.arrowRight} source={require('../../../static/images/arrow.png')} />
					</View>
					<Text style={styles.textButton}>PREV</Text>
				</TouchableOpacity>
				
				<TouchableOpacity disabled={true} style={styles.containerButtons} onPress={() => this.props.navigation.navigate('AppInitial')}>
					<Text style={styles.textButton}>NEXT</Text>
					<View style={styles.button}>
						<Image style={styles.arrowLeft} source={require('../../../static/images/arrow.png')} />
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

export default withNavigation(FooterButtons)

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#000',
		padding: 10,
		width: width,
	},
	arrowRight: {
		height: 40,
		width: 20,
	},
	arrowLeft: {
		height: 40,
		width: 20,
		transform: [{ rotate: '180deg' }],
	},
	containerButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
		width: width / 3,
		padding: 5,
    borderRadius: 10,
	},
	textButton:{
		fontSize: 30,
	}
});