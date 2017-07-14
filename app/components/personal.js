import React from 'react';
import {
	View
} from 'react-native';
import Title from './title';
import config from './config';

class PersonalCenter extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		config.getAjaxData('http://120.25.152.42:4000/getTravel','get',{},function(data){
			console.log(data);
		});
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