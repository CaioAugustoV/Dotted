import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';

import FadeInView from './FadeIn'

const {height, width} = Dimensions.get('window');
class SelectGame extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.containerTitle}>
					<Text style={styles.title}>Games</Text>
				</View>
				<ScrollView>
					<TouchableOpacity style={styles.containerGame} onPress={() => this.props.navigation.navigate('Math')}>
						<Image
							style={styles.androidLogo}
							source={require('../static/images/android.png')}
						/>
						<Text style={styles.textGame}>Math</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.containerGame} onPress={() => this.props.navigation.navigate('FaseOne')}>
						<Image
							style={styles.androidLogo}
							source={require('../static/images/android.png')}
						/>
						<Text style={styles.textGame}>Order</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}

export default withNavigation(SelectGame)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	containerTitle: {
		width: width,
		padding: 10,
		borderBottomWidth: 2,
		borderBottomColor: '#000',
	},
	title: {
		fontSize: 46,
	},
	androidLogo: {
		height: 130,
		width: 130,
	},
	containerGame: {
		width: width/1.05,
		padding: 10,
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: '#000',
		borderRadius: 10,
	},
	textGame: {
		fontSize: 24,
	}
});