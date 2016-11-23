/* eslint arrow-body-style: ["error", "always"]*/

// This is for IOS

// Goal 1: Get content on the screen with a RN component

// 'react' lib knows how a component should behave and work together
// 'react-native' lib knows how to take output and push onscreen(img, txt)

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create component

const App = () => {
	return (
		<Header />
	);
};

/*
// The above is really the same as:

	var App = function App() {
		return React.createElement(Text, null, "Some Text");
	};

// Render it to the device

	ReactNative.AppRegistry.registerComponent('albums', () => App);
*/

AppRegistry.registerComponent('albums', () =>App);
