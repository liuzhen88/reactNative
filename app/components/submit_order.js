import React from 'react';
import {
	View
} from 'react-native';

import Title from './title';

class SubmitOrder extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<View>
				<Title titleName='包团定制下单' navigator={this.props.navigator}/>
			</View>
		)
	}
}

export default SubmitOrder;