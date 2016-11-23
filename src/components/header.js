/* eslint arrow-body-style: ["error", "always"]*/

// #1 Import RN lib (destructured) for making component

import React from 'react';
import { Text, View } from 'react-native';

// #2 Make Component

const Header = () => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>Albums!</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#a8a8f8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

// #3 Render on device

export default Header;
