// eslint arrow-body-style: ["error", "as-needed"]
// Refactored from functional component to class-based component

// #1 Import libs
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

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
	return this.state.albums.map(album => <Text>{album.title}</Text>);
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

// #3 Render on device
export default AlbumList;
