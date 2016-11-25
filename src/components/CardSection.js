/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

// #1. Libs
import React from 'react';
import { View } from 'react-native';

// #2. Component - Functional
// 
const CardSection = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

// Styles
const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};
// #3. Render
export default CardSection;
