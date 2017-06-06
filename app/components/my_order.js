import React from 'react';
import {
	View
} from 'react-native';
import Title from './title';

class MyOrder extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<View>
				<Title titleName='我的订单' navigator={this.props.navigator}/>
			</View>
		)
	}
}

export default MyOrder;