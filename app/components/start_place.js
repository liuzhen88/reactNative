import React from 'react';
import {
	View,
	Text
} from 'react-native';
import Title from './title';

class StartPlace extends React.Component {
	render(){
		return (
			<View>
				<Title titleName='出发地选择'/>
			</View>
		)
	}
}

export default StartPlace;