import React from 'react';
import {
	View
} from 'react-native';
import Title from './title';

class PersonalCenter extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<View>
				<Title titleName='个人中心' navigator={this.props.navigator} isHideBack='true'/>
			</View>
		)
	}
}

export default PersonalCenter;