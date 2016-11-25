/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

// #1 Import RN lib (destructured) for making component

import React from 'react';
import { Text, View } from 'react-native';

// #2 Make Component

const Header = (h) => {
	const { textStyle, viewStyle } = Styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{h.headerText}</Text>
		</View>
	);
};

const Styles = {
	viewStyle: {
		backgroundColor: '#a8a8f8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
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
