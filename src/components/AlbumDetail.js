/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

// Component for viewing album details

// #1. Import libs
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// #2. Make functional component
const AlbumDetail = (props) => {
	return (
		// Passed the Text tag as a comp. to the Card comp.
		<Card>
			<CardSection>
				<Text>{props.album.title}</Text>
			</CardSection>
		</Card>	
	);
};

// #3. Render
export default AlbumDetail;
