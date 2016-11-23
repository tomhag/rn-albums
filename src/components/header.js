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
		backgroundColor: '#a8a8a8'
	},
	textStyle: {
		fontSize: 20
	}
};

// #3 Render on device

export default Header;
