/*eslint arrow-body-style: ["error", "as-needed"]*/
/*eslint-env es6*/

// #1 Import libs
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// #2 Make class-based component
class AlbumList extends Component {

	// Setup initial default state
	state = { albums: [] };

	// Update state
	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	}

	// Helper method
	renderAlbums() {
		return this.state.albums.map(album =>
			// <Text key={album.title}>{album.title}</Text>
			<AlbumDetail key={album.title} album={album} />
		);
	}

	// Use state
	render() {
		console.log(this.state);
		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

// #3 Render 
export default AlbumList;
