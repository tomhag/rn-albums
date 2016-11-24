/*eslint arrow-body-style: ["error", "ßalways"]*/
/*eslint-env es6*/

// #1. Import libs
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

// #2. Functional component
const AlbumDetail = (props) => {
	return (
		<Card>
			<Text>{props.album.title}</Text>
		</Card>
	);
};

// #3. Render
export default AlbumDetail;
