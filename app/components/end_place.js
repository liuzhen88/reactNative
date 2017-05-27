import React from 'react';
import {
	View,
	Text
} from 'react-native';
import Title from './title';

export default class EndPlace extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<View>
				<Title titleName='目的地选择' navigator={this.props.navigator}/>
			</View>
		)
	}
}