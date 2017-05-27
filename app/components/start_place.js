import React from 'react';
import {
	View,
	Text
} from 'react-native';
import Title from './title';

class StartPlace extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<View>
				<Title titleName='出发地选择' navigator={this.props.navigator}/>
			</View>
		)
	}
}

export default StartPlace;