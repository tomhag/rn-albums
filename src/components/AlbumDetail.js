// eslint arrow-body-style: ["error", "as-needed"]

// #1. Import libs
import React from 'react';
import { View, Text } from 'react-native';


// #2. Functional component
const AlbumDetail = (props) => {
	return (
		<View>
			<Text>{props.album.title}</Text>
		</View>
	);
};

// #3. Render
export default AlbumDetail;
