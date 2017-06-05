import React from 'react';
import {
	View,
	Text
} from 'react-native';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
	return {
		test:state.test
	}
}

StartPlace = connect(mapStateToProps)(StartPlace);

export default StartPlace;