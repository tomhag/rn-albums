/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

// Component for styling, CSS style

// #1 Import libs
import React from 'react';
import { View } from 'react-native';

// #2 Make functional component
const Card = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 2,
		borderRadius: 8,
		borderColor: '#ddd',
		borderBottomWidth: 2,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}

};
// #3 Render
export default Card;
