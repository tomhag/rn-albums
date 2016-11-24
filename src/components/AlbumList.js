/* eslint arrow-body-style: ["error", "always"]*/

// #1 Import libs
import React from 'react';
import { Text, View } from 'react-native';

// #2 Make component
const AlbumList = () => {
	const { viewStyle } = Styles;
	return (
		<View style={viewStyle}>
			<Text>Albumlistings</Text>
		</View>
	);
};

const Styles = {
	viewStyle: {
		backgroundColor: '#aaaaaa',
		height: 400
	} 
};

// #3 Render on device
export default AlbumList;
