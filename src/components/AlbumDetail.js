/*eslint arrow-body-style: ["error", "always"]*/
/*eslint-env es6*/

// Component for viewing album details

// #1. Import libs
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// #2. Make functional component
//const AlbumDetail = (props) => {
const AlbumDetail = ({ album }) => {
	const { thumbnail_image, title, artist, image } = album;
	const { 
		thumbnailStyle,
		headContStyle,
		thumbnailContainerStyle,
		headerTextStyle,
		imageStyle
	} = styles;

	return (
		<Card>

			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image
						style={thumbnailStyle} 
						source={{ uri: thumbnail_image }}
					/>
				</View>
				<View style={headContStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>	
			</CardSection>

			<CardSection>
					<Image
						style={imageStyle}
						source={{ uri: image }}
					/>					
			</CardSection>

		</Card>	
	);
};

// Styles
const styles = {
	headContStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},

	headerTextStyle: {
		fontSize: 20,
		color: '#a22'
	},

	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},

	thumbnailStyle: {
		height: 50,
		width: 50
	},

	imageStyle: {
		height: 200,
		flex: 1,
		width: null
	}

};

// #3. Render
export default AlbumDetail;
